import './index.scss';

export default function AnimatedLetters(props){
    return(
        <span>
            {
                props.strArray.map((char, i)=>{
                    return (
                        ((char !== ' ')&&(<span key={char + i} className={`${props.letterClass} _${i + props.idx}`}>{char}</span>))||(<span key={char + i} className={`${props.letterClass} _${i + props.idx}`}>&nbsp;</span>)
                    )
                })
            }
        </span>
    )
}