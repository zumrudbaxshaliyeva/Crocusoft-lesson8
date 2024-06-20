import React, { useState } from 'react'
import styles from '@/pages/ThemeSwitcher/index.module.scss'
import {moon, sun} from '@/assets/icons';


const ThemeSwitcher:React.FC = () => {
    const [theme, setTheme] = useState<string>("light");

    function handleSwitchTheme(theme: string):void{
      setTheme(theme);
    }
  return (
    <div className={`${styles.wrapper} ${theme === "light" ? styles['wrapper-light'] : styles['wrapper-dark']}`}>
        <span onClick={() => handleSwitchTheme("light")}><img src={sun} alt="sun"/></span>
        <span onClick={() => handleSwitchTheme("dark")}><img src={moon} alt="moon"/></span>
    </div>
  )
}

export default ThemeSwitcher;