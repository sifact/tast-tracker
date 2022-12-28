import React from "react";
import { createBrowserRouter } from "react-router-dom";

import AddTasks from "../components/AddTasks/AddTasks";
import CompletedTasks from "../components/CompletedTasks/CompletedTasks";
import MyTasks from "../components/MyTasks/MyTasks";
import Login from "../components/Register/Login/Login";
import Register from "../components/Register/Register/Register";
import Main from "../Layouts/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <AddTasks />,
            },
            {
                path: "/myTasks",
                element: <MyTasks />,
            },
            {
                path: "/completedTasks",
                element: <CompletedTasks />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);

export default router;
