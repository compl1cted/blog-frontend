export interface IRoute {
    path: string;
    page: (props: any) => JSX.Element;
    props?: any;
}