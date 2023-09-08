/* 
Finding Armstrong Number
*/
isArmstrongNum()
function isArmstrongNum(){
    let num = prompt("Please enter a number to see if it's an Armstrong number or not")
    let sum = 0;
    for(let i=0 ; i<num.length; i++){
        let number = num.charAt(i)
        sum+=Math.pow(number,3)
    }
    if(Number(num)== sum){
        console.log(num+ " is an Armstrong number")
    }else
        console.log(num+ " is not an Armstrong number")
}