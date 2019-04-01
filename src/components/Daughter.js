// I am a functional component
      //Cannot control state inside me

import React from 'react';


export default function (props) {
  return (
    <div>
    <h1>GrandDaughter</h1>
        {props.inherit ?
        <div>
        
      <h3>Wow, Grandpa left me his house!!!</h3>
      </div>
      :
      <div>
       
      <h3>I have received nothing</h3>
      </div>}
    </div>
  )
}
