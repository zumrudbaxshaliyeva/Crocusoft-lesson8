import { useRef, useState } from 'react';

const Timer = () => {
    const [timer, setTimer] = useState<number>(0);
    const intervalRef = useRef<number | null>(null);

    const stopTimer = () => {
        if (intervalRef.current) window.clearInterval(intervalRef.current);
    };

    const startTimer = () => {
       intervalRef.current = window.setInterval(() => setTimer(timer => timer + 1), 1000);
    };

    return (
        <div>
            <p>{timer}</p>
            <button onClick={startTimer}>Start Timer</button>
            <button onClick={stopTimer}>Stop Timer</button>
        </div>
    );
};

export default Timer;