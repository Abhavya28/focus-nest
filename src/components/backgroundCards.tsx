"use client";

import { useDispatch } from "react-redux";
import { setBackground } from "../redux/features/backgroundSlice";
import { useState } from "react";

const backgrounds = [
    {
        name: "Rain",
        image: "/backgrounds/rain.jpg",
        audio: "/audios/rain.mp3",
    },
    {
        name: "Forest",
        image: "/backgrounds/forest.jpg",
        audio: "/audios/forest.mp3",
    },
    {
        name: "Night",
        image: "/backgrounds/night.jpg",
        audio: "/audios/night.mp3",
    },
    {
        name: "Cozy Space",
        image: "/backgrounds/cozySpace.jpg",
        audio: "/audios/cozy.mp3",
    },
];

const BackgroundCards = () => {

    const [isOpen, setIsOpen] =
        useState(true);

    const dispatch = useDispatch();

    return (

        <div >

            {
                isOpen && (

                    <div className="
                            absolute

                            top-24 right-4
                            sm:right-6 md:right-10

                            w-[90vw]
                            sm:w-80

                            p-5

                            rounded-3xl

                            bg-black/20
                            backdrop-blur-2xl

                            border border-white/10
                        ">

                        <div
                            className="
                                flex justify-end
                                mb-4
                            "
                        >

                            <button
                                onClick={() =>
                                    setIsOpen(false)
                                }

                                className="
                                    w-9 h-9
                                    rounded-full

                                    bg-white/10
                                    text-white/60

                                    hover:bg-white/20
                                    hover:text-white

                                    transition
                                "
                            >
                                ✕
                            </button>

                        </div>

                        <div
                            className="
                                grid grid-cols-2 gap-4
                            "
                        >

                            {
                                backgrounds.map(
                                    (bg, key) => (

                                        <button
                                            key={key}

                                            onClick={() =>
                                                dispatch(
                                                    setBackground(bg)
                                                )
                                            }

                                            className="
                                                relative
                                                h-24

                                                rounded-2xl
                                                overflow-hidden
                                            "
                                        >

                                            <img
                                                src={bg.image}

                                                alt={bg.name}

                                                className="
                                                    w-full h-full
                                                    object-cover
                                                "
                                            />

                                            <div
                                                className="
                                                    absolute inset-0

                                                    bg-black/30

                                                    flex items-end
                                                    p-2
                                                "
                                            >

                                                <p
                                                    className="
                                                        text-white
                                                        text-sm
                                                    "
                                                >
                                                    {bg.name}
                                                </p>

                                            </div>

                                        </button>

                                    )
                                )
                            }

                        </div>

                    </div>

                )
            }

        </div>
    );
};

export default BackgroundCards;