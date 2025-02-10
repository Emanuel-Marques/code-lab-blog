"use client";
import Image from "next/image";
import heartActive from "../../../public/icon-heart-active.png";
import heartDesative from "../../../public/icon-heart-disable.png";
import { BlogPost } from "@/lib/types";
import { useEffect, useState } from "react";


export default function PostCard({id, date, title, content}: BlogPost){
    const [isFavorite, setIsFavorite] = useState(false);
    useEffect(() => {
        const storedFavorites = localStorage.getItem("favoritePosts");
        const favoritesArray: BlogPost[] = storedFavorites ? JSON.parse(storedFavorites) : [];

        if (Array.isArray(favoritesArray)) {
            setIsFavorite(favoritesArray.some((fav) => fav.id === id));
        }
    }, [id]);
    
    function toggleFavorite() {
        const storedFavorites = localStorage.getItem("favoritePosts");
        let favoritesArray: BlogPost[] = storedFavorites ? JSON.parse(storedFavorites) : [];

        if (!Array.isArray(favoritesArray)) {
            favoritesArray = []; 
        }
        if (isFavorite) {
            favoritesArray = favoritesArray.filter((fav) => fav.id !== id);
        } else {
            favoritesArray.push({ id, date, title, content });
        }

        localStorage.setItem("favoritePosts", JSON.stringify(favoritesArray));
        setIsFavorite(!isFavorite);
    }

    return(
        <>
            <div className="border-2 border-dark-40 rounded-lg flex flex-col gap-5 p-10 mb-5 bg-dark-20 hover:border-brand-color transition-colors duration-500">
                <div className="flex justify-between">
                    <p className="font-inter text-brand-color text-sm">{date}</p>
                    <Image
                        src={isFavorite ? heartActive : heartDesative}
                        width={20}
                        alt="heart-icon"
                        className="cursor-pointer"
                        onClick={toggleFavorite}
                    />
                </div>
                <p className="font-space text-dark-60 text-2xl">{title}</p>
                <p className="font-inter text-dark-50 text-xl">{content}</p>
            </div>
        </>
    )
}