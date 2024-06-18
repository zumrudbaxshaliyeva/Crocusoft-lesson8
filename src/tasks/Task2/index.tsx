import React, { useEffect, useState } from 'react'
import './index.scss'

const Index: React.FC = () => {

    const [theme, setTheme] = useState<boolean>(false)

    useEffect(() => {
        if (theme) {
            document.body.style.backgroundColor = 'black'
            document.body.style.color = 'white'
        }
        else {
            document.body.style.backgroundColor = 'white'
            document.body.style.color = 'white'
        }
    }, [theme])

    function handleLightTheme() {
        setTheme(theme => theme = false)
    }

    function handleDarkTheme() {
        setTheme(theme => theme = true)
    }
    return (
        <>
            <div className="container">
                <button onClick={handleLightTheme}>Light Theme</button>
                <button onClick={handleDarkTheme}>Dark Theme</button>
            </div>
        </>
    )
}

export default Index
