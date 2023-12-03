import "./index.scss";
import AnimatedLetters from '../AnimatedLetters/index'
import {useEffect,useState} from "react";
import Loader from "react-loaders";

export default function About(){
    const [letterClass, setLetterClass] = useState("text-animate");
    useEffect(()=>{
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 2000);
    },[]);


    return(
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1 >
                        <AnimatedLetters letterClass={letterClass} strArray = {['A','b','o','u','t',' ','m','e','!']} idx={0}/>
                    </h1>
                    <p>
                        I’m Sai Eshwar Supreet, a self-taught developer who can both program and design games. 
                        I’m passionate about creating immersive gaming experiences. 
                        My game development journey started in college when I learned C language in my first semester of engineering. 
                        Since then, I’ve been on a continuous journey to turn my game development dreams into reality.
                    </p>
                    <p>
                        I focus mostly on building, designing and programming levels. 
                        I also design and model my own assets using Blender and Photoshop/Photopea. 
                        I’m dedicated to learning new things and embracing challenges. 
                        Explore some of my projects here.
                    </p>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}