import React, { useState } from "react";
import { MdDoneAll, MdRemoveDone } from "react-icons/md";
import { toast } from "react-hot-toast";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const CompletedTask = ({ task, refetch }) => {
    const { title, description, _id, date } = task;
    const [isHovering, setIsHovering] = useState(true);

    const addInCompleted = (task) => {
        console.log(task);

        // mark as complete
        fetch(`http://localhost:5000/markInComplete/${task._id}`, {
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
                    toast.success("Added to my task");
                } else {
                    toast.error(data.message);
                }
            });
    };

    const handleUpdate = (id) => {};
    return (
        <div className="box">
            <div className="content">
                <span className="title">{title}</span>
                <br />
                <span className="description">{description}</span>
                <br />
                <span className="date">{date}</span>
            </div>
            <div>
                {isHovering && (
                    <MdDoneAll
                        onMouseOver={() => setIsHovering(false)}
                        style={{
                            cursor: "pointer",
                            fontSize: "22px",
                            // color: "var(--tertiary)",
                        }}
                    />
                )}
                {!isHovering && (
                    <MdRemoveDone
                        onClick={() => {
                            addInCompleted(task);
                        }}
                        onMouseOut={() => setIsHovering(true)}
                        style={{
                            cursor: "pointer",
                            fontSize: "22px",
                            // color: "var(--tertiary)",
                        }}
                    />
                )}
                <br />
                <Link to={`/edit/${_id}`}>
                    <AiFillEdit
                        onClick={() => handleUpdate(_id)}
                        style={{
                            cursor: "pointer",
                            fontSize: "22px",
                            // color: "var(--tertiary)",
                        }}
                    />
                </Link>
                <br />
                <AiOutlineDelete
                    style={{
                        cursor: "pointer",
                        fontSize: "22px",
                        // color: "var(--danger)",
                    }}
                />
            </div>
        </div>
    );
};

export default CompletedTask;