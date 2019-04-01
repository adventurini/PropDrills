//I am a class component 
    //You need me (for now) because I control state. Without me, how will you
        //control state???? ---You can't (unless you use Hooks, but not now)

import React, { Component } from 'react';
import Mom from './Mom';
import Dad from './Dad'


export default class  extends Component {
    constructor(){
        super();

        // This state below is being controlled only in this Grandparents component. However, if we pass methods (functions) to children / grandchildren, we can control the state in other components using setState. Ignore that for now, but that is something you will learn.
            //Below we are going to toggle these states by passing children the toggle method.
                //Pass the state to the Dad and Mom in the render function below. You can pass it
                    // using any variable you wish. However, there is a variable in the Son and Daughter components that are prepared to check if they were passed. That variable is inherit. So using the variable inherit to pass will make the components work without changing them in the Son and Daughter component.
        this.state = {
            passedInheritanceToGrandson: false,
            passedInheritanceToGranddaughter: false
        }
    }
//This is your toggle function
    //It needs to be passed to the Dad AND Mom component for those buttons to work properly
        //Pass this below inside the render 
            //You will notice it is checking to receive something back from the toggle method HINT toggle("**inside**")
                //Where the toggle function will check if inside === 'son'

                //IGNORE THE GUTS OF THIS FUNCTION for now
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
      //get used to logging props and state IT IS THE MOST IMPORTANT TOOL
      console.log(this.state.passedInheritance)
      //below are our Mom and Dad components. This is where we need to pass our state and our toggle function to both.
    return (
      <div>
        <Dad/>
        <Mom/>
      </div>
    )
  }
}
