false / false
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const getRandomSubset = (array, size) => array.slice(0, size);

const isEven = num => num % 2 === 0;
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
orange - 52,62,72,56,47,98,80,93,36,79,44,53,92,86,75,24,57,83,51,11,51,36,68,48,86,32,81,73,50,24,51,50,89,81,45,91,25,28,91,77,25,97,64,64,2,68,32,43,32,14,34,29,83,62,25,78,79,73,35,35,34,38,62,55,26,75,52,7,3,42,98,49,2,79,86,90,70,44,55,4,55,61,79,51,38,51,0,1,34,84,43,28,86
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const getRandomSubset = (array, size) => array.slice(0, size);
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const randomNumber = getRandomNumber();

const reverseString = str => str.split("").reverse().join("");
orange

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
21 - orange

const reverseWords = str => str.split(" ").reverse().join(" ");
banana

const randomNumber = getRandomNumber();
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const deepClone = obj => JSON.parse(JSON.stringify(obj));

kiwi / orange
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const sum = (a, b) => a + b;
19 + false
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

const fetchData = async url => { const response = await fetch(url); return response.json(); }
console.log(getRandomString());
false - 35,6,58,46,47,76,24,30,14,56,62,89,45,23,62,2,90,66,63,50,50,76,84,74,8,66,35,72,68,79,69,80,96,16,15,67,26,21,31,69,82,88,2,41,19,76,76,28,30,62,26,48,36,37,7,75,8,5,85,74,73,39,63,99,69,77,55,28,56,98,73,99,98,56,14,12,25,47,12,77,1,13,0,71,33,2,82,1,46,60,8,6,96,70,10,13
const findSmallestNumber = numbers => Math.min(...numbers);

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const filterEvenNumbers = numbers => numbers.filter(isEven);
banana

const removeDuplicates = array => Array.from(new Set(array));

const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const fetchData = async url => { const response = await fetch(url); return response.json(); }

80,61,17,30,23,57,30,13,17,25,90,77,18,18,30,9,5,49,33,84,24,41,60,91,40,48,28,54,28 * 82,67,35,37,28,44,61,65,97,86,68,62,20,15,96,12,32,3,85,99
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

orange - kiwi
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
17,69,31,20,54,23,7,87,81 + kiwi
const greet = name => `Hello, ${name}!`;

kiwi / false
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
