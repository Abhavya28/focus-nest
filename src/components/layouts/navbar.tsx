"use client";

import { useState } from "react";
import BackgroundCards from "../backgroundCards";
import Link from "next/link";
import Todo from "../todo/todo";


const Navbar = () => {
    const [showAmbience, setShowAmbience] = useState(false);
    const [showTodo, setShowTodo] = useState(false);
    return (
        <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">

            <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">

                <div className="flex items-center gap-3">
                    <div>
                        <h1 className="text-2xl font-bold tracking-wide text-white">
                            Focus Nest
                        </h1>

                        <p className="text-[11px] text-white/50 tracking-[2px] uppercase">
                            Deep Work Space
                        </p>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-10">

                    <button className="text-white/70 hover:text-white transition duration-300">
                        <Link href="/">Focus</Link>
                    </button>

                    <button onClick={() => setShowAmbience(!showAmbience)} className="text-white/70 hover:text-white transition duration-300">
                        Ambience
                    </button>

                    <button onClick={() => setShowTodo(!showTodo)} className="text-white/70 hover:text-white transition duration-300">
                        ToDo
                    </button>
                </div>

                <button className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-lg shadow-purple-500/20 hover:scale-105 transition duration-300">

                    Start Session

                </button>
            </div>
            {
                showAmbience && (
                    <div
                        className="
            absolute top-20 right-10
            w-80 p-5
            rounded-3xl
            bg-black/40
            backdrop-blur-2xl
            border border-white/10
         "
                    >

                        <BackgroundCards />

                    </div>
                )
            }

            {
                showTodo && (
                    <div
                        className="absolute -bottom-80 right-10 w-80 p-5 rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/10"
                    >
                        <Todo />
                    </div>
                )
            }
        </nav>
    );
};

export default Navbar;