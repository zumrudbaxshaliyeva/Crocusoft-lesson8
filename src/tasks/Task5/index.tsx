import React, { useEffect, useRef, useState } from 'react'
import './index.scss'

const Index: React.FC = () => {

    const timerRef = useRef<HTMLParagraphElement>(null)
    const [time, setTime] = useState<number>(0)
    const [isRunning, setIsRunning] = useState<boolean>(false)

    useEffect(() => {
        let timer: NodeJS.Timeout;
        let time = Number(timerRef.current?.innerText)
        if (isRunning) {
            timer = setInterval(() => {
                setTime(++time)
            }, 1000)
        }

        return () => {
            clearInterval(timer)
        }
    }, [isRunning])

    function startTimer() {
        setIsRunning(true)
    }

    function pauseTimer() {
        setIsRunning(false)
    }

    function resetTimer() {
        setIsRunning(false)
        setTime(0)
    }


    return (
        <>
            <div className="timer">
                <p ref={timerRef}>{time}</p>
                <div className="btns">
                    <button onClick={startTimer}>Start</button>
                    <button onClick={resetTimer}>Reset</button>
                    <button onClick={pauseTimer}>Pause</button>
                </div>
            </div>
        </>
    )
}

export default Index
