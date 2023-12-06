function bouncer(arr) {
  return arr.filter(i => !!i === true)
}

const result = bouncer([7, 'ate', '', false, 9])
console.log(result)

/*
Convert Values to Boolean

const string = 'string';
!!string; // true
Boolean(string); // true

In JavaScript, there are 6 falsy values. 
If you convert any of these to a boolean, it will return false.

false
undefined
null
NaN
0
"" (empty string)
*/
