import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../components/home/Home";

export default function Layout() {

    return (
        <div>
            <Header />
            <Home marginTop={100}/>
            <Footer />
        </div>
    );
}
