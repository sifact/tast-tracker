import React, { useContext } from "react";
import "./CompletedTasks.css";

import { useState } from "react";
import CompletedTask from "./CompletedTask/CompletedTask";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../contexts/AuthProvider";

const CompletedTasks = () => {
    const { user } = useContext(AuthContext);

    const { data: completedTasks = [], refetch } = useQuery({
        queryKey: ["completedTasks", user?.email],
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
                <h2 className="section-title">Completed Tasks</h2>

                {completedTasks.map((task) => {
                    if (task.completed) {
                        return (
                            <CompletedTask
                                key={task._id}
                                refetch={refetch}
                                task={task}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default CompletedTasks;
