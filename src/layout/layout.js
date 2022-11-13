import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Button from '@mui/material/Button'; 

export default function Layout({ children }) {
    return (
        <div>
            <Header />
              {children}
            <Footer />
        </div>
    );
}
