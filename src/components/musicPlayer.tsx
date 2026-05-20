"use client";

import {
    useEffect,
    useRef,
    useState,
} from "react";

import { useSelector } from "react-redux";

const MusicPlayer = () => {

    const audioRef =
        useRef<HTMLAudioElement | null>(null);

    const [isPlaying, setIsPlaying] =
        useState(false);

    const currentBackground =
        useSelector(
            (state: any) =>
                state.background.currentBackground
        );

    useEffect(() => {

        if (
            !audioRef.current ||
            !currentBackground
        ) return;

        audioRef.current.src =
            currentBackground.audio;

        if (isPlaying) {
            audioRef.current.play();
        }

    }, [currentBackground]);

    const toggleMusic = async () => {

        if (!audioRef.current) return;

        if (isPlaying) {

            audioRef.current.pause();

        } else {

            await audioRef.current.play();

        }

        setIsPlaying(!isPlaying);
    };

    return (

        <div
            className="
                fixed bottom-6 left-6 z-50
            "
        >

            <audio
                ref={audioRef}
                loop
            />

            <button
                onClick={toggleMusic}

                className="
                    px-5 py-3
                    rounded-2xl

                    bg-black/30
                    backdrop-blur-xl

                    border border-white/10

                    text-white
                "
            >
                {
                    isPlaying
                        ? "Pause Sound"
                        : `Play ${currentBackground.name} Ambience`
                }
            </button>

        </div>
    );
};

export default MusicPlayer;