//I am a function component
    //Cannot control state inside me

import React from 'react'

//something missing, again

export default function () {
  return (
<div>
<h1>Grandson</h1>
        {/* THIS IS A COMMENT, inside JSX ---- props.inherit is where the magic happens. Here we are checking
    if props.inherit is true (if it exists, a.k.a. if it was passed to us as inherit from above component).
    
    Translation of lines below >>>
        If props.inherit is true, then return the first div after the question mark.
            If props.inherit is anything else, then return the div after the colon.

    
    SO*** In order for props.inherit to be true, you must pass the state from the Grandparent, all the way down here, through the parents.

    The toggle method will do the rest!!!
     */}

        {props.inherit 
        
        ? 

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


