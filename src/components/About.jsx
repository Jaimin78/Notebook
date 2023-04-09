import React, { useContext } from "react";
import NavBar from './NavBar';
import noteContext from '../context/notes/noteContext';

const About = () => {
  let data = useContext(noteContext)
  return(
    <>
      <NavBar />
      <h1>About {data.name}</h1>
    </>
  )
}

export default About;