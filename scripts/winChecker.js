const winChecker = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return +num1 + +num2;
    case "-":
      return +num1 - +num2;
    case "*":
      return +num1 * +num2;
    case "/":
      return +num1 / +num2;
    default:
      throw Error("Invalid Operator");
  }
};

export { winChecker };
