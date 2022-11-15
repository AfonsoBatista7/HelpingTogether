import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SearchBar from "../components/search/SearchBar";

export default function Layout({ children }) {
    return (
        <div>
            <Header />
              {children}
              <SearchBar/>
            <Footer />
        </div>
    );
}
