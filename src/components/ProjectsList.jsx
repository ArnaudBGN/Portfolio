import ProjectCard from './ProjectCard';
import '../styles/ProjectsList.css';
import { useNavigate } from 'react-router';

const ProjectsList = () => {

    let navigate = useNavigate();

    const goToContactMe = () => {
        navigate('/Contact'),
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    };

    return (
    <div className='ProjectList-Main'>
        <div className="ProjectsList-Container">
            <ProjectCard 
            title="Projet 1" 
            src="./src/assets/T&D.png"
            header="Track & Destroy"
            body={<>
                <p>
                Ce premier projet a été développé en deux semaines et est parti d'un brainstorming qui a bien dérivé!
                T&D est un site internet qui a pour but de chasser et détruire des nuisibles et créatures surnaturelles. 
                </p>
                <a href="https://github.com/ArnaudBGN/Project-1" target="_blank">Track & Destroy</a>
            </> 
            }
            />

            <ProjectCard 
            title="Projet 2" 
            src="./src/assets/Quest_Game.png"
            header="The Quest Game"
            body={
                <>
                <p>
                Ce deuxième projet a été développé en 1 mois.
                The Quest Game est un jeu de quêtes dont vous êtes le héros et qui vous laisse le choix du personnage à incarner.
                Vous vivrez des aventures épiques... et qui piquent! Une histoire mais plusieurs chemins possibles!
                </p>
                <a href="https://github.com/ArnaudBGN/paris-0921-p2-groupe1" target="_blank">The Quest Game</a>
                </>
            }
            />

            <ProjectCard 
            title="Hackathon 1" 
            src="./src/assets/Piano-Piano.png"
            header="Piano-Piano"
            body={<>
                <p>
                Le but de ce premier Hackathon était de créer une application web en seulement 24h.
                Piano-Piano est un site internet où les enfants peuvent apprendre à jour du piano n'importe où et de façon ludique 
                </p>
                <a href="https://adecisy.github.io/Piano-Piano/" target="_blank">Piano-Piano</a>
            </>}
            />

            {/* <ProjectCard 
            title="Projet 3" 
            src="" 
            header="blabla"
            body="blablabla"
            /> */}
        </div>
        <div className='Contact-Button'>
        <button onClick={goToContactMe}>Contactez moi</button>
        </div>
    </div>
)
}

export default ProjectsList;