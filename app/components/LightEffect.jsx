"use client"

import { useState, useEffect } from "react"

const Header = () => {

    const colorList = [
        "#ff79c6",
    ]
    
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [color, setColor] = useState(Math.floor(Math.random() * colorList.length))
    const [zoom, setZoom] = useState(10)

    useEffect(() => {

        const interval = setInterval(() => {
            const randomX = Math.floor(Math.random() * 10000)
            const randomY = Math.floor(Math.random() * 10000)

            setZoom(Math.floor(Math.random() * 70))

            setColor( colorList[Math.floor(Math.random() * colorList.length)])
            setPosition({ x: randomX, y: randomY })
        }, 3000)

        return () => clearInterval(interval)

    }, [])

    return (

        <div style={{boxShadow: `0px 0px ${zoom}px ${zoom *0.7}px ${color}`, top: `${position.y}%`, left: `${position.x}%` }} className="absolute h-0 w-0 bg-primary rounded-full ease-linear lg:block hidden duration-[3000ms]" />
    )
}

export default Header