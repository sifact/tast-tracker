import React from "react";
import "./AddTasks.scss";
const AddTasks = () => {
    return (
        <div className="form-wrapper">
            <form className="add-form">
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
