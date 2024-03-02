export const FormatDate = (date: Date): string => {
    const formatedDate = new Date(date);
    return `${formatedDate.getDate().toString()}/${formatedDate.getMonth().toString()}/${formatedDate.getFullYear()}`;
}