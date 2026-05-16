"use client";

import { useSelector } from "react-redux";
import PomodoroTimer from "../components/pomodoroTimer";


export default function Home() {

    const selectedBg = useSelector(
        (state: any) =>
            state.background.selectedBg
    );

    return (
        <main
            className="
                min-h-screen
                bg-cover
                bg-center
                transition-all
                duration-500
                flex items-center justify-center
                px-4
            "
            style={{
                backgroundImage:
                    `url(${selectedBg})`,
            }}
        >

            <PomodoroTimer />

        </main>
    );
}