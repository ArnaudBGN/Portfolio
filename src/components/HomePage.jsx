import React from 'react'
import Video from '../assets/Stairs.mp4'
import '../styles/HomePage.css'
import { useNavigate } from 'react-router'


const HomePage = () => {
  let navigate = useNavigate();
  
  const goToAboutMe = () => {
      navigate('/AboutMe')
  }

  setTimeout(goToAboutMe, 9500);

  return (
   
     <div className='HomePage-Container'>
       <video className="HomePage-Video" autoPlay muted >
        <source src={Video} type={"video/mp4"}/>
        </video>
   </div>
  
  )
}

export default HomePage;