import { ControlsProps } from "../types";

const Controls = ({
    isRunning,
    onStart,
    onPause,
    onReset,
}: ControlsProps) => {

    return (
        <div className="flex items-center gap-4 mt-8">
            {
                isRunning ? (
                    <button
                        onClick={onPause}
                        className="px-6 py-3 rounded-xl bg-yellow-500 text-black font-medium"
                    >
                        Pause
                    </button>
                ) : (
                    <button
                        onClick={onStart}
                        className="px-6 py-3 rounded-xl bg-green-500 text-black font-medium"
                    >
                        Start
                    </button>
                )
            }

            <button
                onClick={onReset}
                className="px-6 py-3 rounded-xl bg-red-500 text-white font-medium"
            >
                Reset
            </button>
        </div>
    );
};

export default Controls;