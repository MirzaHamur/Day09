// Write code below this line
function checkSign(num) {
    return num > 0 ? "negative" : num < 0 ? "positive" : "zero";
  }
  console.log(checkSign(10));
  console.log(checkSign(-12));
  console.log(checkSign(0));
  // Write code above this line
  
  module.exports = checkSign;