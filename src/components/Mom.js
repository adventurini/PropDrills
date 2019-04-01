//I am a class component 
    //You need me (for now) because I control state. Without me, how will you
        //control state???? ---You can't (unless you use Hooks, but not now)

import React, { Component } from 'react';
import Daughter from './Daughter'

export default class Mom extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
        <Daughter inherit={this.props.inherit}/>
        <button onClick={()=> this.props.toggle('daughter')}>Receive Inheritance</button>
      </div>
    )
  }
}
