let shopping=[];
shopping=['Paintbrush','Pencil','Colours','ColourPalette','Canvas'];
console.log(shopping);

let numbers=[1,21,13,47,566,5,6];
console.log(numbers);
console.log(numbers[2]+numbers[4]);
console.log(numbers.sort((a,b)=>a-b));
numbers.push(-33);
console.log(numbers);
console.log(numbers.sort((a,b)=>a-b));

/*
Output

["Paintbrush", "Pencil", "Colours", "ColourPalette", "Canvas"]
array.js:6 (7) [1, 21, 13, 47, 566, 5, 6]
array.js:7 579
array.js:8 (7) [1, 5, 6, 13, 21, 47, 566]
array.js:10 (8) [1, 5, 6, 13, 21, 47, 566, -33]
array.js:11 (8) [-33, 1, 5, 6, 13, 21, 47, 566]
*/

let mix = ["Aditi" , true , 5.5]
console.log(mix);