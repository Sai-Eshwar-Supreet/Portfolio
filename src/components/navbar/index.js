import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faFileText, faGamepad, faHome, faUser} from "@fortawesome/free-solid-svg-icons"
import {faItchIo, faLinkedin} from "@fortawesome/free-brands-svg-icons"
export default function NavBar(){
    return(
        <>
            <div className='nav-bar'>
                <Link className='logo' to="/">Sai Eshwar Supreet</Link>
                <nav>
                    <NavLink exact="true" activeclassname="active"  className="home-link" to="/" >
                        <FontAwesomeIcon icon={faHome} />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="about-link" to="/about" >
                        <FontAwesomeIcon icon={faUser} />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects" >
                        <FontAwesomeIcon icon={faGamepad} />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="resume-link" to="/" >
                        <FontAwesomeIcon icon={faFileText} />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" >
                        <FontAwesomeIcon icon={faEnvelope} />
                    </NavLink>
                </nav>
                <ul>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/saieshwarsupreet/">
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                    </li>

                    <li>
                        <a target="_blank" rel="noreferrer" href="https://saieshwarsupreet.itch.io/">
                            <FontAwesomeIcon icon={faItchIo}/>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
