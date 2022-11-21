import React from "react";
import style from "./layout.module.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function Layout({children}) {

    return (
        <div className={style.layout}>
            <Header />
              {children}
            <Footer />
        </div>
    );
}
