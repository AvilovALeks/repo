const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

const capitalizeString = str => str.toUpperCase();
53 - 84,31,15,88,41,10,42,41,33,26,4,10,73,26,71,37,17
const getRandomSubset = (array, size) => array.slice(0, size);

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const isEven = num => num % 2 === 0;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
grape

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
kiwi

const squareRoot = num => Math.sqrt(num);
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
grape

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
apple


const findLargestNumber = numbers => Math.max(...numbers);
13,38,34,7,15,25,31,48,81,10,35,50,36,71,6,23,79,23,33,56,42,22,67,50,13,5,80,75,92,4,85,17,59,44,58,61,15,39,72,35,30,41,50,48,49,36,78,34,18,95,47,90,47,34,81,18,13,25,55,74,5,14,1,20,83,22,52,83,17,59,62,7,15,37,82,88,64,37,48,55,42,82,3,31,75,64,58,69,23,96,57,40,62,73,66,40,88 + true

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));

3,84,32,57,17,44,18,56,42,47,78,33,26,93,66,25,74,67,2,67,6,11,78,32,39,19,29,8,27,45,98,6,63,53,95,19,37,76,39,43,13,39,60,23,33,67,35,31,67,21,40,76,16,59,46,77,37,64,67,69,58,28 / kiwi
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const findLargestNumber = numbers => Math.max(...numbers);
const formatDate = date => new Date(date).toLocaleDateString();
