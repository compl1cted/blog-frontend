export interface IRoute {
    path: string;
    component: (props: any) => JSX.Element;
    props?: any;
    exact: boolean;
}