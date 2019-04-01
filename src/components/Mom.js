//I am a class component 
    //You need me (for now) because I control state. Without me, how will you
        //control state???? ---You can't (unless you use Hooks, but not now)

import React, { Component } from 'react';
import Daughter from './Daughter'

export default class Mom extends Component {
    constructor(){
        super()
    }
  render() {
    return (
      <div>
        <Daughter/>
        <button>Receive Inheritance</button>
      </div>
    )
  }
}
