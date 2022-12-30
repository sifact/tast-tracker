import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const MyAlbumContent = ({ item }) => {
    const { user } = useContext(AuthContext);
    const { title, description, img, date } = item;

    return (
        <div className="box-media">
            <h1>{user?.displayName}</h1>
            <p>{description}</p>
            <img style={{ width: "100%" }} src={img} alt="" />
        </div>
    );
};

export default MyAlbumContent;
