import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "../components/home/Home";

export default function Layout({ children }) {
    return (
        <div>
            <Header />
              {children}
            <Footer />
        </div>
    );
}
