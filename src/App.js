import './App.css';
import {useCallback, useEffect, useState} from "react";

function App() {

    const imageCount = 215

    const [currentImage, setCurrentImage] = useState('')
    const [y, setY] = useState(window.scrollY)

    const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget
            setY(window.scrollY)
        }, [y]
    )

    useEffect(() => {
        setCurrentImage('https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/spatial-audio/large/0000.jpg')
    }, [])

    useEffect(() => {
        setY(window.scrollY)
        window.addEventListener("scroll", handleNavigation)
        const maxScrollTop = document.body.scrollHeight - window.innerHeight
        const scrollFraction = y / maxScrollTop
        const imageIndex = Math.min(imageCount - 1, Math.floor(scrollFraction * imageCount))
        updateImage(imageIndex + 1)

        return () => {
            window.removeEventListener("scroll", handleNavigation)
        }
    }, [handleNavigation])


    const updateImage = index => {
        setCurrentImage(`https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/spatial-audio/large/${index.toString().padStart(4, '0')}.jpg`)
    }

    return (
        <div className="airpodsScrolling">
            <img className="airpodsScrolling_Canvas" src={currentImage} alt="airpods"/>
        </div>
    );
}

export default App;
