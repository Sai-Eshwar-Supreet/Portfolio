import "./index.scss";
import { Link } from "react-router-dom";
import AnimatedLetters from '../AnimatedLetters/index'
import {useEffect,useState} from "react";
import Loader from "react-loaders";

export default function Contact(){
    const [letterClass, setLetterClass] = useState("text-animate");
    const mailID = "saieshwarsupreet@gmail.com";
    useEffect(()=>{
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 2500);
    },[]);


    return(
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1 >
                        <AnimatedLetters letterClass={letterClass} strArray = {['G','e','t',' ','i','n',' ','t','o','u','c','h','!']} idx={0}/>
                    </h1>
                    <p>
                        I'm here and eager to connect. 
                        Whether you're looking to discuss projects, share ideas, or just chat about game development, 
                        I'm all ears! Your message means a lot, so feel free to reach out. 
                        Let's create something awesome together!
                    </p>
                    <Link to = {`mailto:${mailID}`} className="flat-button" >CLICK HERE!</Link>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}