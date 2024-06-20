//TASK2

import React, { useEffect, useState } from 'react'
import './ThemeSwitcher.models.scss'
const ThemeSwitcher: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    const handleLight = ()=>{
        setTheme('light')
    }

    const handleDark = ()=>{
        setTheme('dark')
    }

    useEffect(()=>{
        document.body.className = theme
    },[theme])
    return (
        <div className='theme'>
            <button onClick={handleLight}>light</button>
            <button onClick={handleDark}>dark</button>
        </div>
    )
}

export default ThemeSwitcher
