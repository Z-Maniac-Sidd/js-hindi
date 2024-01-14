let mydate = new Date()
console.log(mydate.toString());

console.log(mydate.toISOString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());

console.log(typeof mydate);
let mycreateddate = new Date(2023, 0 ,23,5)
console.log(mycreateddate.toDateString());

// let newdate = new Date("2023-01-14")
let newdate = new Date("01-14-2023")
console.log(newdate.toLocaleString());

let mytimestamp = Date.now()
console.log((mytimestamp));
//millisecond value deta ahi

console.log(newdate.getTime());
//millisecond upto entered date

console.log(Math.floor(Date.now()/1000));
//convert ot second

let newnewdate = new Date()
console.log(newnewdate);
console.log(newnewdate.getDate());
console.log(newnewdate.getMonth()+1);

// string interpolation = ``
//` ${newdate.getDay()} and the time`

newdate.toLocaleString('default', {
    weekday: "long",
    // timeZone:
})