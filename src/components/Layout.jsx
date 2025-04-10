import { Outlet } from "react-router";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";


export default function Layout (){
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    );
}