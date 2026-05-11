
type Mode =
    | "pomodoro"
    | "shortBreak"
    | "longBreak";

type ModeSwitcherProps = {
    mode: Mode;
    setMode: (mode: Mode) => void;
};

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
                                ? "bg-white text-black"
                                : "bg-white/10 text-red"}
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