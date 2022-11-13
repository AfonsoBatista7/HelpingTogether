import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout({ changeTheme, theme, children }) {
    return (
        <div>
            <Header changeTheme={changeTheme} />
              {children}
            <Footer />
        </div>
    );
}
