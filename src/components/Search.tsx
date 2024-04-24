import Fuse from "fuse.js";
import { useState } from "react";
import { getCollection } from "astro:content";
import PostCard from "./PostCard.astro";

const posts = (await getCollection("blog")).sort(
    (a, b) => {
        const aDate = a.data.updatedDate || a.data.pubDate;
        const bDate = b.data.updatedDate || b.data.pubDate;
        return bDate.valueOf() - aDate.valueOf();
    }
);

const Search = (poststosearch: any) => {
    const [input, setinput] = useState("");

    const fuse = new Fuse(poststosearch.poststosearch, {
        keys: ["data.title", "data.description", "body"],
    });

    return (
        <div className="pt-6 sm:w-[auto]">
            <div className="flex items-center border-b sm:w-[36.5%]">
                <input
                    type="text"
                    placeholder="Search . . ."
                    className="w-full outline-none bg-transparent focus:bg-transparent target:bg-transparent"
                    value={input}
                    onChange={(e) => {
                        setinput(e.target.value);
                    }}
                />

                <span className="pointer-events-none text-gray-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path
                        fill="#94e2d5"
                        d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"
                        ></path>
                    </svg>
                </span>
            </div>

            <div className="pt-6 sm:w-[max-content]">
                {fuse.search(input).map((result: any, index: any) => (
                    <a href={`/blog/${result.item.slug}`} key={index}>                   
                        <div className="py-5 border-b border-zinc-800 transition-all ease-in-out duration-300 cursor-pointer">
                            <p className="pb-2 custom-title" transition-name="${post.data.title}">
                                [{result.item.data.title}]
                            </p>
                            <p className="font-light text-slate-300 custom-subtitle">
                            {">"} {result.item.data.description}
                            </p>
                        </div>
                    </a>
                ))}
                {
                    (input.length > 0 && fuse.search(input).length === 0) && (
                        <div className="py-6">
                            <p>No results found</p>
                        </div>
                    )
                }
                {
                    (input.length > 0) && (
                        <div className="border-b search-border"></div>
                    )
                }
            </div>
        </div>
    );
};

export default Search;
