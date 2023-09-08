/* 
Finding Prime Number
*/
isPrimeNum()
function isPrimeNum() {
    let num = Number(prompt("Please enter a number to see if it's prime number or not"))
    let result = true;

    for(let i=2 ; i<= Math.floor(num/2) ; i++){
        if(num %i == 0) {
            // Not Prime
            result=false;
            break;
        }
    }
    if(result){
      //  alert(num+ " is prime") to show the result on window
        console.log(num + " is prime")
    }else{
      //  alert(num + " is not prime") to show the result on window
        console.log(num + " is not prime")
    }
}