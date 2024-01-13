const name = "hitesh-hc"
const repocount = 50

console.log(name+repocount+" value")

console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

const gamename = new String('hitesh')

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(0));

console.log(gamename.indexOf('t'));

const newstring = gamename.substring(0, 4)
console.log(newstring);
// cannot use negative here, it just acta like 0

const anotherstring = gamename.slice(-8, 4)
console.log(anotherstring);


const newstringone = "    hitesh   "
console.log(newstringone);
console.log(newstringone.trim());


const url = 'https://hitesh.com/hitesh%20choudhary'
//here %20 was originally a space

console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'));

const gamenew = new String('hitesh-hc-com')
console.log(gamenew.split('-'));
