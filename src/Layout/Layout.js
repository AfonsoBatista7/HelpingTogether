import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";

export default function Layout() {

    return (
        <div>
            <Header />
              {children}
            <Footer />
        </div>
    );
}
