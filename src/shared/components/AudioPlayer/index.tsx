// TASK 3

import React, { useRef } from 'react'
import './AudioPlayer.models.scss'
const AudioPlayer: React.FC = () => {

    const audioRef = useRef<HTMLAudioElement>(null)
    const inputRef  = useRef<HTMLInputElement>(null)
    function handleSpeed(val: number) {
        if (audioRef.current) {
            audioRef.current.playbackRate = val
        }
    }

    function handleBack(){
        if(audioRef.current){
            audioRef.current.currentTime -=10
        }
    }

    function handleForward(){
        if(audioRef.current){
            audioRef.current.currentTime +=10
        }
    }

    function handleSpeedInput (){
        if(audioRef.current && inputRef.current){
            const speed = parseInt(inputRef.current.value)
            if(!isNaN(speed)){
                audioRef.current.playbackRate = speed
            }
        }
    }

    return (
        <div className='audio'>
            <button onClick={handleBack}>10 saniye geri</button>
            <audio ref={audioRef} src='https://mp3.big.az/uplarx/enyeni_39594.mp3?st=0RiXXXAT2W6mR9MDMftang&e=1718877172&pEgeSdasi=1&vPxaKd5H8rVZpADFsUP=mp3-638961.mp3' controls></audio>
            <button onClick={handleForward}>10 saniye ireli</button>
            <button onClick={() => handleSpeed(3)}>3x</button>
            <button onClick={() => handleSpeed(4)}>4x</button>
            <input ref={inputRef} type="text" placeholder='Sureti teyin et' />
            <button onClick={handleSpeedInput}>ok</button>
        </div>
    )
}

export default AudioPlayer
