//I am a class component 
    //You need me (for now) because I control state. Without me, how will you
        //control state???? ---You can't (unless you use Hooks, but not now)

import React, { Component } from 'react';
import Son from './Son'

export default class  extends Component {
    constructor(){
        super();

    }  
    render() {
    return (
      <div>
        <Son/>
        <button>Receive Inheritance</button>
      </div>
    )
  }
}
