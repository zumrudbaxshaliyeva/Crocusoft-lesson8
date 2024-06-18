import React, { useRef, useState } from 'react'
import './index.scss'

const Index: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [speed, setSpeed] = useState<number>(1)

    function handleNext() {
        if (audioRef.current && audioRef.current.currentTime < (audioRef.current.duration - 10)) {
            audioRef.current.currentTime += 10;
        }
        else if (audioRef.current && audioRef.current.currentTime > (audioRef.current.duration - 10)) {
            audioRef.current.currentTime = audioRef.current.duration;
        }
    }
    function handlePrevious() {
        if (audioRef.current && audioRef.current.currentTime >= 10) {
            audioRef.current.currentTime -= 10;
        }
        else if (audioRef.current && audioRef.current.currentTime < 10) {
            audioRef.current.currentTime = 0
        }
    }

    function handle3xSpeed() {
        if (audioRef.current) {
            audioRef.current.playbackRate = 3
        }
    }


    function handleSpeed(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        const speed = parseFloat(e.target.value)
        setSpeed(speed)
        if (audioRef.current) {
            audioRef.current.playbackRate = speed
        }
    }

    function handleDefaultSpeed() {
        if (audioRef.current) {
            audioRef.current.playbackRate = 1
        }
    }

    return (
        <>
            <div className='audioDiv'>
                <audio src="https://mp3.big.az/uplarx/Rubail_Azimov_-_Yalan_Dunya.mp3?st=4-B1qUIU0ks7MxJCUKOrTQ&e=1718722738&pEgeSdasi=1&vPxaKd5H8rVZpADFsUP=mp3-868969.mp3"
                    ref={audioRef} controls />
                <div className="changeButtons">
                    <button onClick={handlePrevious}>10 second previous</button>
                    <button onClick={handleNext}>10 second next</button>
                </div>
                <div className="speedControl">
                    <button onClick={handleDefaultSpeed}>Default speed</button>
                    <button onClick={handle3xSpeed}>3x Speed</button>
                </div>
                <form>
                    <label htmlFor="speed">Playback speed: </label>
                    <input
                        type="number"
                        id='speed'
                        value={speed}
                        onChange={handleSpeed}
                    />
                </form>
            </div>
        </>
    )
}

export default Index
