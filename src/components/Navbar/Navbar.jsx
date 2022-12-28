import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

const Navbar = ({ switchTheme, theme }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="nav__wrapper">
            <nav className="container">
                <h1 className="nav__title">
                    Task <span className="primary">Tracker</span>
                </h1>
                <div
                    // className="h-6 w-6 md:hidden"
                    style={{ width: "30px", height: "30px" }}
                    onClick={() => setOpen(!open)}
                    className="icon"
                >
                    {open ? <XMarkIcon /> : <Bars3Icon />}
                </div>
                <div
                    className={
                        open
                            ? "d__block nav__link transition"
                            : "d__none nav__link transition"
                    }
                >
                    <NavLink to="/">Add Task</NavLink>
                    <NavLink to="/myTasks">My Tasks</NavLink>
                    <NavLink to="/completedTasks">Completed Tasks</NavLink>
                    <NavLink>
                        {" "}
                        {theme === "light" ? (
                            <BsFillMoonStarsFill
                                onClick={() => switchTheme()}
                            />
                        ) : (
                            <BsSunFill
                                style={{ width: "20px" }}
                                onClick={() => switchTheme()}
                            />
                        )}{" "}
                    </NavLink>
                    <NavLink to="/login">Log in</NavLink>
                    <NavLink to="/register">Sign up</NavLink>
                </div>
            </nav>
            {/* <NavLink to="/quiz/id"></NavLink> */}
        </div>
    );
};

export default Navbar;
