import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Layout({ children }) {
    return (
        <div>
            <Header />
              {children}
            <Footer />
        </div>
    );
}


