// 1. Write a function that takes in an array of numbers and returns its sum.

function sum(numbers) {
  var result = 0;

  numbers.forEach(function(number) {
    result += number;
  });

  return result;
}

// console.log(sum([1, 2, 3]));

// 2. Write a function that takes in an array of strings and returns the smallest string.

function smallestString(strings) {
  var result = strings[0];
  var index = 1;

  while (index < strings.length) {
    if (strings[index].length < result.length) {
      result = strings[index];
    }

    index += 1;
  }

  return result;
}

// console.log(smallestString(["apple", "orange", "grapes"]));

// 3. Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.

function reversedNumbers(numbers) {
  var result = [];
  
  for (var index = numbers.length - 1; index >= 0; index--) {
    result.push(numbers[index]);
  }

  return result;
}

// console.log(reversedNumbers([1, 2, 3]));

// 4. Write a function that takes in an array of words and returns the number of words that begin with the letter "a".

function aWords(words) {
  var result = 0;

  words.forEach(function(word) {
    if (word[0] === "a") {
      result += 1;
    }
  });

  return result;
}

// console.log(aWords(["apple", "orange", "grapes", "ardvark"]));

// 5. Write a function that takes in an array of strings and joins them together to make a single string separated by commas.

function joinWithCommas(strings) {
  var result = "";
  var index = 0;

  while (index < strings.length) {
    result += strings[index]

    if (index !== strings.length - 1) {
     result += ", ";
    }

    index += 1;
  }

  return result;
}

// console.log(joinWithCommas(["apple", "orange", "grapes"]));

// 6. Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other).

function product(numbers) {
  var result = 1;

  for (index = 0; index < numbers.length; index++) {
    result *= numbers[index];
  }

  return result;
}

// console.log(product([1, 2, 3, 4]));

// 7. Write a function that takes in an array of numbers and returns the two smallest numbers.

function twoSmallestNumbers(numbers) {
  var smallest = numbers[0];
  var secondSmallest = numbers[1];

  var index = 2;

  while (index < numbers.length) {
    if (numbers[index] < secondSmallest) {
      secondSmallest = numbers[index];
    }

    if (secondSmallest < smallest) {
      holder = smallest;
      smallest = secondSmallest;
      secondSmallest = holder;
    }

    index++;
  }

  return [smallest, secondSmallest];
}

// console.log(twoSmallestNumbers([7, 9, -2, 10, 3, 23, 12]));

// 8. Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.

function zeroCount(numbers) {
  var result = 0;

  numbers.forEach(function(number) {
    if (number === 0) {
      result += 1;
    }
  });

  return result;
}

// console.log(zeroCount([9, 32, 0, 2, 0, 12, 5, 2, 0, 1]));

// 9. Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.

function isAllBig(numbers) {
  var result = true;
  
  numbers.forEach(function(number) {
    if (number <= 10) {
      result = false;
    }
  });

  return result;
}

// console.log(isAllBig([11, 23, 32]));

// 10. Write a function that takes in an array of words and returns the number of times the letter "a" appeared in total.

function aCount(words) {
  var result = 0;

  words.forEach(function(word) {
    for (var index = 0; index < word.length; index++) {
      if (word[index] === "a") {
        result += 1;
      }
    }
  });

  return result;
}

// console.log(aCount(["one taffy apple", "an orange", "bunch of grapes"]));