import React from "react";
import style from "./layout.module.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "../components/home/Home";

export default function Layout({children}) {

    return (
        <div className={style.layout}>
            <Header />
              {children}
            <Home marginTop={100}/>
            <Footer />
        </div>
    );
}
