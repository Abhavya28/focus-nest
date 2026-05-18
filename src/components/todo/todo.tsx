import { Tasks } from "@/src/types";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"

const Todo = () => {
    const [tasks, setTasks] = useState<Tasks[]>([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (!newTask.trim()) return;

        setTasks((prevTasks) => [
            ...prevTasks,
            {
                id: uuidv4(),
                task: newTask,
                completed: false,
            }
        ]);
        setNewTask("");
    }

    const markAsDone = (id: string) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => {
                if (task.id === id) {
                    return {
                        ...task,
                        completed: true
                    };
                } else {
                    return task;
                }
            })
        );
    }

    return (
        <div>
            <h1>Todo List</h1>

            <div>
                {tasks.map((task) => (
                    <div key={task.id}>
                        <span className={task.completed ? "line-through" : ""}>{task.task}</span>
                        <button onClick={() => markAsDone(task.id)}>Mark as Done</button>

                    </div>
                ))}
            </div>

            <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            <button onClick={addTask}>+ Add Task</button>

        </div>
    )
}

export default Todo