"use client";

import { useEffect, useState } from "react";
import Timer from "./timer";
import Controls from "./controls";
import ModeSwitcher from "./modeSwitcher";

type Mode =
    | "pomodoro"
    | "shortBreak"
    | "longBreak";

const TIMER_MODES = {
    pomodoro: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
};

const PomodoroTimer = () => {

    const [mode, setMode] = useState<Mode>("pomodoro");

    const [time, setTime] = useState(
        TIMER_MODES.pomodoro
    );

    const [isRunning, setIsRunning] =
        useState(false);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handlePause = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(TIMER_MODES[mode]);
    };

    const handleModeChange = (newMode: Mode) => {
        setMode(newMode);
        setTime(TIMER_MODES[newMode]);
        setIsRunning(false);
    };

    useEffect(() => {

        let interval: NodeJS.Timeout;

        if (isRunning && time > 0) {
            interval = setInterval(() => {
                setTime((prev) => prev - 1);
            }, 1000);

        }
        return () => clearInterval(interval);

    }, [isRunning, time]);

    return (
        <div className="w-full max-w-xl p-10 rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col items-center">
            <ModeSwitcher
                mode={mode}
                setMode={handleModeChange}
            />

            <Timer
                time={time}
            />

            <Controls
                isRunning={isRunning}
                onStart={handleStart}
                onPause={handlePause}
                onReset={handleReset}
            />
        </div>
    );
};

export default PomodoroTimer;