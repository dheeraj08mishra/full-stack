const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// double the values of the array
const double = arr.map((num) => num * 2);

//ES5 way
let DOUBLE = arr.map(function (num) {
  return num * 2;
});

/// using HOF
function doubleNum(num) {
  return num * 2;
}

function tripleNum(num) {
  return num * 3;
}

function squareNum(num) {
  return num * num;
}

function cubeNum(num) {
  return num * num * num;
}
function halfNum(num) {
  return num / 2;
}
function binaryNum(num) {
  return num.toString(2);
}
const Calculate = function (arr, logic) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(logic(arr[i]));
  }
  return output;
};
console.log(Calculate(arr, doubleNum));
console.log(Calculate(arr, tripleNum));
console.log(Calculate(arr, squareNum));
console.log(Calculate(arr, cubeNum));
console.log(Calculate(arr, halfNum));
console.log(Calculate(arr, binaryNum));

// filter the values of the array
const even = arr.filter(function (num) {
  return num % 2 === 0;
});
console.log(even);

const odd = arr.filter((x) => x % 2 !== 0);
console.log(odd);

const filterNum = function (arr, logic) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (logic(arr[i])) {
      output.push(arr[i]);
    }
  }
  return output;
};

console.log(
  filterNum(arr, function greaterThan5(num) {
    return num > 5;
  })
);

// reduce the values of the array

const sum = arr.reduce((acc, num) => acc + num, 0);

//ES5 way
let SUM = arr.reduce(function (acc, num) {
  return acc + num;
}, 0);

const reduceNum = function (arr, logic, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < arr.length; i++) {
    acc = logic(acc, arr[i]);
  }
  return acc;
};

console.log(
  reduceNum(
    arr,
    function (acc, num) {
      return acc + num;
    },
    0
  )
);

console.log(SUM);
console.log(sum);

/// using map
const user = [
  { name: "john", lastName: "col", age: 25 },
  { name: "doe", lastName: "pol", age: 30 },
  { name: "john1", lastName: "coln", age: 25 },
  { name: "smith", lastName: "dol", age: 35 },
];
const output = user.map((user) => {
  return user.name + " " + user.lastName;
});
console.log(output);

// Es5 way

let OUTPUT = user.map(function (user) {
  return user.name + " " + user.lastName;
});
console.log(OUTPUT);

let findAgeMap = user.map(function (user) {
  return user.age;
});
let map = new Map();
for (let i = 0; i < findAgeMap.length; i++) {
  if (map.has(findAgeMap[i])) {
    map.set(findAgeMap[i], map.get(findAgeMap[i]) + 1);
  } else {
    map.set(findAgeMap[i], 1);
  }
}
console.log(findAgeMap);
console.log(map);

const findAge = user.reduce((acc, user) => {
  if (acc[user.age]) {
    acc[user.age]++;
  } else {
    acc[user.age] = 1;
  }
  return acc;
}, {});
console.log(findAge);

/// using reduce to find people with age >27

const findAgeReduce = user.reduce((acc, user) => {
  if (user.age > 27) {
    acc.push(user.name + " " + user.lastName);
  }
  return acc;
}, []);
console.log(findAgeReduce);
