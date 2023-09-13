const strArgument="nitin";
console.log(strArgument);

//Program 1 : Reverse a string
function reverseString(str){
    return str.split("").reverse().join("");
}

console.log("Reverse String : ",reverseString(strArgument));

//Program 2 : Check palindrome or not
function isPalindrome(str){
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,"");
    const reverseStr = reverseString(str);
    return cleanStr === reverseStr;
}

console.log(strArgument," Palindrome or not : ", isPalindrome(strArgument));

//Program 3 : Find the Max Number from an Array
function findMaxNumber(arr){
    return Math.max(...arr);
}

function findMaxNumberusingfor(arr) {
    if (arr.length === 0) {
      return undefined;
    }
  
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return max;
  }

const arrArg = [5,2,3,45,75,3];
console.log("Max number from given array : ", findMaxNumber(arrArg));
console.log("Max number from given array : ", findMaxNumberusingfor(arrArg));

//Program 4 : Calculate Factorial
function factorial(no) {
    if(no === 0 || no === 1) return 1;
    return no * factorial(no - 1);
}
const n=5;
console.log("Factorial of ", n ," number is : " + factorial(n));

//Program 5 : Fibonacci Sequence
function fibonacci(no){
    const sequence = [0,1];
    for(let i=2;i<=no;i++){
        sequence[i] = sequence[i-1] + sequence[i-2];
    }
    return sequence.slice(0, no + 1);
}
console.log("Fibonacci Series of ",n,"given number is : " + fibonacci(n));

//Program 6 : Find the Missing Number in an Array
function findMissingNumber(arr, n) {
    const expectedSum = (n * (n + 1)) / 2;
   const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
  }
  const numbers = [1, 2, 3, 5];
  console.log("Missing number from array : ",findMissingNumber(numbers, 5));

  //Program 7 : Remove Duplicates from an Array
  function removeDuplicates(arr){
      return [...new Set(arr)];
  }

  const arrRandNos = [9,1,2,3,4,5,5,6,7,8,9,0];
  console.log("Sorted Array : ", removeDuplicates(arrRandNos));

  //Program 8 : Merge Two array

  function mergeArray(arr1,arr2){
      const newarray = arr1.concat(arr2);
      //return removeDuplicates(newarray);
      return newarray;
      //return [...arr1,...arr2].sort((a,b) => a-b);
  }
  const array1=[4,3,9,1];
  const array2=[6,7,1,4];
  console.log("Merge and Sorted two arrays : " +mergeArray(array1,array2));

  //Program 9 : Implement a Stack
  class Stack {

    constructor(){
        this.items=[];
    }

    push(item){
        this.items.push(item);
    }

    pop() {
        if (!this.isEmpty()) {
          return this.items.pop();
        }
    }

    peek() {
        if (!this.isEmpty()) {
          return this.items[this.items.length - 1];
        }
    }

    isEmpty(){
        return this.items.length === 0;
    }
  }

  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  console.log(stack.peek());
  stack.pop();
  console.log(stack.peek());

//Program 10 : Queue
class Queue{

    constructor(){
        this.items=[];
    }

    enqueue(item){
        this.items.push(item);
    }

    dequeue(){
        if(!this.isEmpty()){
            return this.items.shift();
        }
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0];
        }
    }
    isEmpty() {
        return this.items.length === 0;
    }
}

const queue = new Queue();
queue.enqueue(7);
queue.enqueue(9);
console.log(queue.peek());
queue.dequeue();
console.log(queue.peek());

//Program 11 : Count the Frequency of Each Element in an Array
function frequencyElements(arr){
const frequency = {};
    for(const element of arr){
        frequency[element] = (frequency[element] || 0) + 1;
    }
    return frequency;
}

const numbersArray = [1,2,3,2,3,5,4,6,7,7,9];
console.log("Frequency of element : ",frequencyElements(numbersArray));

//Program 12 : Check if a String Contains Only Unique Characters
function hasUniqueChar(str){
    return new Set(str).size === str.length;
}
console.log("Check if a String Contains Only Unique Characters : ");
console.log(hasUniqueChar("hello"));
console.log(hasUniqueChar("world"));

//Program 13 : Find the Longest Word in a Sentence
function findLongestWord(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
}
  
  console.log("Find largest word from sentence : ",findLongestWord("The quick brown fox jumps over the lazy dog"));

  //Program 14 : Implement a Binary Search Algorithm
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
 
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(sortedArray, 5));

//Program 15 : Reverse Words in a Sentence
function reverseWords(sentence) {
    return sentence.split(" ").reverse().join(" ");
}
  
console.log(reverseWords("Hello, World!"));

//Program 16 : Check if a Number is Prime
function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    return true;
  }
console.log(isPrime(17));
console.log(isPrime(25));

//Program 17 : Find the Intersection of Two Arrays
function findIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    return [...set1].filter((element) => set2.has(element));
  }
  
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
console.log("Intersection of two arrays : ",findIntersection(arr1, arr2));

//Program 18 : Find the Second Largest Number in an Array
function findSecondLargest(arr) {
    arr.sort((a, b) => b - a);
    return arr[1];
  }
  
  const numberArr = [10, 5, 8, 20, 12];
  console.log("Second largest no from array : ",findSecondLargest(numberArr));

//Program 19 : Check for Anagrams
function areAnagrams(str1, str2) {
    const cleanStr1 = str1.toLowerCase().replace(/[^a-z]/g, "");
    const cleanStr2 = str2.toLowerCase().replace(/[^a-z]/g, "");
  
    return cleanStr1.split("").sort().join("") === cleanStr2.split("").sort().join("");
  }
  
  console.log(areAnagrams("listen", "silent"));

//Program 20 : Calculate the Power of a Number
function power(base, exponent) {
    return Math.pow(base, exponent);
  }
  const n1=2;
  const n2=3;
  console.log("Power of ",n1 ," and ", n2 ," : ",power(2, 3));

//Program 21 : Find the Common Elements in Multiple Arrays
function findCommonElements(arrays) {
    return arrays.reduce((result, currentArray) =>
      result.filter(element => currentArray.includes(element))
    );
  }
  
  const a1 = [1, 2, 3];
  const a2 = [2, 3, 4];
  const a3 = [3, 4, 5];
  console.log("Common Elements from Multiple Arrays : ",findCommonElements([a1, a2, a3]));

//Program 22 : Implement a Bubble Sort Algorithm
function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
  
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }
    } while (swapped);
  
    return arr;
  }
  
  const nos = [5, 1, 4, 2, 8];
  console.log("Bubble sort : ",bubbleSort(nos));
