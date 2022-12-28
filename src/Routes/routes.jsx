import React from "react";
import { createBrowserRouter } from "react-router-dom";

import AddTasks from "../components/AddTasks/AddTasks";
import CompletedTasks from "../components/CompletedTasks/CompletedTasks";
import MyTasks from "../components/MyTasks/MyTasks";
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
        ],
    },
]);

export default router;
