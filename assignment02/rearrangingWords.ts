/*Scrambled Array:
o Start with an array of elements in a scrambled order, like:
const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];*/

const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];

/*Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
o Convert non-strings (booleans, numbers) to strings if needed.
o Split elements into character arrays (optional).
o Rearrange characters or elements in the desired order (modify original array or
create temporary arrays).*/
scrambledArray.splice(2, 2);

let reArrange = [
  scrambledArray[5],
  scrambledArray[2],
  scrambledArray[3],
  scrambledArray[0],
  scrambledArray[1],
  scrambledArray[4],
];
console.log(reArrange.join(" ")); // Use join() to combine elements back into a single string: "I am a student of GIAIC".
