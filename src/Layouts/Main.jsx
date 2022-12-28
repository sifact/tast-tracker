import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import useLocalStorage from "use-local-storage";

const Main = () => {
    const [theme, setTheme] = useLocalStorage("theme" ? "light" : "dark");

    const switchTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };
    return (
        <div data-theme={theme} style={{ height: "100%" }}>
            <Navbar switchTheme={switchTheme} theme={theme} />
            <Outlet />
        </div>
    );
};

export default Main;
