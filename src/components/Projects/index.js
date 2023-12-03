import './index.scss';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import ThumbnailQOD from '../../assets/Projects/Quirky-of-diceville/thumbnail-qod.png';
import ThumbnailAS from '../../assets/Projects/Aruval-slasher/thumbnail-as.png';
import ThumbnailRRR from '../../assets/Projects/Robo-run-roo/thumbnail-rrr.png';


export default function Projects(){
    return(
        <>
            <div className="projects-browser">
                <section className="project">
                    <div>
                        <Link to ='/Portfolio/projects/quirky-of-diceville' ><img src={ThumbnailQOD} alt='Quirky-of-Diceville thumbnail'/></Link>
                    </div>
                    <h1>Solo Development Project</h1>
                </section>
                <section className="project">
                    <div>
                        <Link to ='/Portfolio/projects/robo-run-roo' ><img src={ThumbnailRRR} alt='Robo-Run-Roo thumbnail'/></Link>
                    </div>
                    <h1>Assignment Project</h1>
                </section>
                <section className="project">
                    <div>
                        <Link to ='/Portfolio/projects/aruval-slasher' ><img src={ThumbnailAS} alt='Aruval-Slasher thumbnail'/></Link>
                    </div>
                    <h1>Solo Development Project (Prototype)</h1>
                </section>
            </div>
            <Loader type="pacman"/>
        </>
    )
}