alert("Welcome! Please help me write a story.");
var questions = 13;
var questionsLeft = ' [' + questions + 'questions left]';
var userName = prompt ("What is your name?" + questionsLeft);
questions -= 1;
questionsLeft =' [' + questions + 'questions left]';
var farmAnimal = prompt ("Tell me a farm animal."+ questionsLeft);
questions -= 1;
questionsLeft =' [' + questions + 'questions left]';
var verb = prompt ("Give me a verb ending with 'ing'."+ questionsLeft);
questions -= 1;
questionsLeft =' [' + questions + 'questions left]';
var synonymForBig = prompt ('Give me another name for "Big"'+ questionsLeft);
questions -= 1;
questionsLeft =' [' + questions + 'questions left]';
var circleObject = prompt ("Tell me an object that has a circle shape"+ questionsLeft);
questions -= 1;
questionsLeft =' [' + questions + 'questions left]';
var friendName = prompt ("What is your best friend's name?"+ questionsLeft);
questions -= 1;
questionsLeft =' [' + questions + 'questions left]';
var president = prompt ("Name one American president."+ questionsLeft);
questions -= 1;
questionsLeft =' [' + questions + 'questions left]';
var color1 = prompt ("Tell me a color"+ questionsLeft);
questions -= 1;
questionsLeft =' [' + questions + 'questions left]';
var color2 = prompt ("Tell me another color."+ questionsLeft);
questions -= 1;
questionsLeft =' [' + questions + 'questions left]';
var time = prompt ("Tell me an amount of time.  For example, hours, days, weeks, months, or years."+ questionsLeft);
questions -= 1;
questionsLeft =' [' + questions + 'questions left]';
var comic = prompt ("What is your favorite comic book?"+ questionsLeft);
questions -= 1;
questionsLeft =' [' + questions + 'questions left]';
var meal = prompt ("What is your favorite meal?"+ questionsLeft);
questions -= 1;
questionsLeft =' [' + questions + 'questions left]';
var highNumber = prompt ("Tell me a really high number."+ questionsLeft);
alert("Thank you! I'll make you a story now.");
var story = "I love Easter! One of the main reasons is the hunt that we have for chocolate eggs! "
story += "This Easter though, the egg hunt was a little strange... " + "It was as strange as a " + farmAnimal + " " + verb + " towards a " + synonymForBig + " " + circleObject + "!"; 
story += " I was in the park with " + friendName + ", and we were hunting for eggs. We came across a tree that was shaped like " + president + " and decided to climb up. ";
story += "As we climbed further up, we noticed the branches were " + color1 + " with " + color2 + " spots! " + "When we looked up, we could see something shiny sitting on a branch. We hoped it was a chocolate egg! ";
story += "The higher we got, the more we hoped we would find a chocolate treat. After climbing for what felt like " + time + ", we reached the shiny object. It was wrapped up in the pages of a " + comic + " comic, and we unwrapped it to find a chocolate egg! ";
story += "We couldn't wait to taste it! But after the first bite, we noticed it was the flavor of " + meal + "! What a shame...";
story += "Luckily, when we got down, there was a basket at the bottom, filled with " + highNumber + " of our favorite chocolate eggs! Come to think of it, it wasn't such a bad Easter after all... ";
story += "Written by " + userName;
document.write (story); 