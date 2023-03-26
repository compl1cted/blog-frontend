export const GetCurrentTime = () => {
    const dateObj = new Date();
    const date = dateObj.getDate() + "/"
        + (dateObj.getMonth() + 1) + "/"
        + dateObj.getFullYear() + " "
        + dateObj.getHours() + ":"
        + dateObj.getMinutes() + ":"
        + dateObj.getSeconds();
    return date;
}