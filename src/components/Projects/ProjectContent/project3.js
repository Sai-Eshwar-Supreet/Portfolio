import  './index.scss';
import thumbnail from '../../../assets/Projects/Robo-run-roo/thumbnail-rrr.png';
import GifElement from '../../Elements/gifElement';
import img1 from '../../../assets/Projects/Robo-run-roo/img1.gif';
import img2 from '../../../assets/Projects/Robo-run-roo/img2.gif';
import img3 from '../../../assets/Projects/Robo-run-roo/img3.gif';
import img4 from '../../../assets/Projects/Robo-run-roo/img4.gif';
export default function Project3(){
    return(
        <>
            <div className='project-window'>
                <div className='project-details'>
                    <h1 className='heading'>Robo Run Roo</h1>
                    <h2 className='subheading'>Game Developer & Designer (Interview Assignment)</h2>
                    <div className='image-container'><img className='thumbnail' src={thumbnail} alt='thumbnail' /></div>
                </div>
                <div className='project-details'>
                    <h1 className='heading'>What I did!</h1>
                    <ul className='content'>
                        <li><strong>Game Concept and Design:</strong> Came up with the game concept centered around a robot navigating obstacles by attaching to the ceiling or floor, while collecting batteries for scoring..</li>
                        <li><strong>Development:</strong> Used Unity as the primary development platform and utilized DOTween for UI animations along with the IHandle interfaces</li>
                        <li><strong>In-Game Assets:</strong> Designed custom assets using Photoshop and Unity</li>
                        <li><strong>Audio:</strong> Modified and layered CC0 sounds using FL Studio and Unity.</li>
                        <li><strong>Coding:</strong> Implemented game logic and functionalities using Unity Engine, Visual Studio, and C#.</li>
                        <li><strong>Polish and Playtesting:</strong> Conducted thorough playtesting and iterative improvements, refining the game to enhance the player experience.</li>
                        <li><strong>Time Management:</strong> Successfully managed the prototype within the one-week timeline</li>
                    </ul>
                </div>
                <div className='project-details'>
                    <h1 className='heading'>Gallery</h1>
                    <div className='gallery'>
                        <GifElement img={img1}/>
                        <GifElement img={img2} />
                        <GifElement img={img3} />
                        <GifElement img={img4} />
                    </div>
                </div>
            </div>
        </>
    )
}