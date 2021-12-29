import { useState } from 'react';
import '../styles/AboutMeCard.css';


const AboutMeCard = ({title, src, body}) => {
    const [stateCard, setStateCard] = useState(1);

    const goToCardFront = () => {
        setStateCard(1);
      };
    
    const goToCardBack = () => {
        setStateCard(2);
      };
      
    return (
        <div className="AboutCard-Container">
            <h3>{title}</h3>
            {stateCard &&
            (stateCard === 1 ? (
            <img src={src} alt={title}/>
            ) : (
            <div className='AboutCard-Back'>
            {body}
            </div>
            ))}
            <button id="Details" onClick={goToCardBack}>Détails</button>
            <button id="Back" onClick={goToCardFront}>Retour</button>
        </div>
    )
}

export default AboutMeCard;