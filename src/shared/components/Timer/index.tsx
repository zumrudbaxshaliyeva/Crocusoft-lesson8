import React, { useRef, useState } from 'react'
import './Timer.models.scss'
const Timer : React.FC = () => {
    const [time, setTime] = useState<number>(0)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)


    function startTime() {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setTime(time => time + 1)
            }, 1000)
        }
    }

    function stopTime(){
        if(intervalRef.current){
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }
    }

    return (
        <div className='timer'>
            <button onClick={startTime}>start</button>
            <p>{time}</p>
            <button onClick={stopTime}>stop</button>
        </div>
    )
}

export default Timer
