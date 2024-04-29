       // 1-masala
// function getInitialOdds(n) {
//     let result = [];
//     let currentOdd = 1;
//     for (let i = 0; i < n; i++) {
//         result.push(currentOdd);
//         currentOdd += 2;
//     }
//     return result;
// }

// console.log(getInitialOdds(5)); 




      //  2-masala
    //   function getEvenReverse(arr) {
    //     let evenIndexes = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         if (i % 2 === 0) {
    //             evenIndexes.push(arr[i]);
    //         }
    //     }
    //     return evenIndexes.reverse();
    // }
    // let arr = [4, 5, 7, 8, 6, 9];
    // console.log(getEvenReverse(arr));




    // 3-masala
    // function customOutput(arr) {
    //     let result = [];
    //     let n = arr.length;
    //     for (let i = 0; i < n; i++) {
    //         if (i % 2 === 0) {
    //             result.push(arr[i / 2]);
    //         } else {
    //             result.push(arr[n - Math.floor(i / 2) - 1]);
    //         }
    //     }
    //     return result;
    // }
    // let arr = [4, 5, 7, 8, 6, 9];
    // console.log(customOutput(arr));




    // 4-masala
    // function rangeSum(arr, K, L) {
    //     let sum = 0;
    //     for (let i = K; i <= L; i++) {
    //         sum += arr[i];
    //     }
    //     return sum;
    // }
    // let arr = [1, 6, 9, 5, 8, 10, 15];
    // console.log(rangeSum(arr, 2, 5)); 




    // 5-masala
//     let arr = [4, 5, 7, 8, 6, 9];
// let evenIndexes = [];
// let oddIndexes = [];

// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 === 0) {
//     evenIndexes.push(arr[i]);
//   } else {
//     oddIndexes.push(arr[i]);
//   }
// }
// let result = evenIndexes.concat(oddIndexes.reverse());
// console.log(result.join(' '));




    //  6-masala
  //   function siljituv(arr) {
  //     let temp = arr[0];
  //     for (let i = 0; i < arr.length - 1; i++) {
  //         arr[i] = arr[i + 1];
  //     }
  //     arr[arr.length - 1] = temp;
  //     return arr;
  // }
  // let input = [1, 5, 8, 9, 10];
  // let output = siljituv(input);
  // console.log(output);
  



      // Uyga masala 
      // 1-masala
    //   function getLevel2(n) {
    //     let result = [];
    //     let value = 2;
    //     for (let i = 0; i < n; i++) {
    //         result.push(value);
    //         value *= 2;
    //     }
    //     return result;
    // }
    
    // let input = 5;
    // let output = getLevel2(input);
    // console.log(output);




    //2-masala
  //   function generateArray(n, A, B) {
  //     let result = [A, B];
  //     let sum = A + B;
  //     for (let i = 2; i < n; i++) {
  //         result.push(sum);
  //         sum += result[i - 1];
  //     }
  //     return result;
  // }
  // let n = 5;
  // let A = 2;
  // let B = 3;
  // let output = generateArray(n, A, B);
  // console.log(output);
  



  // 3-masala
//   function reverseArray(arr) {
//     let reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversed.push(arr[i]);
//     }
//     return reversed;
// }

// let input = [1, 2, 3, 4, 5];
// let output = reverseArray(input);
// console.log(output);




// 4-masala
// function findAndCountOdds(arr) {
//   let odds = [];
//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 !== 0) {
//           odds.push(arr[i]);
//       }
//   }
//   console.log(odds.join(' '));
//   console.log("toqlar soni =", odds.length);
// }

// let input = [4, 5, 7, 8, 6, 9];
// findAndCountOdds(input);




// 5-masala
// function printEvenOddReversed(arr) {
//   let evens = [];
//   let odds = [];
//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//           evens.push(arr[i]);
//       } else {
//           odds.push(arr[i]);
//       }
//   }
//   console.log(evens.join(' '), odds.reverse().join(' '));
// }
// let input = [4, 5, 7, 8, 6, 9];
// printEvenOddReversed(input);





//6-masala
// function printEvenIndexedElements(arr) {
//   for (let i = 0; i < arr.length; i += 2) {
//       console.log(arr[i]);
//   }
// }
// let input = [1, 5, 8, 9, 10, 12];
// printEvenIndexedElements(input);




// 7-masala
// function printOddIndexedElements(arr) {
//   for (let i = arr.length - 1; i >= 0; i -= 2) {
//       console.log(arr[i]);
//   }
// }
// let input = [1, 5, 8, 9, 10, 12];
// printOddIndexedElements(input);




// 8-masala
// function printEvenOddIndexedElements(arr) {
//   let evens = [];
//   let odds = [];
//   for (let i = 0; i < arr.length; i++) {
//       if (i % 2 === 0) {
//           evens.push(arr[i]);
//       } else {
//           odds.push(arr[i]);
//       }
//   }
//   console.log(evens.join(' '), odds.join(' '));
// }
// let input = [1, 5, 8, 9, 10, 12];
// printEvenOddIndexedElements(input);




// 9-masala
// function printOddThenEvenIndexedElements(arr) {
//   let odds = [];
//   let evens = [];
//   for (let i = 1; i < arr.length; i += 2) {
//       odds.push(arr[i]);
//   }
//   for (let i = arr.length - 2; i >= 0; i -= 2) {
//       evens.push(arr[i]);
//   }
//   console.log(odds.join(' '), evens.join(' '));
// }
// let input = [1, 5, 8, 9, 10, 12];
// printOddThenEvenIndexedElements(input);




// 10-masala
// function printPattern(arr) {
//   let result = [];
//   let n = arr.length;
//   let mid = Math.floor(n / 2);

//   result.push(arr[0]);
//   for (let i = 1; i <= mid; i++) {
//       if (i % 2 !== 0) {
//           result.push(arr[i]);
//           result.push(arr[n - i]);
//       }
//   }
//   if (n % 2 === 0) {
//       result.push(arr[mid]);
//   }
//   console.log(result.join(' '));
// }
// let input = [1, 5, 8, 9, 10, 12];
// printPattern(input);




// 11-masala
// function rangeOutSum(arr, K, L) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//       if (i < K || i > L) {
//           sum += arr[i];
//       }
//   }
//   return sum;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let K = 2;
// let L = 7;
// let result = rangeOutSum(arr, K, L);
// console.log(result);




// 12-masala
// function separateTruthyFalsy(arr) {
//   let truthy = [];
//   let falsy = [];
//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i]) {
//           truthy.push(arr[i]);
//       } else {
//           falsy.push(arr[i]);
//       }
//   }
//   return { truthy, falsy };
// }
// let input = [10, false, "", "Abdulaziz", null];
// let { truthy, falsy } = separateTruthyFalsy(input);
// console.log("Truthy:", truthy);
// console.log("Falsy:", falsy);




// 13-masala 
// function getOddMin(arr) {
//   let min = arr[0];
//   for (let i = 2; i < arr.length; i += 2) {
//       if (arr[i] < min) {
//           min = arr[i];
//       }
//   }
//   return min;
// }

// let arr = [5, 2, 8, 3, 6, 9, 1, 7];
// let result = getOddMin(arr);
// console.log(result);




// 14-masala
// function getEvenMax(arr) {
//   let max = arr[1];
//   for (let i = 3; i < arr.length; i += 2) {
//       if (arr[i] > max) {
//           max = arr[i];
//       }
//   }
//   return max;
// }
// let arr = [5, 2, 8, 3, 6, 9, 1, 7];
// let result = getEvenMax(arr);
// console.log(result);




// 15-masala
//function findLastLocalMaxIndex(arr) {
//   for (let i = arr.length - 2; i > 0; i--) {
//       if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//           return i;
//       }
//   }
//   return -1;
// }
// let arr = [1, 3, 5, 4, 2, 7, 6];
// let result = findLastLocalMaxIndex(arr);
// console.log(result);




// 16-masala
// function findClosestToR(arr, R) {
//   let closest = arr.reduce(function(prev, curr) {
//       return Math.abs(curr - R) < Math.abs(prev - R) ? curr : prev;
//   });
//   return closest;
// }

// let arr = [1, 3, 5, 7, 9, 11];
// let R = 8;
// let result = findClosestToR(arr, R);
// console.log(result);




// 17-masala
// function findLargestSumPair(arr) {
//   let largestSum = arr[0] + arr[1];
//   let pair = [arr[0], arr[1]];
//   for (let i = 1; i < arr.length - 1; i++) {
//       if (arr[i] + arr[i + 1] > largestSum) {
//           largestSum = arr[i] + arr[i + 1];
//           pair = [arr[i], arr[i + 1]];
//       }
//   }
//   return pair;
// }
// let arr = [1, 3, 5, 7, 9, 11];
// let result = findLargestSumPair(arr);
// console.log(result);




// 18-masala
// function findDuplicateIndices(arr) {
//   let indices = [];
//   for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//           if (arr[i] === arr[j] && !indices.includes(i) && !indices.includes(j)) {
//               indices.push(i);
//               indices.push(j);
//           }
//       }
//   }
//   return indices;
// }
// let arr = [1, 3, 5, 7, 3, 9, 11];
// let result = findDuplicateIndices(arr);
// console.log(result);




// 19-masala
// function findMostFrequent(arr) {
//   let mostFrequentElement;
//   let maxCount = 0;
//   for (let i = 0; i < arr.length; i++) {
//       let count = 0;
//       for (let j = 0; j < arr.length; j++) {
//           if (arr[i] === arr[j]) {
//               count++;
//           }
//       }
//       if (count > maxCount) {
//           maxCount = count;
//           mostFrequentElement = arr[i];
//       }
//   }
//   return { element: mostFrequentElement, count: maxCount };
// }
// let arr = [1, 3, 5, 7, 3, 9, 11, 1, 5, 7, 5];
// let result = findMostFrequent(arr);
// console.log("Element:", result.element, "Count:", result.count);




// 20-masala
// function getEvenNumbers(arr) {
//   let b = arr.filter(function(num) {
//       return num % 2 === 0;
//   });
//   console.log("Length:", b.length, "Elements:", b);
//   return b;
// }
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let b = getEvenNumbers(a);




// 21-masala
// function increaseByK(arr, k) {
//   let result = arr.map(function(num) {
//       return num + k;
//   });
//   return result;
// }
// let a = [1, 2, 3, 4, 5];
// let k = 3;
// let result = increaseByK(a, k);
// console.log(result);




// 22-masala
// function swapFirstHalfWithSecondHalf(arr) {
//   let half = arr.length / 2;
//   for (let i = 0; i < half; i++) {
//       let temp = arr[i];
//       arr[i] = arr[i + half];
//       arr[i + half] = temp;
//   }
//   return arr;
// }
// let arr = [1, 2, 3, 4, 5, 6];
// let result = swapFirstHalfWithSecondHalf(arr);
// console.log(result);




// 23-masala
// function reverseArray(arr) {
//   let reversed = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//       reversed.push(arr[i]);
//   }
//   return reversed;
// }
// let arr = [1, 2, 3, 4, 5];
// let reversedArr = reverseArray(arr);
// console.log(reversedArr);




// 24-masala
// function replaceMinMaxWithZero(arr) {
//   let minIndex = 0;
//   let maxIndex = 0;
//   for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < arr[minIndex]) {
//           minIndex = i;
//       }
//       if (arr[i] > arr[maxIndex]) {
//           maxIndex = i;
//       }
//   }
//   arr[minIndex] = 0;
//   arr[maxIndex] = 0;
//   return arr;
// }
// let arr = [3, 1, 5, 2, 4];
// let result = replaceMinMaxWithZero(arr);
// console.log(result);




// 25-masala
// function rotateLeft(arr) {
//   let temp = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//       arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = temp;
//   return arr;
// }
// let arr = [1, 2, 3, 4, 5];
// let result = rotateLeft(arr);
// console.log(result);




// 26-masala
// function deleteElementWithIndex(arr, k) {
//   arr.splice(k, 1);
//   return arr;
// }

// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// let result = deleteElementWithIndex(arr, k);
// console.log(result);




// 27-masala
// function deleteElementsInRange(arr, k, m) {
//   arr.splice(k, m - k + 1);
//   return arr;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let k = 2;
// let m = 5;
// let result = deleteElementsInRange(arr, k, m);
// console.log("Length:", result.length, "Elements:", result);




// 28-masala
// function deleteOneDuplicate(arr) {
//   let seen = {};
//   for (let i = 0; i < arr.length; i++) {
//       if (seen[arr[i]]) {
//           arr.splice(i, 1);
//           break; // faqat bir xil qo'shni o'chiramiz
//       } else {
//           seen[arr[i]] = true;
//       }
//   }
//   return arr;
// }
// let arr = [1, 2, 3, 4, 2, 5, 6, 7, 7, 8];
// let result = deleteOneDuplicate(arr);
// console.log(result);



// 29-masala
// function getElementsOneTime(arr) {
//   let frequency = {};
//   for (let i = 0; i < arr.length; i++) {
//       let element = arr[i];
//       if (frequency[element]) {
//           frequency[element]++;
//       } else {
//           frequency[element] = 1;
//       }
//   }
//   let result = [];
//   for (let key in frequency) {
//       if (frequency[key] === 1) {
//           result.push(parseInt(key));
//       }
//   }
//   return result;
// }
// let arr = [1, 5, 6, 1, 5, 7, 2];
// let result = getElementsOneTime(arr);
// console.log(result);




// 30-masala
// function searchAllElements(arr, k) {
//   let indices = [];
//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === k) {
//           indices.push(i);
//       }
//   }
//   return indices;
// }
// let arr = [1, 5, 6, 5, 2, 5, 7];
// let k = 5;
// let result = searchAllElements(arr, k);
// console.log(result);
