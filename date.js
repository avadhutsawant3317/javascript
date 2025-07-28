//dates

let mydate = new Date();
console.log(mydate.toString);
// console.log(mydate.toDateString()); // "Mon Oct 23 2023"
console.log(mydate.toLocaleDateString()); // "10/23/2023"   
// console.log(mydate.toLocaleTimeString()); // "10:30:00 AM" (example output, varies by locale)
console.log(mydate.getFullYear()); // 2023  
console.log(typesof.mydate); // "object"

let createnewdate = new Date(2023, 9, 23); // Months are 0-indexed (0 = January)
console.log(createnewdate.toString()); // "Mon Oct 23 2023
console.log(createnewdate.toLocaleDateString()); // "10/23/2023"
console.log(createnewdate.getFullYear()); // 2023


let mytimestamp = Date.now();
console.log(mytimestamp); // Current timestamp in milliseconds since January 1, 1970
// console.log(new Date(mytimestamp).toString()); // Converts timestamp back to date
console.log(new Date(mytimestamp).toLocaleDateString()); // "10/23/

let newdate = new Date('2023-10-23T00:00:00Z'); // ISO 8601 format
console.log(newdate.toString()); // "Mon Oct 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(newdate.toLocaleDateString()); // "10/23/2023"
// console.log(newdate.getFullYear()); // 2023
console.log(newdate.getMonth()); // 9 (October, since months are 0-index

newdate.toLocaleString('default' ,{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}) // "Monday, October 23, 2023"