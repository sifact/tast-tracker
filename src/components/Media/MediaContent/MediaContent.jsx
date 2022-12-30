import React from "react";

import { MdAddComment } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const MediaContent = ({ item }) => {
    const { user } = useContext(AuthContext);
    const { title, description, img, date } = item;

    return (
        <div className="box-media">
            <h1>{user?.displayName}</h1>
            <small className="media-date">{date}</small>
            <h2>{title}</h2>
            <p>{description}</p>
            <img style={{ width: "100%" }} src={img} alt="" />

            <div className="comment">
                <MdAddComment style={{ fontSize: "30px", marginTop: "2rem" }} />
            </div>
        </div>
    );
};

export default MediaContent;
