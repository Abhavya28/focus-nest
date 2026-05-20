import { Mode, ModeSwitcherProps } from "../types";

const ModeSwitcher = ({
    mode,
    setMode,
}: ModeSwitcherProps) => {

    const modes: Mode[] = [
        "pomodoro",
        "shortBreak",
        "longBreak",
    ];

    return (
        <div className="flex items-center gap-4 mb-10">
            {
                modes.map((item) => (
                    <button
                        key={item}
                        onClick={() => setMode(item)}
                        className={`
                            px-5 py-2 rounded-xl capitalize transition
                            ${mode === item
                                ? "bg-black text-white"
                                : "text-black"}
                        `}
                    >
                        {item}
                    </button>
                ))
            }
        </div>
    );
};

export default ModeSwitcher;