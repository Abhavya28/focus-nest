export type ControlsProps = {
    isRunning: boolean;
    hasPaused: boolean;
    onStart: () => void;
    onPause: () => void;
    onReset: () => void;
};


export type Mode =
    | "pomodoro"
    | "shortBreak"
    | "longBreak";

export type ModeSwitcherProps = {
    mode: Mode;
    setMode: (mode: Mode) => void;
};

export type TimerProps = {
    time: number;
};