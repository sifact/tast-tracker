import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import "./AddTasks.scss";

const AddTasks = () => {
    const { user } = useContext(AuthContext);
    const [imageURL, setImageURL] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        if (!user) {
            {
                toast.error("Plz login to add task");
                return navigate("/login");
            }
        }
        e.preventDefault();
        const form = e.target;
        const title = form.task.value;
        const description = form.description.value;

        const date = form.date.value;
        // const image = form.image.files[0];
        // const formData = new FormData();
        // formData.append("image", image);

        // const url = `https://api.imgbb.com/1/upload?key=64e667daa534441b34c11968ad072ef6`;

        // fetch(url, {
        //     method: "POST",
        //     body: formData,
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setImageURL(data.data.display_url);

        //         console.log("inside image");
        //     })
        //     .catch((e) => console.log(e));

        const tasks = {
            email: user?.email,
            img: imageURL,
            title,
            description,
            date,
            completed: false,
        };
        console.log(tasks);

        fetch("https://server-jet-seven.vercel.app/myTasks", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(tasks),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                console.log("inside server");
                if (data.acknowledged) {
                    toast.success("task added");
                    navigate("/myTasks");
                } else {
                    toast.error(data.message);
                }
                form.reset();
            });
    };

    return (
        <div className="form-wrapper container">
            <form onSubmit={handleSubmit} className="add-form">
                <h2 className="section-title">Add your tasks</h2>
                <input
                    className="form-input"
                    type="text"
                    name="task"
                    placeholder="title"
                    required
                />
                <textarea
                    className="form-input textarea"
                    name="description"
                    placeholder="description"
                    id=""
                    cols="30"
                    rows="5"
                ></textarea>

                {/* <input
                    className="form-input"
                    type="file"
                    name="image"
                    accept="image/*"
                /> */}
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
