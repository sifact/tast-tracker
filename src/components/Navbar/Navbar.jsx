import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar = ({ switchTheme, theme }) => {
    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((e) => console.log(e.message));
    };

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
                    <NavLink onClick={switchTheme}>
                        {" "}
                        {theme === "dark" ? (
                            <BsSunFill />
                        ) : (
                            <BsFillMoonStarsFill style={{ width: "20px" }} />
                        )}{" "}
                    </NavLink>
                    {user ? (
                        <NavLink onClick={handleLogOut}>Log out</NavLink>
                    ) : (
                        <>
                            <NavLink to="/login">Log in</NavLink>
                            <NavLink to="/register">Sign up</NavLink>
                        </>
                    )}
                </div>
            </nav>
            {/* <NavLink to="/quiz/id"></NavLink> */}
        </div>
    );
};

export default Navbar;
