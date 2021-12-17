import { useState } from 'react'
import '../styles/ProjectCard.css';

const ProjectCard = ({title, src, header, body}) => {
    const [stateProjectCard, setStateProjectCard] = useState(1);

    const goToProjectCardFront = () => {
        setStateProjectCard(1);
      };
    
    const goToProjectCardBack = () => {
        setStateProjectCard(2);
      };

    return (
        <div className="ProjectCard-Container">
            <h3>{title}</h3>
            {stateProjectCard &&
            (stateProjectCard === 1 ? (
                <img src={src} alt={title}/>
            ) : (
                <div className='ProjectCard-Back'>
                <h4>{header}</h4>
                <p>{body}</p>
                </div>
            ))}
            <button id="Details" onClick={goToProjectCardBack}>Détails</button>
            <button id="Back" onClick={goToProjectCardFront}>Retour</button>
        </div>
    )
}

export default ProjectCard;