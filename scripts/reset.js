import { inputs } from "./index.js";

const reset = (classReset) => {
  return [...theUL.children].forEach((li) => {
    li.classList.remove(classReset);
  });
};

const reset2 = () => {
  inputs.forEach((inp) => {
    inp.value = "";
  });
};

const reset3 = () => {
  [...numbers.children].forEach((number) => {
    number.classList.remove("bg-red-900", "scale-150", "text-red-500");
  });
};

export { reset, reset2, reset3 };
