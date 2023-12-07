import React, {useEffect, useState} from 'react';
import Test from './Test';

function Condition() {
  const [toggle, updatetoggle] = useState (false);
  return (

<div>
  <button onClick={()=> {
    updatetoggle(!toggle);
  }}>Toggle
  </button>
  {toggle && <Test />}
</div>

);
}
export default Condition;