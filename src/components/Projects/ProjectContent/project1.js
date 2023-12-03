import  './index.scss';
import thumbnail from '../../../assets/Projects/Quirky-of-diceville/thumbnail-qod.png';
import GifElement from '../../Elements/gifElement';
import img1 from '../../../assets/Projects/Quirky-of-diceville/img1.gif';
import img2 from '../../../assets/Projects/Quirky-of-diceville/img2.gif';
import img3 from '../../../assets/Projects/Quirky-of-diceville/img3.gif';
import img4 from '../../../assets/Projects/Quirky-of-diceville/img4.gif';
export default function Project1(){
    return(
        <>
            <div className='project-window'>
                <div className='project-details'>
                    <h1 className='heading'>Quirky of Diceville</h1>
                    <h2 className='subheading'>Game Developer and Designer</h2>
                    <div className='image-container'><img className='thumbnail' src={thumbnail} alt='thumbnail' /></div>
                </div>
                <div className='project-details'>
                    <h1 className='heading'>What I did!</h1>
                    <ul className='content'>
                        <li>Responsible for the complete conceptualization, design, and development of Quirky of Diceville.</li>
                        <li>Crafted the gameplay mechanics.</li>
                        <li>Designed, Modelled and executed all in-game assets, encompassing graphics, audio, and music.</li>
                        <li>Developed the game’s code using Unity Engine, Visual Studio and C# programming language.</li>
                        <li>Conducted rigorous playtesting and debugging to ensure a seamless user experience.</li>
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
                            src="https://www.youtube.com/embed/6biJPjptyco?si=EzngqrQVd0iLk2oD"
                            title="Quirky of Diceville"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </>
    )
}