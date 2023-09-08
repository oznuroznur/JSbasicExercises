/* 
Converting Binary to Decimal 
*/

let binary = prompt("Please enter a binary number to convert it to decimal")
binaryToDecimal(binary)

function binaryToDecimal(binary){    

    let sum=0,power=0;
    
    for(let i = binary.length-1 ; i>=0 ; i--){
        sum += Number(binary.charAt(i)) * Math.pow(2,power)
        power++;
    } 
    console.log("Result : " + sum)

}
