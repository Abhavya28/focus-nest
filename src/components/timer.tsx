
type TimerProps = {
    time: number;
};

const Timer = ({ time }: TimerProps) => {

    const minutes = Math.floor(time / 60);

    const seconds = time % 60;

    return (
        <h1 className="text-7xl font-bold text-black tracking-wider">
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
        </h1>
    );
};

export default Timer;