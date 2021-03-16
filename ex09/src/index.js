// Only change code below this line
function logicalOrOperator(num) {
    if (num <= 80 && num >= 40) {
    return "Yes";
    }
    return "No";
  }
  logicalOrOperator(24);
  
  console.log(logicalOrOperator(0));
  console.log(logicalOrOperator(24));
  console.log(logicalOrOperator(45));
  console.log(logicalOrOperator(57));
  console.log(logicalOrOperator(100));
  // Only change code above this line
  module.exports = logicalOrOperator;