import React, { useState } from "react";
import { MdDoneAll, MdRemoveDone } from "react-icons/md";
import { toast } from "react-hot-toast";

const MyTask = ({ task, refetch }) => {
    const { title, description, date, completed, _id } = task;
    const [isHovering, setIsHovering] = useState(true);

    const addCompleted = (task) => {
        console.log(task);

        // mark as complete
        fetch(`http://localhost:5000/addCompleted/${task._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            // body: JSON.stringify(id),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                refetch();
                console.log(task);
                if (data.acknowledged) {
                    toast.success("task completed");
                } else {
                    toast.error(data.message);
                }
            });
    };
    return (
        <div className="box">
            <div className="content">
                <span className="title">{title}</span>
                <br />
                <span className="description">{description}</span>
                <br />
                <span className="date">{date}</span>
            </div>
            {isHovering && (
                <MdRemoveDone
                    onMouseOver={() => setIsHovering(false)}
                    style={{
                        cursor: "pointer",
                        fontSize: "30px",
                        color: "var(--tertiary)",
                    }}
                />
            )}
            {!isHovering && (
                <MdDoneAll
                    onClick={() => addCompleted(task)}
                    onMouseOut={() => setIsHovering(true)}
                    style={{
                        cursor: "pointer",
                        fontSize: "30px",
                        color: "var(--tertiary)",
                    }}
                />
            )}
        </div>
    );
};

export default MyTask;
