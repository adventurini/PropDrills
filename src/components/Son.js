//I am a function component
    //Cannot control state inside me

import React from 'react'

export default function (props) {
  return (
<div>
<h1>Grandson</h1>

        {props.inherit ? 
        <div>
            
            <h3>Omg, grandpa gave me $1,000</h3>
        </div>
    
                         :
        <div>
            
            <h3>I have received nothing</h3>
        </div>

  }
  </div>
  )
}


