import React from "react";
import {useNavigate} from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate('/about');
  }
  return(
  <>
  <h1>This is home page.</h1>
  <button onClick={handleclick}>Click </button> to go to about page
  </>
  )
}
export default Home;