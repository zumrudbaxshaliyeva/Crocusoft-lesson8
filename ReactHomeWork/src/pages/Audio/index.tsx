import React, { useRef } from 'react'
import styles from  '@/pages/Audio/index.module.scss'
import mp3 from '@/assets/media/media.mp3'

type TSkip = "forward" | "back"

const Audio:React.FC = () => {
  const audioref = useRef<HTMLAudioElement>(null)
  const inputRef= useRef<HTMLInputElement>(null);

  function handleSkip(type: TSkip){
    if(type==="forward" && audioref.current){
      audioref.current.currentTime += 10;
    }else if(type==="back" && audioref.current){
      audioref.current.currentTime -= 10;
    }
  }

  function handleSpeed(speed: number):void{
    if(audioref.current && speed >=0) {
      audioref.current.playbackRate = speed
    }
  }
  

  return (
    <div className={styles.wrapper}>
      <audio ref={audioref} controls><source  src={mp3}/>
      </audio>
      <div className={styles['button-wrapper']}>
        <div className={styles.button} onClick={() => handleSkip("forward")}>10s forward</div>
        <div className={styles.button} onClick={() => handleSkip("back")}>10s back</div>
        <div className={styles.button} onClick={() => handleSpeed(3)}>3x speed</div>
        <div className={styles.button} onClick={() => handleSpeed(4)}>4x speed</div>        
      </div>
      <div className={styles['input-wrapper']}>
          <input type="number" name="speed" ref={inputRef}/><button onClick={() => handleSpeed(parseFloat(inputRef.current?.value!))}>SPEED</button>
        </div>
    </div>
    
  )
}

export default Audio