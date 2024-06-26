import React,{ useRef} from 'react'
import Elfida from '../../assets/music/Elfida.mp3'

const Index:React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const audio = audioRef.current;

  function handleSpeed(speed: number) {
    if(audio) {
      audio.playbackRate = speed; //1-ci variant
      console.log(audioRef.current.playbackRate);
      
    }
  }

  function skip(type:string, speed: number) {
    if(audio&&type==="fwd") {
      console.log(audio.currentTime);
      audio.currentTime = audio.currentTime+speed;
    }
    else if(audio&&type==="back"){
      console.log(audio.currentTime);
      audio.currentTime = audio.currentTime-speed;
    }
  }
  return (
    <React.Fragment> 
        <h1>Welcome to Audio</h1>
        <audio ref={audioRef} src={Elfida} controls>
        </audio>

        <button onClick={()=>handleSpeed(1)}>1x</button>
        <button onClick={()=>handleSpeed(3)}>3x</button>
        <button onClick={()=>handleSpeed(4)}>4x</button>
        
        <button onClick={()=>skip("back", 10)}>10s Geri</button>
        <button onClick={()=>skip("back", 30)}>30s Geri</button>
        <button onClick={()=>skip("fwd", 10)}>10s İrəli</button>
        <button onClick={()=>skip("fwd", 30)}>30s İrəli</button>
    </React.Fragment>
  )
}

export default Index