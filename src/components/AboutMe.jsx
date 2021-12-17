import AboutMeCard from './AboutMeCard';
import '../styles/AboutMe.css'
import { useNavigate } from 'react-router-dom';


const AboutMe = () => {
    let navigate = useNavigate();
    
    const goToProjects = () => {
        navigate('/Projects'),
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }
    return(
    <div className='AboutMe-Main'>
        <div className="AboutCardList-Container">
            <AboutMeCard 
            title="Qui je suis" 
            src="./src/assets/Photo-profil.jpg"
            body={<>
                <ul>
                    <li><em>Prénom:</em> Arnaud</li>
                    <li><em>Nom:</em> BEGIN</li>
                    <li><em>Age:</em> 30 ans</li>
                    <li><em>Lieu:</em> Paris</li>
                    <li><em>Diplôme:</em> Master 2 Management et Ingénierie Financière</li>
                    <li><em>Formation:</em> Développeur Web (5 mois) @ </li>
                        <a href="https://www.wildcodeschool.com/fr-FR" target="_blank">Wild Code School
                        </a>
                </ul>
                <p>
                    <em>Compétences:</em> JavaScript, HTML, CSS, MySQL... et plus si affinités
                </p>
                <a href="https://www.linkedin.com/in/arnaud-begin-4757176b/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAAA7gxtkBv9v5abfW3TAPK6V14hl3_VvUFjM,1635477221326)/"
                target="_blank"
                >
                Voir mon CV
                </a>
            </>}
            />

            <AboutMeCard 
            title="Mes Centres d'intérêts" 
            src="./src/assets/intérêts.png"
            body={
                <div>
                    <ul>
                        <li><em>Informatique:</em></li>
                    <a href="https://www.codewars.com/">Codewars</a>
                        /
                    <a href="https://github.com/ArnaudBGN">GitHub</a>
                        <p>
                       <li><em>Sport:</em> tennis, golf, wakeboard, musculation, snowboard </li>
                        </p>
                        <p>
                        <li><em>Loisirs:</em> Le cinéma, le théâtre, les jeux vidéos, la lecture</li>
                        </p>

                        <li><em>Voyages:</em> 🇧🇷, 🇨🇦, 🇨🇺, 🇪🇸, 🇺🇸, 🇭🇺, 🇲🇺, 🇮🇪, 🇮🇹, 🇲🇹, 🇲🇽, 🇵🇱, 🇩🇴, 🇬🇧, 🇸🇽, 🇸🇨</li>
                    </ul>
                </div>
            }
            />

            <AboutMeCard 
            title="Ce que je recherche" 
            src="./src/assets/telescope.jpg"
            body={
                <div>
                    <p>
                    <em>Const Reconversion</em> = Plan de départ volontaire + découvrir nouveau domaine d'expertise.
                    </p>
                    <p>
                    A la fin de cette formation et grâce aux nouvelles compétences acquises, je souhaiterais découvrir ce super nouveau métier.
                    </p>
                    <p>
                    Je reste à l'écoute du marché et suis ouvert à toutes propositions de poste
                    (stage, alternance, CDD, CDI) pour vous apporter mes connaissances et développer mon expérience.
                    </p> 
                </div>
            }
            />
        </div>
        <div className='About-Button'>
        <button onClick={goToProjects}>Voir mes projets</button>
        </div>
    </div>
    )
}

export default AboutMe;