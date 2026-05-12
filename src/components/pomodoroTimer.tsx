"use client";

import { useEffect, useState } from "react";
import Timer from "./timer";
import Controls from "./controls";
import ModeSwitcher from "./modeSwitcher";
import { Mode } from "../types";

const TIMER_MODES = {
    pomodoro: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
};

const PomodoroTimer = () => {

    const [mode, setMode] = useState<Mode>("pomodoro");
    const [time, setTime] = useState(TIMER_MODES.pomodoro);
    const [isRunning, setIsRunning] = useState(false);
    const [completed, setCompleted] = useState(false);

    const handleStart = () => {
        setCompleted(false);
        setIsRunning(true);
    };

    const handlePause = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setCompleted(false);
        setIsRunning(false);
        setTime(TIMER_MODES[mode]);
    };

    const handleModeChange = (newMode: Mode) => {
        setCompleted(false);
        setMode(newMode);
        setTime(TIMER_MODES[newMode]);
        setIsRunning(false);
    };

    useEffect(() => {
        if (time === 0 && isRunning) {
            setIsRunning(false);
            setCompleted(true);
        }

        let interval: NodeJS.Timeout;
        if (isRunning && time > 0) {
            interval = setInterval(() => {
                setTime((prev) => prev - 1);
            }, 1000);

        }
        return () => clearInterval(interval);

    }, [isRunning, time]);

    return (
        <div className="relative w-full max-w-2xl overflow-hidden rounded-[40px] border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_0_80px_rgba(255,255,255,0.08)] px-10 py-12 flex flex-col items-center">

            <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-500/20 blur-3xl rounded-full" />

            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-pink-500/20 blur-3xl rounded-full" />

            <div className="relative z-10 w-full flex flex-col items-center">
                <ModeSwitcher
                    mode={mode}
                    setMode={handleModeChange}
                />

                <div className="my-12">
                    <Timer time={time} />
                </div>

                <Controls
                    isRunning={isRunning}
                    onStart={handleStart}
                    onPause={handlePause}
                    onReset={handleReset}
                />

                {
                    completed && (
                        <div className="mt-8 px-6 py-3 rounded-2xl bg-white/10 border border-white/10">

                            <p className="text-white text-sm tracking-wide">
                                {
                                    mode === "pomodoro"
                                        ? "Focus Session Completed"
                                        : "Break Completed"
                                }
                            </p>

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PomodoroTimer;