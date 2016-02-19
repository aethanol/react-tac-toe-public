# React-Tac-Toe

This module is a Tic-Tac-Toe game played in the browser, completed as part of a [course](http://arch-joelross.rhcloud.com/) at the UW ISchool. 

The below questions should be answered (in detail!) regarding your submission!


##### 1. Does using a Model-View-Controller architecture make it easier to change your game in the future? How many places would you need to make changes to your code to make this a 5x5 game of Tic-Tac-Toe?
> Yes extremely! All of the components are pretty low coupled, and if I wanted to add functionality for an AI opponent, I would just have to create that logic in a separate component and it would be able to interact with the model independently which which would be updated through the separation of the controller. I currently have it set up to be able to dynamically change size using a user input and button which calls the controller which calls a build() method in the model. This updates the game logic and array to be the new size and the view updates itself.
I am very glad I learned MVC and the observer pattern because I know that it will be very helpful in the future!


##### 2. Why did I say that an `Array` is the best data structure to represent the game's grid of cells? Why not a 2D-array (Array of Arrays), or an Object, or a Linked-List, or a Tree? 
> An array is a great way of iterating simply. This allows us to use .map() to loop through our board model array and render buttons based on that. With a 2D array, this would have been much more complex. Though this did add complexity to an efficient algorithm to check for winner. But for what the assignment was about, this was much easier!


##### 3. What online resources did you find to help you learn React? How do you search for resources, and how did you determine whether they were helpful or not? Think back to the "learning an API" paper! 
> I used the React tutorials that were listed, and browsed stackexchange when I ran into problems. I also read the mozilla documentation on Array.map() to figure that out.


##### 4. Approximately how many hours did it take you to complete this assignment? #####
> approximately 15


##### 5. Did you receive help from any other sources (classmates, etc)? If so, please list who (be specific!). #####
> I found an example of an input form in react from: https://prometheusresearch.github.io/react-forms/examples/basic.html


##### 6. Did you encounter any problems in this assignment we should warn students about in the future? How can we make the assignment better? #####
> I shouldn't have attempted complex win logic because I didn't have to! I tried to implement resizing and my game logic wasn't really scalable in the complex way that I implemented. I was attempting to achieve a more efficient game, but I didn't time manage properly (thus late).
