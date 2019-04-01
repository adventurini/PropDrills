//I am a class component 
    //You need me (for now) because I control state. Without me, how will you
        //control state???? ---You can't (unless you use Hooks, but not now)

import React, { Component } from 'react';
import Mom from './Mom';
import Dad from './Dad'


export default class  extends Component {
    constructor(){
        super();
        this.state = {
            passedInheritanceToGrandson: false,
            passedInheritanceToGranddaughter: false
        }
    }

    toggle = (child) => {
        console.log(this.state.passedInheritance)
        if (child === 'son'){
        this.setState({
            passedInheritanceToGrandson : !this.state.passedInheritanceToGrandson,
        })}
        else{
            this.setState({
            passedInheritanceToGranddaughter : !this.state.passedInheritanceToGranddaughter
            })
        }
    }

    
  render() {
      console.log(this.state.passedInheritance)
    return (
      <div>
        <Dad inherit={this.state.passedInheritanceToGrandson} toggle={this.toggle}/>
        <Mom inherit={this.state.passedInheritanceToGranddaughter} toggle={this.toggle}/>
      </div>
    )
  }
}
