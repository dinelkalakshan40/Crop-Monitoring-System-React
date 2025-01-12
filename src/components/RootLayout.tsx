import {Navigation} from "./Navigation.tsx";
import {Outlet} from "react-router";

export const RootLayout=()=>{
    return(
        <div>
            <header>
                <Navigation></Navigation>
            </header>
            <Outlet/>
        </div>
    )
}