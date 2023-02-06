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
   console.log(isLGSeven(7));
