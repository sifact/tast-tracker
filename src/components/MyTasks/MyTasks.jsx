import React, { useContext } from "react";
import "./MyTasks.css";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import MyTask from "./MyTask/MyTask";

const MyTasks = () => {
    const { user } = useContext(AuthContext);

    const { data: myTasks = [], refetch } = useQuery({
        queryKey: ["myTasks", user?.email],
        queryFn: async () => {
            const res = await fetch(
                `http://localhost:5000/myTasks/${user?.email}`
            );
            const data = await res.json();
            return data;
        },
    });

    return (
        <div className="myTasks-section">
            <div className="box-wrapper">
                <h2 className="section-title">Tasks not completed yet</h2>
                {myTasks.map((task) => {
                    if (task.completed === false) {
                        return (
                            <MyTask
                                refetch={refetch}
                                key={task._id}
                                task={task}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default MyTasks;
