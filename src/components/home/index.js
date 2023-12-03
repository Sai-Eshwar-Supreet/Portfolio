import { Link } from "react-router-dom";
import './index.scss';
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";

export default function Home(){
    const [letterClass, setLetterClass] = useState("text-animate");
    const nameLetters = ['S','a','i',' ','E','s','h','w','a','r',' ','S','u','p','r','e','e','t'];
    const designationLetters = ['G','a','m','e',' ','d','e','v','e','l','o','p','e','r'];
    useEffect(()=>{
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 5000);
    },[]);
    return(
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _1`}>i,</span>
                        <br/> 
                        <span className={`${letterClass} _2`}>I</span>
                        <span className={`${letterClass} _3`}>'m</span>
                        <span className="dev-name"><AnimatedLetters letterClass={letterClass} strArray={nameLetters} idx={4}/></span>
                        <br/>
                        <AnimatedLetters letterClass={letterClass} strArray={designationLetters} idx={22}/>
                    </h1>
                    <h2>"Subtly weaving dreams into playable realities"</h2>
                    <Link to='/contact' className="flat-button" >CONTACT ME!</Link>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}