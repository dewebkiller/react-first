import React from "react";
import $ from 'jquery';
import { useEffect } from "react";

function Jquery() {
  useEffect(()=> {
    $(function(){
      
      $('h1').addClass('classadded');
        //console.log('test')
     
    });
      
 
    }, []
  );
  return (
    <>
    <div className="container text-center">
    <h1>The class "classadded" was added by jquery</h1>
    </div>
    </>
  )
}

export default Jquery;