This is a Prop Drilling exercise


Prop drilling is the practice of passing props from parents to siblings. Props are variables, state, or functions. 

<!-- Make sure to understand State here -->

<!-- State may sound confusing. But it's just state. When you say the word state, just think of 
yourself as a person. Your state would include attributes such as your age and height. These things change very slowly (or perhaps do not change anymore (height)). 

However, your mood, appetite, heart rate, 'awake or asleep' will change daily or hourly.

So you could create components that monitored each of these states such as this:

Class YearlyChanges
state = {
    age: '',
    height: '',
    weight: ''
}

Class DailyChanges
state = {
    mood: '',
    awake: false
}

Class HourlyChanges
state = {
    heart-rate: '',
    mood: ''
}

This will become clearer when the person is no longer you, but a user you are tracking on a social network. We need to track things such as if they are loggedIn, but also we need to know how they interact with the site over a lifetime. There are tons of things that have to be tracked for every user. Some are static (email, name) while some are dynamic (age, address) while further some are very dynamic such as whether they are logged in and which type of device they are logged in from. -->

<!-- State -->


<!-- Props Drill Practice -->

This repo is a practice for drilling your props. That means, passing props from parents to their children. Follow the instructions in the Grandparents component to get the props to the Dad/ Mom.

You need to pass the toggle function from the grandparents to the Dad / Mom.

You need to pass the state to the grandchild.

Dad, Mom, and Grandparents are class components (where you can monitor state).

Son and Daughter are functional components (where you cannot).


PLEASE FORK THIS README. CLONE IT. AND PSEUDOCODE YOUR STEPS PRIOR TO WRITING A SINGLE LINE OF CODE!!!