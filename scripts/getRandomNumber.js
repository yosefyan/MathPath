const getRandomNumber = () => {
  let num = Math.floor(Math.random() * 1000);
  return num % 2 == 1 ? num + 1 : num;
};

export { getRandomNumber };
