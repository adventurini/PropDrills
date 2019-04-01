//I am a class component 
    //You need me (for now) because I control state. Without me, how will you
        //control state???? ---You can't (unless you use Hooks, but not now)

import React, { Component } from 'react';
import Son from './Son'

export default class  extends Component {
    constructor(props){
        super(props);

    }  
    render() {
    return (
      <div>
      {console.log(this.props)}
        <Son inherit={this.props.inherit}/>
        <button onClick={()=> this.props.toggle('son')}>Receive Inheritance</button>
      </div>
    )
  }
}
