const prompt = require("prompt-sync")({ sigint: true });
let pi=Math.PI;
let r=prompt('What is Radius? ');
r=Number(r);
let area=pi*(Math.pow(r,2));
console.log(`Area is ${area.toFixed(2)} `);
