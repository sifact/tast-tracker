import React from "react";
import { createBrowserRouter } from "react-router-dom";

import AddTasks from "../components/AddTasks/AddTasks";
import CompletedTasks from "../components/CompletedTasks/CompletedTasks";
import EditTasks from "../components/EditTasks/EditTasks";
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
                path: "/edit/:id",
                element: <EditTasks />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/edit/${params.id}`),
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
