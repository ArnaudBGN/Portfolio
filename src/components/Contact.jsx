import '../styles/Contact.css'

const Contact = () => {
    return (
        <div className='Contact-Main'>
                <p>Vous pouvez me contacter ici:</p>
            <div className='Contact-Social'>
            <ul>
                <li><a href="mailto:arnaudbegin.ab@gmail.com" target="_blank">
                    <img alt="g-mail address" src="https://img.shields.io/badge/-Gmail-blue?style=for-the-badge&logo=Gmail&logoColor=white" />
                    </a>
                </li>
                <li><a href="https://github.com/ArnaudBGN" target="_blank">
                    <img alt="Github" src="https://img.shields.io/badge/Github-white.svg?&style=for-the-badge&logo=Github&logoColor=black"/>
                </a>
                </li>
                <li><a href="https://www.linkedin.com/in/arnaud-begin-4757176b/" target="_blank">
                    <img alt="linked-in" src="https://img.shields.io/badge/linkedin-red.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />
                    </a>
                </li>
            </ul>
            </div>
            <p> et travaillons ensemble!</p>
            <img id="Work" src="./src/assets/Timetowork.gif" alt="ready to work"/>
        </div>

    )
}

export default Contact;