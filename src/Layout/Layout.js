import React from "react";
import style from "./layout.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Layout({children}) {

    return (
        <div className={style.layout}>
            <Header />
              {children}
            <Footer />
        </div>
    );
}
