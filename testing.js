function gemsToDiamond(number1, number2, number3) {
  // checking number is positive or negative.
  if (number1 < 0 || number2 < 0 || number3 < 0) {
    return 'Please Enter Positive Number';
  }
  // checking inputs number or string.
  else if (typeof number1 == 'string' || typeof number2 == 'string' || typeof number3 == 'string') {
    return 'Remove String Enter Number';
  } else {
    const total = (number1 * 21) + (number2 * 32) + (number3 * 43);
    if (total > 1000 * 2) {
      return total - 2000;

    } else {
      return total;

    }
  }
}
console.log(gemsToDiamond(1, 1, 1));