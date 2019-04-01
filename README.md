This is a Prop Drilling exercise


Prop drilling is the practice of passing props from parents to siblings. 

Props are variables, state, or functions. 

<!-- Make sure to understand State here -->

State may sound confusing. But it's just state. When you say the word state, just think of 
yourself as a person. Your state would include attributes such as your age and height. These things change very slowly (or perhaps do not change anymore). So monitoring this state would be simple.

However, your mood, appetite, heart rate, 'awake or asleep', change daily or hourly.

So you could create components that monitored each of these states such as this.

Class YearlyChanges
state = {
    age: '',
    height: '',
    weight: ''
}

Class DailyChanges
state = {
    mood: '',
    awake: ''
}

Class HourlyChanges
state = {
    heart-rate: '',
    mood: ''
}

You may notice here, that mood is affected by the hour and day. Because you may want to control the state of your component in two different levels. (Such as the type of mood a person is in in the day, or hour) If someone's mood is bad, it may be bad for a whole day, which could be a state affected by another state. But it may change three times in a single day. Whereas age only changes one time per year. And will not have to be monitored outside a yearly component. 

<!-- State -->



<!-- Props Drill Practice -->

This GH is a practice for drilling your props. That means, passing props from parents to their children. Follow the instructions in the Grandparents component to get the props to the Dad/ Mom.

You need to pass the toggle function, as well as the state from the grandparents.


