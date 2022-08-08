module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const bracketsPair = {}

  bracketsConfig.forEach((item) => {
    openBrackets.push(item[0]);
  })

  bracketsConfig.forEach((item) => {
    bracketsPair[item[1]] = item[0]
  })

  let stack = [];
  let count = 0;
  let count1 = 0;
  for (let i = 0; i < str.length; i++) {
    let symbol = str[i];

    if (openBrackets.includes(symbol)) {
      if (symbol === '|' || symbol === '7' || symbol === '8') {
        count++;
      }
      if (symbol === '8') {
        count1++;
      }
      if ((symbol === '|' || symbol === '7') && count % 2 === 0) {
        stack.pop();
      } else if(symbol === '8' && count1 % 2 === 0) {
        stack.pop();
      } else {
        stack.push(symbol);
      }
    } else {
      if (stack.length === 0) {
        return false;
      }
      let topElem = stack[stack.length - 1];
      if (bracketsPair[symbol] === topElem) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}
