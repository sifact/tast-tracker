import React from "react";
import { createBrowserRouter } from "react-router-dom";

import AddTasks from "../components/AddTasks/AddTasks";
import CompletedTasks from "../components/CompletedTasks/CompletedTasks";
import EditTasks from "../components/EditTasks/EditTasks";
import Media from "../components/Media/Media";
import MyAlbum from "../components/MyAlbum/MyAlbum";
import MyTasks from "../components/MyTasks/MyTasks";
import Login from "../components/Register/Login/Login";
import Register from "../components/Register/Register/Register";
import Main from "../Layouts/Main";
import PrivateRoute from "./PrivateRoute";

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

                element: (
                    <PrivateRoute>
                        <MyTasks />
                    </PrivateRoute>
                ),
            },
            {
                path: "/completedTasks",
                element: (
                    <PrivateRoute>
                        <CompletedTasks />
                    </PrivateRoute>
                ),
            },
            {
                path: "/media",
                element: <Media />,
            },
            {
                path: "/myAlbum",
                element: (
                    <PrivateRoute>
                        <MyAlbum />
                    </PrivateRoute>
                ),
            },
            {
                path: "/edit/:id",
                element: <EditTasks />,
                loader: ({ params }) =>
                    fetch(
                        `https://server-jet-seven.vercel.app/edit/${params.id}`
                    ),
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
