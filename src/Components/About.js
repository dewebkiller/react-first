import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


function About() {
  return (
    <>
    <h1>This is about page.</h1>
   <p>Fontawesome icon: <FontAwesomeIcon icon="fa-regular fa-eye" /></p> 
    </>
  )
}

export default About;
library.add(fab, fas, far)