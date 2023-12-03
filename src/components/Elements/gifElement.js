export default function GifElement(props){
    return (
        <div className='gif-container' ><img className='gif' src={props.img} alt='gif' loading="lazy" /></div>
    )
}