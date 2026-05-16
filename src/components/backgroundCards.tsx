"use client"

import { useDispatch } from "react-redux";
import { setBackground } from "../redux/features/backgroundSlice";

const backgrounds = [
    {
        name: "Rain",
        image: "/backgrounds/rain.jpg",
    },
    {
        name: "Forest",
        image: "/backgrounds/forest.jpg",
    },
    {
        name: "Night",
        image: "/backgrounds/night.jpg",
    },
    {
        name: "Rain",
        image: "/backgrounds/rain.jpg",
    },
];

const BackgroundCards = () => {

    const dispatch = useDispatch();

    return (
        <div className="grid grid-cols-2 gap-4">

            {
                backgrounds.map((bg, key) => (

                    <button
                        key={key}
                        onClick={() =>
                            dispatch(setBackground(bg.image))
                        }
                        className="
                            relative h-24 rounded-2xl
                            overflow-hidden
                        "
                    >

                        <img
                            src={bg.image}
                            alt={bg.name}
                            className="
                                w-full h-full object-cover
                            "
                        />

                        <div
                            className="
                                absolute inset-0
                                bg-black/30
                                flex items-end p-2
                            "
                        >
                            <p className="text-white text-sm">
                                {bg.name}
                            </p>
                        </div>

                    </button>

                ))
            }

        </div>
    );
};

export default BackgroundCards;