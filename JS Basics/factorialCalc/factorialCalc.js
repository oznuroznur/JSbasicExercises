/* 
 Factorial Calculation
*/
factorialCalc()
function factorialCalc(){
    let num = Number(prompt("Please enter a number to calculate it's factorial"))
    let result = 1;

    for( let i = 1 ; i<=num ; i++) {
        result=result*i
    }
    console.log("The factorial calculation of "+ num +" is "  + result)
   // alert ("The factorial calculation of "+ num +" is "  + result) to show the result on window
}