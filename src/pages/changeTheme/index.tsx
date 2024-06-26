import React, {useState, useRef} from 'react'
import style from './changeTheme.module.scss'

const Index:React.FC = () => {
    const [open, setOpen] = useState<string>("light");

    const themeChange = useRef<HTMLDivElement>();
    const pageRender =useRef<HTMLHeadElement|number>(0);
    console.log(themeChange.current);
    pageRender.current +=1;

  return (
    <React.Fragment>
        <div ref={themeChange}>
            <h1 className={style.headPage}>Theme is {open}</h1>
            <h1>Page was render {pageRender.current} defe</h1>
            <button onClick={()=>setOpen("light")}>Light</button>
            <button onClick={()=>setOpen("dark")}>Dark</button>
        </div>
    </React.Fragment>
  )
}

export default Index