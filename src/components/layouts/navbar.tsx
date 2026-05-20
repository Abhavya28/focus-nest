"use client";

import { useState } from "react";
import BackgroundCards from "../backgroundCards";
import Link from "next/link";
import Todo from "../todo";

const Navbar = () => {

    const [showAmbience, setShowAmbience] =
        useState(false);

    const [showTodo, setShowTodo] =
        useState(false);

    const [showMenu, setShowMenu] =
        useState(false);

    return (

        <nav
            className="
                fixed top-0 left-0 w-full z-50

                border-b border-white/10

                bg-black/60
                backdrop-blur-xl
            "
        >

            <div
                className="
                    max-w-7xl mx-auto

                    px-4 sm:px-6 md:px-10
                    py-4 md:py-5

                    flex items-center justify-between
                "
            >

                <div className="flex items-center gap-3">

                    <div>

                        <h1
                            className="
                                text-xl sm:text-2xl
                                font-bold
                                tracking-wide
                                text-white
                            "
                        >
                            Focus Nest
                        </h1>

                        <p
                            className="
                                text-[10px] sm:text-[11px]

                                text-white/50

                                tracking-[2px]
                                uppercase
                            "
                        >
                            Deep Work Space
                        </p>

                    </div>

                </div>

                {/* Desktop Nav */}

                <div
                    className="
                        hidden md:flex
                        items-center gap-10
                    "
                >

                    <button
                        className="
                            text-white/70
                            hover:text-white
                            transition duration-300
                        "
                    >
                        <Link href="/">
                            Focus
                        </Link>
                    </button>

                    <button
                        onClick={() =>
                            setShowAmbience(
                                !showAmbience
                            )
                        }

                        className="
                            text-white/70
                            hover:text-white
                            transition duration-300
                        "
                    >
                        Ambience
                    </button>

                    <button
                        onClick={() =>
                            setShowTodo(!showTodo)
                        }

                        className="
                            text-white/70
                            hover:text-white
                            transition duration-300
                        "
                    >
                        Todo
                    </button>

                </div>

                {/* Mobile Menu Button */}

                <button
                    onClick={() =>
                        setShowMenu(!showMenu)
                    }

                    className="
                        md:hidden

                        text-white

                        text-2xl
                    "
                >
                    ☰
                </button>

            </div>

            {/* Mobile Menu */}

            {
                showMenu && (

                    <div
                        className="
                            md:hidden

                            px-6 pb-6

                            flex flex-col gap-5

                            bg-black/80
                            backdrop-blur-xl
                        "
                    >

                        <Link
                            href="/"

                            className="
                                text-white/70
                            "
                        >
                            Focus
                        </Link>

                        <button
                            onClick={() =>
                                setShowAmbience(
                                    !showAmbience
                                )
                            }

                            className="
                                text-left
                                text-white/70
                            "
                        >
                            Ambience
                        </button>

                        <button
                            onClick={() =>
                                setShowTodo(
                                    !showTodo
                                )
                            }

                            className="
                                text-left
                                text-white/70
                            "
                        >
                            Todo
                        </button>

                    </div>

                )
            }

            {/* Ambience Popup */}

            {
                showAmbience && (

                    <div
                        
                    >

                        <BackgroundCards />

                    </div>

                )
            }

            {/* Todo */}

            {
                showTodo && <Todo />
            }

        </nav>
    );
};

export default Navbar;