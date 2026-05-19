"use client";

import { Tasks } from "@/src/types";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import {
    motion,
    AnimatePresence,
} from "framer-motion";

const Todo = () => {

    const [tasks, setTasks] =
        useState<Tasks[]>([]);

    const [newTask, setNewTask] =
        useState("");

    const [isOpen, setIsOpen] =
        useState(true);

    const addTask = () => {

        if (!newTask.trim()) return;

        setTasks((prevTasks) => [
            ...prevTasks,
            {
                id: uuidv4(),
                task: newTask,
                completed: false,
            },
        ]);

        setNewTask("");
    };

    const markAsDone = (id: string) => {

        setTasks((prevTasks) =>

            prevTasks.map((task) => {

                if (task.id === id) {

                    return {
                        ...task,
                        completed: true,
                    };
                }

                return task;
            })

        );
    };

    const delTask = (id: string) => {

        setTasks((prevTasks) =>
            prevTasks.filter(
                (task) => task.id !== id
            )
        );
    };

    return (

        <AnimatePresence>

            {
                isOpen && (

                    <motion.div
                        drag

                        dragMomentum={false}

                        initial={{
                            opacity: 0,
                            scale: 0.9,
                            y: 40,
                        }}

                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}

                        exit={{
                            opacity: 0,
                            scale: 0.9,
                            y: 40,
                        }}

                        transition={{
                            duration: 0.25,
                        }}

                        className="
                            fixed top-28 right-10 z-50 w-[380px] max-h-[80vh] rounded-[32px] bg-black/30
                            backdrop-blur-2xl
                            border border-white/10
                            shadow-[0_0_60px_rgba(0,0,0,0.4)]
                            overflow-hidden"
                    >
                        <div
                            className="
                                flex items-center
                                justify-between
                                px-6 py-5
                                border-b border-white/10
                                cursor-grab"
                        >
                            <div>
                                <h1
                                    className="
                                        text-2xl
                                        font-bold
                                        text-white
                                    "
                                >
                                    Tasks
                                </h1>

                                <p
                                    className="
                                        text-xs
                                        text-white/40
                                        mt-1
                                        tracking-wide
                                    "
                                >
                                    Stay focused
                                </p>

                            </div>

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
                        <div className="p-6">

                            <div
                                className="
                                    flex items-center
                                    gap-3
                                "
                            >
                                <input
                                    type="text"
                                    value={newTask}
                                    placeholder="Add a task..."
                                    onChange={(e) =>
                                        setNewTask(
                                            e.target.value
                                        )
                                    }

                                    onKeyDown={(e) => {
                                        if (
                                            e.key === "Enter"
                                        ) {
                                            addTask();
                                        }
                                    }}

                                    className="
                                        flex-1

                                        px-4 py-3

                                        rounded-2xl

                                        bg-white/10
                                        border border-white/10

                                        outline-none

                                        text-white
                                        placeholder:text-white/30

                                        focus:border-purple-400

                                        transition
                                    "
                                />
                                <button
                                    onClick={addTask}
                                    className="
                                        px-5 py-3

                                        rounded-2xl

                                        bg-gradient-to-r
                                        from-purple-500
                                        to-pink-500

                                        text-white
                                        font-medium

                                        hover:scale-105

                                        transition
                                    "
                                >
                                    Add
                                </button>

                            </div>

                        </div>

                        <div
                            className="
                                px-6 pb-6

                                flex flex-col gap-3

                                overflow-y-auto
                                max-h-[420px]
                            "
                        >

                            {
                                tasks.length === 0 && (

                                    <div
                                        className="
                                            py-16
                                            text-center
                                            text-white/30
                                        "
                                    >
                                        No tasks added yet
                                    </div>

                                )
                            }

                            {
                                tasks.map((task) => (

                                    <motion.div

                                        layout

                                        key={task.id}

                                        initial={{
                                            opacity: 0,
                                            y: 10,
                                        }}

                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}

                                        className="
                                            flex items-center
                                            justify-between

                                            p-4

                                            rounded-2xl

                                            bg-white/10
                                            border border-white/10
                                        "
                                    >

                                        <span
                                            className={`
                                                text-sm
                                                transition

                                                ${task.completed
                                                    ? "line-through text-white/30"
                                                    : "text-white"
                                                }
                                            `}
                                        >
                                            {task.task}
                                        </span>

                                        <div
                                            className="
                                                flex items-center
                                                gap-2
                                            "
                                        >

                                            {
                                                !task.completed && (

                                                    <button
                                                        onClick={() =>
                                                            markAsDone(
                                                                task.id
                                                            )
                                                        }
                                                        className="
                                                            px-3 py-2

                                                            rounded-xl

                                                            bg-green-500/20
                                                            text-green-300

                                                            text-xs
                                                            font-medium

                                                            hover:bg-green-500/30

                                                            transition
                                                        "
                                                    >
                                                        Done
                                                    </button>

                                                )
                                            }

                                            <button
                                                onClick={() =>
                                                    delTask(task.id)
                                                }
                                                className="
                                                    px-3 py-2

                                                    rounded-xl

                                                    bg-red-500/20
                                                    text-red-300

                                                    text-xs
                                                    font-medium

                                                    hover:bg-red-500/30

                                                    transition
                                                "
                                            >
                                                Delete
                                            </button>

                                        </div>

                                    </motion.div>

                                ))
                            }

                        </div>

                    </motion.div>

                )
            }

        </AnimatePresence>
    );
};

export default Todo;