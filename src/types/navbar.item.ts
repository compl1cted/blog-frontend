import { ReactNode}  from "react";

export interface NavbarItem {
    value: string,
    label: string,
    icon: ReactNode,
    // onClick: () => any
}