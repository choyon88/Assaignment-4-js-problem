/* mindGame() function firstly checking its parameter number or string,
if string then give error message.
then again check the number is positive or negative, if negative then its give 
error message, here result calculate by following precedence rules. */

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



 /* evenOdd() function take string input then it will check that number or string, if string then it will execute the program , else it will give an error. this function check overall input string length then modulo with 2 because checking even or odd. */

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


/* isLGSeven () this function check that the input number is bigger or smaller to 7 , if input number grater then 7 it will multiply input number with 2 , else it will subtract from 7. this function also check input number type string or number.
*/

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


/* findingBadData function will take a parameter an array. this function has full validation of checking its array or not and also array input number or string, and this function check negative number and positive number here two empty array which contain badData as a negative value and goodData as a positive value. then badData length will be return. */

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


/* gemsToDiamond () this function take three parameter as a number. then it will check its positive or negative number for validation if negative then it will give error message. then again it will check its number or string again string then it will give error message. this function can calculate the gems to diamond after the diamond grater then 2000 it will be subtract 2000 or it will normally return */


function gemsToDiamond(number1, number2, number3) {
  // checking number is positive or negative.
  if ( number1 < 0 || number2 < 0 || number3 < 0){
    return 'Please Enter Positive Number';
  }
  // checking inputs number or string.
  else if (typeof number1 == 'string' || typeof number2 == 'string' || typeof number3 == 'string') {
    return 'Remove String';
  } else {
    // calculation gems to diamond. 
    const total = (number1 * 21) + (number2 * 32) + (number3 * 43);
    if (total >= 1000 * 2) {
      return total - 2000;
    
    } else {
       return total;
      
    }
  }
}
