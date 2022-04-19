
// one
//Use the BMI example from class activity (BMI question), and the code you already wrote, and improve it:
//1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Lucas'
//BMI is higher than John's!" or "John's BMI is higher than Lucas'!"
//2. Use a template literal to include the BMI values in the outputs. Example: "John's BMI (28.3) is higher
//than Lucas’ BMI (23.9), that is True/False!"
//HINT: Use an if/else statement; the variables you create in class are: johnBMI, lucasBMI, lucasHigherBMI.

  // solution
const johnBMI= 28.3;
const lucasBMI= 23.9;
console.log(lucasBMI>johnBMI? ("lucas's BMI is higher than lucas's"): ("john's BMI is higher than lucas's"));
//2
if(lucasBMI>johnBMI){

console.log("lucas's BMI is hight than lucas's")

}
else{
   console.log("john's BMI is hight than lucas's") 
}



//two
//The Temperature Converter - It’s cold out! Let's make a converter based on the steps below and display
//the converted temperature result.
//Use template literals Only to display the result
//• Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".
//• Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is
//NN°C."
   // Result




   
//three
//Use prompt() to let user type a number from the web page.
//If user enters nothing or strings, log "Please enter a number!" to console;
//If user enter 10, log "You win 10 point" to console;
//If user typed 8, log "You win 8 points” to console
//If the number is not 8 or 10, log "NOT MATCHED!!" to console

// Solution for three

let userNumber=prompt();

if(userNumber==""){
    console.log('Please enter a number!')
}

else if( userNumber==10){
    console.log('You win 10 points')
}
    
else if(userNumber==8){
    console.log('You win 8 points')
}
else{
    console.log('Not Matched!')
}


// Part D

//Create a function to check who the winner is:
//There are two teams, Nets and Knicks. They compete against each other 3 times.
//The team with the highest average score (the score should be at least 100) wins a trophy!
 //A draw only happens when both teams have the same score and both have a score greater or equal
//100 points. Otherwise, no team wins the trophy.
//Test data:
//Data 1: Nets score 80, 82 and 100, Knicks score 80, 90 and 106
//Data 2: Nets score 98, 110 and 101. Knicks score 108, 92 and 110

// Solution part D


function draw(Nets, Knicks){
    if (Nets === Knicks && Nets >= 100 && Knicks >= 100)
    console.log('we have a draw')
    
else{
    console.log('no team wins the trophy ')
}
}
draw(80,80)
draw(82,90)
draw(100, 100)
draw(98, 108)
draw(110, 92)