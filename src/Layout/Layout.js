import React from "react";
import style from "./layout.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";

export default function Layout({children}) {

    return (
        <div className={style.layout}>
            <Header />
              {children}
            <Footer />
        </div>
    );
}
