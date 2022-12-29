import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const EditTasks = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const task = useLoaderData();
    const { title, _id, description, date } = task;
    console.log(task);
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.task.value;
        const description = form.description.value;
        const date = form.date.value;

        const task = {
            title,
            description,
            date,
        };
        console.log(task);

        fetch(`https://server-jet-seven.vercel.app/edit/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(task),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("task Updated");
                    // navigate("/completedTasks");
                    navigate(from, { replace: true });
                } else {
                    toast.error(data.message);
                }
                form.reset();
            });
    };

    return (
        <div className="form-wrapper container">
            <form onSubmit={handleSubmit} className="add-form">
                <h2 className="section-title">Update your tasks</h2>
                <input
                    className="form-input"
                    type="text"
                    name="task"
                    placeholder="title"
                    defaultValue={title}
                />
                <textarea
                    className="form-input textarea"
                    name="description"
                    placeholder="description"
                    id=""
                    cols="30"
                    rows="5"
                    defaultValue={description}
                ></textarea>

                <input
                    className="form-input"
                    type="text"
                    name="date"
                    placeholder="date"
                    defaultValue={date}
                />

                <button className="btn">Update</button>
            </form>
        </div>
    );
};

export default EditTasks;
