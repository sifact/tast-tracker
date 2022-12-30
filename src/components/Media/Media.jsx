import React from "react";
import "./Media.css";
import { useQuery } from "@tanstack/react-query";
import MediaContent from "./MediaContent/MediaContent";

const Media = () => {
    const { data: myAlbums = [], refetch } = useQuery({
        queryKey: ["myAlbums"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myAlbums`);
            const data = await res.json();
            return data;
        },
    });

    return (
        <section className="section-media">
            <div className="box-wrapper-media container">
                {myAlbums.map((item) => (
                    <MediaContent key={item._id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default Media;
