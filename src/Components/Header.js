import React from "react";
import { Link } from "react-router-dom";
import "../Counter.css";

function Header()
{
return (
  <div className="main-header">
    <ul>
      <Link to="/"><li>Home</li></Link>
      <Link to="/about"><li>About</li></Link>
      <Link to="/counter"><li>Counter</li></Link>
      <Link to="/bootstrap"><li>Bootstrap</li></Link>
      <Link to="/calculator"><li>Calculator</li></Link>
      <Link to="/slider"><li>Slider</li></Link>
      <Link to="/Jquery"><li>Jquery</li></Link>
    </ul>
  </div>
)
}
export default Header;