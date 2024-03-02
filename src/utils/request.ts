export const API_URL = "http://localhost:9003/api";

export enum HttpMethods {
    POST = "POST",
    GET = "GET",
    PUT = "PUT",
    DELETE = "DELETE"
}

export async function request(url: string, method: HttpMethods, body?: any): Promise<any> {
    const requestUrl = `${API_URL}/${url}`;
    const requestOptions: RequestInit = {
        mode: "cors",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage['token']}`
        },
        method,
        credentials: "include",
        body: JSON.stringify(body)
    }
    const request = new Request(requestUrl, requestOptions);
    const response = await fetch(request);

    if (response.status === 401 && url !== "auth/refresh" && localStorage['token'] !== undefined) {
        const refreshResponse = await fetch(`${API_URL}/auth/refresh`, {
            mode: "cors",
            credentials: "include",
        });

        if (refreshResponse.status === 401) {
            throw new Error("Unauthorized!");
        }

        const refreshData = await refreshResponse.json();
        localStorage.setItem("token", refreshData.accessToken);
    }

    return await response.json();
}