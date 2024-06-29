// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer/Footer";
import AuthProvider from "../AuthProvider/AuthProvider";

const Root = () => {
    return (
        <div>
         <Navbar></Navbar>
         <AuthProvider  text={'hello'}></AuthProvider>
         <Outlet></Outlet>
         <Footer></Footer>
        </div>
    );
};

export default Root;