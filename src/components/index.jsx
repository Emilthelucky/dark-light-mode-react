import { useEffect, useState } from 'react'
import './styles.css'


export default function LightDarkMode(){


    const currentTheme = localStorage.getItem("theme") || "white"
    const [theme, setTheme] = useState(currentTheme)


    function changeTheme(){
        if(theme === "white"){
            localStorage.setItem("theme", "dark")
            setTheme("dark")
        }else if(theme === "dark"){
            localStorage.setItem("theme", "white")
            setTheme("white")
        }
    }


    useEffect(() => {
        console.log("Theme Changed")
    }, [theme])
    
    return <div className={theme === "dark" ? 'dark-theme' : 'main'}>
        <div className="container">
            <p className="title">HI THERE !!!</p>
            <button className={theme === "dark" ? 'btn-dark' : 'btn'} onClick={() => {
                changeTheme()
            }}>Change Theme</button>
        </div>
    </div>

}