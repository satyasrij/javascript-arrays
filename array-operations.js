function sumArray(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4]));

function sortStrings(strings) {
  var sortedArray = strings.slice();
  sortedArray.sort();
  return sortedArray;
}

console.log(sortStrings(["apple", "banana", "cherry"]));

function filterEvenNumbers(numbers) {
  var evenNumbers = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5]));

function searchTargetString(strings, target) {
  for (var i = 0; i < strings.length; i++) {
    if (strings[i] === target) {
      return true;
    }
  }
  return false;
}

console.log(searchTargetString(["apple", "banana", "cherry"], "banana"));

function capitalizeNames(names) {
  var capitalizedNames = [];
  for (var i = 0; i < names.length; i++) {
    var capitalized = names[i].charAt(0).toUpperCase() + names[i].slice(1);
    capitalizedNames.push(capitalized);
  }
  return capitalizedNames;
}

console.log(capitalizeNames(["john", "mary", "adam"]));

function reverseNumbers(numbers) {
  var reversedNumbers = [];
  for (var i = numbers.length - 1; i >= 0; i--) {
    reversedNumbers.push(numbers[i]);
  }
  return reversedNumbers;
}

console.log(reverseNumbers([1, 2, 3, 4]));

function filterPeopleByAge(people, age) {
  var filteredPeople = [];
  for (var i = 0; i < people.length; i++) {
    if (people[i].age > age) {
      filteredPeople.push(people[i]);
    }
  }
  return filteredPeople;
}

var people = [
  { name: "John", age: 30 },
  { name: "Mary", age: 25 },
  { name: "Adam", age: 35 },
];

console.log(filterPeopleByAge(people, 30));
function reverseStrings(strings) {
  var reversedStrings = [];
  for (var i = 0; i < strings.length; i++) {
    var reversed = "";
    for (var j = strings[i].length - 1; j >= 0; j--) {
      reversed += strings[i][j];
    }
    reversedStrings.push(reversed);
  }
  return reversedStrings;
}

console.log(reverseStrings(["hello", "world"]));

function findNegativeNumbers(numbers) {
  var negativeNumbers = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      negativeNumbers.push(numbers[i]);
    }
  }
  return negativeNumbers;
}

console.log(findNegativeNumbers([-1, 2, -3, 4, -5]));

function removeFalsyValues(array) {
  var truthyValues = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      truthyValues.push(array[i]);
    }
  }
  return truthyValues;
}

console.log(
  removeFalsyValues([0, false, null, "", undefined, NaN, 1, "hello"])
);

function replaceVowelsWithAsterisks(string) {
  var vowels = ["a", "e", "i", "o", "u"];
  var result = "";
  for (var i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i].toLowerCase()) !== -1) {
      result += "*";
    } else {
      result += string[i];
    }
  }
  return result;
}

console.log(replaceVowelsWithAsterisks("Hello, World!"));

function separateOddEvenNumbers(numbers) {
  var oddNumbers = [];
  var evenNumbers = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    } else {
      oddNumbers.push(numbers[i]);
    }
  }
  return [oddNumbers, evenNumbers];
}

console.log(separateOddEvenNumbers([1, 2, 3, 4, 5]));

function countFalsyValues(array) {
  var falsyCount = 0;
  for (var i = 0; i < array.length; i++) {
    if (!array[i]) {
      falsyCount++;
    }
  }
  return falsyCount;
}

console.log(countFalsyValues([0, false, null, "", undefined, NaN, 1, "hello"]));

function concatenateStrings(strings) {
  var result = "";
  for (var i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < strings.length - 1) {
      result += "-";
    }
  }
  return result;
}

console.log(concatenateStrings(["Hello", "World"]));
function findPrimeNumbers(numbers) {
  var primeNumbers = [];
  for (var i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
      primeNumbers.push(numbers[i]);
    }
  }
  return primeNumbers;
}

console.log(findPrimeNumbers([1, 2, 3, 4, 5]));

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7));

function isPalindrome(string) {
  var reversedString = "";
  for (var i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return string === reversedString;
}

console.log(isPalindrome("radar"));

function countOddEvenNumbers(numbers) {
  var count = {
    odd: 0,
    even: 0,
  };
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      count.even++;
    } else {
      count.odd++;
    }
  }
  return count;
}
console.log(countOddEvenNumbers([1, 2, 3, 4, 5]));

function countCharacters(string) {
  var characterCount = {};
  for (var i = 0; i < string.length; i++) {
    var character = string[i];
    if (characterCount[character]) {
      characterCount[character]++;
    } else {
      characterCount[character] = 1;
    }
  }
  return characterCount;
}

console.log(countCharacters("hello"));
