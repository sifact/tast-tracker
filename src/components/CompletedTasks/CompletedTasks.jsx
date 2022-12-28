import React from "react";
import "./CompletedTasks.css";
import { MdDoneAll, MdRemoveDone } from "react-icons/md";
import { useState } from "react";

const CompletedTasks = () => {
    const [isHovering, setIsHovering] = useState(true);

    return (
        <div className="myTasks-section">
            <div className="box-wrapper">
                <h2 className="section-title">Completed Tasks</h2>
                <div className="box">
                    <div className="content">
                        <span className="title">Meeting</span>
                        <br />
                        <span className="description">special meeting</span>
                        <br />
                        <span className="date">30 Dec, 2022</span>
                    </div>
                    {isHovering && (
                        <MdDoneAll
                            onMouseOver={() => setIsHovering(false)}
                            style={{
                                cursor: "pointer",
                                fontSize: "30px",
                                color: "var(--tertiary)",
                            }}
                        />
                    )}
                    {!isHovering && (
                        <MdRemoveDone
                            onMouseOut={() => setIsHovering(true)}
                            style={{
                                cursor: "pointer",
                                fontSize: "30px",
                                color: "var(--tertiary)",
                            }}
                        />
                    )}
                </div>
                <div className="box">
                    <div className="content">
                        <span className="title">Meeting</span>
                        <br />
                        <span className="description">special meeting</span>
                        <br />
                        <span className="date">30 Dec, 2022</span>
                    </div>
                    {isHovering && (
                        <MdDoneAll
                            onMouseOver={() => setIsHovering(false)}
                            style={{
                                cursor: "pointer",
                                fontSize: "30px",
                                color: "var(--tertiary)",
                            }}
                        />
                    )}
                    {!isHovering && (
                        <MdRemoveDone
                            onMouseOut={() => setIsHovering(true)}
                            style={{
                                cursor: "pointer",
                                fontSize: "30px",
                                color: "var(--tertiary)",
                            }}
                        />
                    )}
                </div>

                <div className="box">
                    <div className="content">
                        <span className="title">Meeting</span>
                        <br />
                        <span className="description">special meeting</span>
                        <br />
                        <span className="date">30 Dec, 2022</span>
                    </div>
                    {isHovering && (
                        <MdDoneAll
                            onMouseOver={() => setIsHovering(false)}
                            style={{
                                cursor: "pointer",
                                fontSize: "30px",
                                color: "var(--tertiary)",
                            }}
                        />
                    )}
                    {!isHovering && (
                        <MdRemoveDone
                            onMouseOut={() => setIsHovering(true)}
                            style={{
                                cursor: "pointer",
                                fontSize: "30px",
                                color: "var(--tertiary)",
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default CompletedTasks;
