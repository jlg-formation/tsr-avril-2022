"use strict";

console.log("this: ", this);

function titi() {
  console.log("this: ", this);
}

titi();

const obj = {
  tutu: titi,
};

obj.tutu();

const o = new titi();

const o1 = Object.create(titi.prototype);
titi.bind(o1)(12, 13);
titi.call(o1, 12, 13);
titi.apply(o1, [12, 13]);
