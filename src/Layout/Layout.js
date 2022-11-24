import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import style from "./layout.module.css";
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
