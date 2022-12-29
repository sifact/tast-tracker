import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";
import "./AddTasks.scss";

const AddTasks = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.task.value;
        const description = form.description.value;
        const date = form.date.value;

        const tasks = {
            email: user?.email,
            title,
            description,
            date,
            completed: false,
        };
        console.log(tasks);

        fetch("http://localhost:5000/myTasks", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(tasks),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("task added");
                } else {
                    toast.error(data.message);
                }
                form.reset();
            });
    };

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit} className="add-form">
                <h2 className="section-title">Add your tasks</h2>
                <input
                    className="form-input"
                    type="text"
                    name="task"
                    placeholder="title"
                />
                <textarea
                    className="form-input textarea"
                    name="description"
                    placeholder="description"
                    id=""
                    cols="30"
                    rows="5"
                ></textarea>

                <input
                    className="form-input"
                    type="text"
                    name="date"
                    placeholder="date"
                />

                <button className="btn">submit</button>
            </form>
        </div>
    );
};

export default AddTasks;
