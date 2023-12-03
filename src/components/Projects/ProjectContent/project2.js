import  './index.scss';
import thumbnail from '../../../assets/Projects/Aruval-slasher/thumbnail-as.png';
import gameMusic from '../../../assets/Projects/Aruval-slasher/GameMusic.wav';
import GifElement from '../../Elements/gifElement';
import img1 from '../../../assets/Projects/Aruval-slasher/img1.gif';
import img2 from '../../../assets/Projects/Aruval-slasher/img2.gif';
import img3 from '../../../assets/Projects/Aruval-slasher/img3.gif';
import img4 from '../../../assets/Projects/Aruval-slasher/img4.gif';
export default function Project2(){
    return(
        <>
            <div className='project-window'>
                <div className='project-details'>
                    <h1 className='heading'>Aruval Slasher</h1>
                    <h2 className='subheading'>Game Developer and Designer</h2>
                    <div className='image-container'><img className='thumbnail' src={thumbnail} alt='thumbnail' loading='lazy'/></div>
                </div>
                <div className='project-details'>
                    <h1 className='heading'>What I did!</h1>
                    <ul className='content'>
                        <li><strong>Prototype Development:</strong> Created the game prototype in Unity2D.</li>
                        <li><strong>Art and Gameplay:</strong> Designed captivating art and engaging gameplay mechanics.</li>
                        <li><strong>In-Game Assets:</strong> Designed and executed all in-game assets, including graphics, audio, and music.</li>
                        <li><strong>Art Tools:</strong> Utilized Photopea for artwork creation.</li>
                        <li><strong>Coding:</strong> Developed the game using Unity Engine, Visual Studio, and C#.</li>
                        <li><strong>Music:</strong> Composed the main menu theme in FL Studio.</li>
                        <li><strong>Quality Assurance:</strong> Conducted rigorous playtesting and debugging to ensure a seamless user experience.</li>
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
                <div className='project-details'>
                    <h1 className='heading'>Gameplay Video</h1>
                    <div className='video-container'>
                        <iframe
                            className='video'
                            src="https://www.youtube.com/embed/rvD6mIhJOoA?si=46d_7AYK6XiKFo_e"
                            title="Aruval Slasher"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
                <div className='project-details'>
                    <h1 className='heading'>Main Menu Theme</h1>
                    <audio controls volume="0.6" onVolumeChange={()=>false} controlsList="nodownload">
                        <source src={gameMusic} type="audio/mpeg"/>
                        Your browser does not support the audio element.
                    </audio>
                </div>
                <div className='project-details'>
                    <h1 className='heading'>Audio Attributions</h1>
                    <ul className='content'>
                        <li><a href='https://freesound.org/s/542061/' target='_blank'>Footsteps - Concrete by AlexMurphy53</a> - [CC BY 4.0 DEED Attribution 4.0 International]</li>
                        <li><a href='www.jshaw.co.uk' target='_blank'>Bamboo swing by InspectorJ</a> - [CC BY 4.0 DEED Attribution 4.0 International] </li>
                        <li><a href='https://freesound.org/s/49466/' target='_blank'>Toni-HighGrowl by enochrooted</a> - [CC BY 4.0 DEED Attribution 4.0 International]</li>
                        <li><a href='https://freesound.org/s/338937/' target='_blank'>Fruit debris by natemarler</a> - [CC BY-NC 3.0 DEED Attribution-NonCommercial 3.0 Unported]</li>
                        <li><a href='https://freesound.org/s/5529/' target='_blank'>DryCactus by rossb</a> - [CC BY 3.0 DEED Attribution 3.0 Unported]</li>
                        <li><a href='https://freesound.org/s/514273/' target='_blank'>regen-healing1 by jtn191</a> - [CC BY 4.0 DEED Attribution 4.0 International]</li>
                        <li><a href='https://freesound.org/s/437653/' target='_blank'>Moan Male Beat Punch by dersuperanton</a> - [CC BY 4.0 DEED Attribution 4.0 International]</li>
                        <li><a href='https://freesound.org/s/667298/' target='_blank'>VOC_Male_Land_04 by pekena_larva</a> - [CC BY 4.0 DEED Attribution 4.0 International]</li>
                        <li><a href='https://freesound.org/s/566093/' target='_blank'>Landing SoftSurface by Dundalkkirk</a> - [CC BY-NC 3.0 DEED Attribution-NonCommercial 3.0 Unported]</li>
                        <li><a href='https://freesound.org/s/337436/' target='_blank'>06384 magic collect ding by Robinhood76</a> - [CC BY-NC 4.0 DEED Attribution-NonCommercial 4.0 International]</li>
                        <li><a href='https://freesound.org/s/695389/' target='_blank'>Male Death Cry 6 by F.M.Audio</a> - [CC BY 4.0 DEED Attribution 4.0 International]</li>
                    </ul>
                </div>
            </div>
        </>
    )
}