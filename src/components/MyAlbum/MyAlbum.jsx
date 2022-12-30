import React, { useContext } from "react";
import "./MyAlbum.scss";
import { useQuery } from "@tanstack/react-query";

import { MdAddComment } from "react-icons/md";
import { AuthContext } from "../../contexts/AuthProvider";
import MyAlbumContent from "./MyAlbumContent";

const MyAlbum = () => {
    const { user } = useContext(AuthContext);

    const { data: myAlbums = [], refetch } = useQuery({
        queryKey: ["myAlbums", user?.email],
        queryFn: async () => {
            const res = await fetch(
                `http://localhost:5000/myAlbums/${user?.email}`
            );
            const data = await res.json();
            return data;
        },
    });

    return (
        <section className="section-media">
            <div className="box-wrapper-media container">
                {myAlbums.map((item) => (
                    <MyAlbumContent key={item._id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default MyAlbum;
