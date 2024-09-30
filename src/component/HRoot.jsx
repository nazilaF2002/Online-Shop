import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

export default function HRoot(){
    return(
        <>
        <Navbar/>
        <Outlet/>
        </>
    );
}