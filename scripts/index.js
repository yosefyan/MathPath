import { loopCreator } from "./loopCreator.js";
import { ulList, array } from "./constants.js";
import { selector } from "./selector.js";
import { winChecker } from "./winChecker.js";
import { spinElement } from "./spinElement.js";
import { getRandomNumber } from "./getRandomNumber.js";
import { reset, reset2, reset3 } from "./reset.js";

const theUL = selector("#theUL");

export const inputs = [selector("#firstNum"), selector("#secondNum")];

const elementToSpin = selector("#elementToSpin");

const num = selector("#num");

let blockList = [];

num.innerText = getRandomNumber();

loopCreator(
  theUL,
  ulList,
  "li",
  "text-center h-full text-2xl text-white border-l transition-all bg-cyan-400/25 flex items-center justify-center xl:text-5xl grow hover:bg-cyan-200/25 cursor-pointer"
);

theUL.addEventListener("click", (e) => {
  const { parentElement, innerText } = e.target;
  reset("bg-black/25");
  e.target.classList.add("bg-black/25");
  parentElement.dataset.value = innerText;
  firstCheck();
  finalCheck();
});

inputs.forEach((inp) => {
  inp.addEventListener("input", () => {
    firstCheck();
    finalCheck();
  });
});

const firstCheck = () => {
  if (inputs[0].value && inputs[1].value) {
    let res = winChecker(inputs[0].value, inputs[1].value, theUL.dataset.value);
    if (res == Number(num.innerText)) {
      return true;
    }
    return false;
  }
  return false;
};

const numbers = selector("#numbers");

const finalCheck = () => {
  if (firstCheck()) {
    [...theUL.children].forEach((li) => {
      if (li.innerText == theUL.dataset.value) {
        li.classList.add("bg-green-500/25");
        blockList.push(inputs[0].value.length > 1 && inputs[0].value[0]);
        [...numbers.children].forEach((number) => {
          if (blockList.includes(number.innerText)) {
            number.classList.add("bg-red-900", "scale-150", "text-red-500");
            return;
          }
        });
        reset2();
      }
    });
    const shouldSpin = () => {
      return [...theUL.children].every((li) =>
        li.classList.contains("bg-green-500/25")
      );
    };
    if (shouldSpin()) {
      spinElement(elementToSpin);
      num.innerText = getRandomNumber();
      reset("bg-green-500/25");
      reset3();
    }
  }
};

loopCreator(
  numbers,
  array,
  "li",
  "bg-orange-800/50 tShadow py-5 px-8 font-bold text-white text-3xl rounded-full transition-all"
);

window.addEventListener("keyup", (e) => {
  [...numbers.children].forEach((number) => {
    if (blockList.includes(e.key)) {
      reset2();
    }
    if (number.innerText == e.key && !number.classList.contains("bg-red-900")) {
      number.classList.add("scale-150", "bg-purple-400/25");
      setTimeout(
        () => number.classList.remove("scale-150", "bg-purple-400/25"),
        150
      );
    }
  });
});
11000;
