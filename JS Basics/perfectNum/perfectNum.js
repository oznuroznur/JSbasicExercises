/*
Finding Perfect Number
*/

let inputNum = Number (prompt("Please enter a number to control if it is perfect number or not"))
isString(inputNum)

// Checking if input is Number or String
function isString (inputNum){
    if( typeof inputNum !== 'string'){
        return isPerfectNumber(inputNum);
        
    }else{
        alert("Please enter a number.")
    }
}

//Checking the input is Perfect Number
function isPerfectNumber(inputNum){   
    let toplam = 0 ;
    for(let i=2 ; i<=(inputNum/2) ; i++){        
        if(inputNum%i == 0){
            toplam+=i;
        }
    }
    toplam+=1+inputNum;
    if (toplam == inputNum*2) {
      //  alert("It's a perfect number ") to show the result on window 
        console.log("It's a perfect number")
    }else {
      //  alert("Not a perfect number ") to show the result on window
        console.log("Not a perfect number")
    }
}
