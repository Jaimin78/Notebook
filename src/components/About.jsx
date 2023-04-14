import React, { useContext } from "react";
import noteContext from '../context/notes/noteContext';

const About = () => {
  let data = useContext(noteContext)
  return(
    <>
      <h1>About {data.name}</h1>
    </>
  )
}

export default About;