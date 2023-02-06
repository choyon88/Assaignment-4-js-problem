/*
function mindGame(number) {
    // checking Number or String. 
    if (typeof number == 'number') {
       //checking positive number or Negative.
  if (number >= 0) {
     
    // Following precedence rules.
         let result = (number * 3 + 10) / 2 - 5;
         return result;
     } else {
        return 'Please Enter Positive Number';
    }
    } else {
        return 'Please Remove String';
  }
 }
 console.log(mindGame(5));
mindGame() function firstly checking its parameter number or string,
if string then give error message.
then again check the number is positive or negative, if negative then its give 
error message, here result calculate by following precedence rules. 

*/

/*
function evenOdd(text) {
  //checking String or Number 
  if (typeof text === 'string') {
    const overAllLength = text.length;
    if (overAllLength % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
 }else{
    return 'Please enter String';
 }
  }

console.log(evenOdd('Batch7'));

  */

/*
function isLGSeven(number) {
    // checking Number or String. 
    if(typeof number == 'number'){
     if (number > 7) {
       return number * 2;
     } else {
       return number - 7;
     }
    } else {
      return 'Please Enter Number !'
    }
   }
   console.log(isLGSeven(-15));
*/

/*

function findingBadData(arr) {
    let badData = [];
    let goodData = [];
    // Checking Array or Something else. 
    if (Array.isArray(arr) === true) {
    for (let i = 0; i < arr.length; i++){
        let index = arr[i];
        // Checking Array Element all Number or String
        if (typeof index == 'number') {
            if (index >= 0) {
                goodData.push(index);
              } else {
                badData.push(index);
              }
        } else {
            return 'Please Enter number of Array'
        }
      
    }
    } else {
        return 'Please Enter an Array'
    }
    return badData.length;
  }
  console.log(findingBadData([-4, -9, -5, -33, -55]));

*/


/*
function gemsToDiamond(number1, number2, number3) {
  // checking number is positive or negative.
  if ( number1 < 0 || number2 < 0 || number3 < 0){
    return 'Please Enter Positive Number';
  }
  // checking inputs number or string.
  else if (typeof number1 == 'string' || typeof number2 == 'string' || typeof number3 == 'string') {
    return 'Remove String';
  }else {
    const total = (number1 * 21) + (number2 * 32) + (number3 * 43);
    if (total >= 1000 * 2) {
      return total - 2000;
    
    } else {
       return total;
      
    }
  }
}
console.log(gemsToDiamond(100, 5, 1));
*/