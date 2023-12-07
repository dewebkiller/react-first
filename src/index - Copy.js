import React from 'react';
import ReactDOM from 'react-dom';
//import Header from './Header'
import User from './User';

/*
const main = {
  background: 'green',
  color: 'white',
  padding: '10px',
  border: '3px solid #f00',
}
*/
//ReactDOM.render (<h1 style={main}>Hello World!</h1>,document.getElementById('root'));

//ReactDOM.render(<> <Header /></>,document.getElementById('root'));

ReactDOM.render (
  <>
  <User name="John" expertise="FrontEnd Developer" />

  <User name="Eva" expertise="Backend Developer" />

  <User name="Eric" expertise="Digital Marketer"/>

  <User name="Luci" expertise="Project Manager"/>
  </>,document.getElementById('root')
);