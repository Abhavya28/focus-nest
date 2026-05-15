type TimerRingProps = {
    progress: number;
};

const TimerRing = ({
    progress,
}: TimerRingProps) => {

    const radius = 160;

    const strokeWidth = 10;

    const normalizedRadius =
        radius - strokeWidth * 2;

    const circumference =
        normalizedRadius * 2 * Math.PI;

    const strokeDashoffset =
        circumference -
        (progress / 100) * circumference;

    return (
        <svg
            height={radius * 2}
            width={radius * 2}
            className="-rotate-90"
        >

            <circle
                stroke="rgba(255,255,255,0.1)"
                fill="transparent"
                strokeWidth={strokeWidth}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />

            <circle
                stroke="white"
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                className="transition-all duration-1000"
            />

        </svg>
    );
};

export default TimerRing;