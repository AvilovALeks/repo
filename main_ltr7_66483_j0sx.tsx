98 - banana
const reverseString = str => str.split("").reverse().join("");
let result = performOperation(getRandomNumber(), getRandomNumber());
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
orange

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
35,80,40,63,75,7,33,61,23,2,2,99,69,81,81,53,55,29,14,47,70,64,47,7,2,65,13,31,25,90,89,10,81,47,61,96,98,45,65 / 34,59,19,83,97,72,58,77,51,24,67,45,16,48,55,70,9,9,42,92,64,11,71,78,84,54,92,30,84,63,22,78,76,62,93,61,45,97,15,28,5,93
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const squareRoot = num => Math.sqrt(num);
false * apple
const greet = name => `Hello, ${name}!`;
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
function addNumbers(a, b) { return a + b; }

