const loopCreator = (container, array, ele, classes) => {
  array.forEach((arr) => (container.innerHTML += `<${ele} class="${classes}">${arr}</${ele}>`));
};
export { loopCreator };
