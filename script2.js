/// Array methods

// const arr = ['a', 'b', 'c', 'd', 'e'];

// const arr2 = ['f', 'g', 'h'];

// 1. slice (non-mutating)
/*
  console.log(arr.slice(1, 4)); // 1st index inclusive, 2nd index non-inclusive

  console.log(arr.slice(-1));
  */

// 2. splice (mutating)

//console.log(arr.splice(1, 3)); // 1st index inclusive, 2nd no of elements to be deleted
/*
  console.log(arr.splice(-1));
  console.log(arr);
  */

// 3. reverse (mutating)
/*
  console.log(arr.reverse());

  console.log(arr);
  */
// 4. concat (non mutating)

/*
  console.log(arr.concat(arr2));
  console.log(arr);

  console.log([...arr, ...arr2]);
  console.log(arr);
  */

// 5. join

//console.log(arr.join('-'));

// 6. at

// console.log(arr.at(-1));
// console.log('Dibya'.at(-1));
// console.log(arr.slice(-1)[0]);
// console.log(arr);

// 7 . Looping Arrays

/*
  const movements = [100, 200, -250, 500, 100, -400];

  console.log('~~~~~ For of ~~~~~');

  for (const mov of movements) {
    if (mov > 0) {
      console.log(`You deposited ${mov}`);
    } else {
      console.log(`You withdrew ${Math.abs(mov)}`);
    }
  }

  // using index

  for (const [i, mov] of movements.entries()) {
    if (mov > 0) {
      console.log(`Movement ${i + 1} : You deposited ${mov}`);
    } else {
      console.log(`Movement ${i + 1} :You withdrew ${Math.abs(mov)}`);
    }
  }

  console.log('~~~~~ For each ~~~~~');

  movements.forEach(function (mov) {
    if (mov > 0) {
      console.log(`You deposited ${mov}`);
    } else {
      console.log(`You withdrew ${Math.abs(mov)}`);
    }
  });

  movements.forEach(function (mov, i, arr) {
    if (mov > 0) {
      console.log(`Movement ${i + 1} : You deposited ${mov}`);
    } else {
      console.log(`Movement ${i + 1} :You withdrew ${Math.abs(mov)}`);
    }

    console.log(arr);
  });
  */

//7.1 forEach with maps
/*
  const currencyMap = new Map([
    ['USD', 'United States Dollar'],
    ['HKD', 'Hong Kong Doller'],
    ['INR', 'Indian National Rupee'],
  ]);

  currencyMap.forEach(function (value, key, map) {
    console.log(`${key} :  ${value}`);
    //console.log(map);
  });
  */
//7.1 forEach with sets
/*
  const currencySet = new Set(['USD', 'INR', 'HKD', 'usd', 'POUND']);

  currencySet.forEach(function (value, key, set) {
    console.log(`${key} :  ${value}`);
    console.log(set);
  });
  */

///////////////////////////////////////
// Coding Challenge #1

/* 
  Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

  Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

  1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
  2. Create an array with both Julia's (corrected) and Kate's data
  3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
  4. Run the function for both test datasets

  HINT: Use tools from all lectures in this section so far 😉

  TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
  TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

  GOOD LUCK 😀
  */

/*
  const dogsJulia = [3, 5, 2, 12, 7];
  const dogsKate = [4, 1, 15, 8, 3];

  const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliacopy = [...dogsJulia.slice(1, -2)];
    const allDogs = [...dogsJuliacopy, ...dogsKate];

    allDogs.forEach(function (dogAge, i) {
      if (dogAge >= 3) {
        console.log(
          `Dog number ${i + 1} is an adult, and is ${dogAge} years old`
        );
      } else {
        console.log(`Dog number ${i + 1} is still a puppy 🐶`);
      }
    });
  };

  checkDogs(dogsJulia, dogsKate);
  */

// 8. Array Methods

// Map , Filter, Reduce

/// 8.1 Map usecase 1

/*
  const movements = [100, 200, -250, 500, 100, -400];

  const toEuro = 1.1;

  // const movementsEuro = movements.map(function (mov) {
  //   return mov * toEuro;
  // });

  const movementsEuro = movements.map(mov => mov * toEuro);

  console.log(...movementsEuro);

  ///using for-of

  const movementsEuro2 = [];
  for (const mov of movements) {
    movementsEuro2.push(mov * toEuro);
  }

  console.log(...movementsEuro2);

  const movementsDescription = movements.map(
    (mov, i) =>
      `Movement ${i + 1} : you ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
        mov
      )}`
  );

  console.log(movementsDescription);
  */

/// 8.1 Map usecase 2

const acc1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const acc2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'basic',
};

const acc3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'basic',
};

const acc4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'premium',
};

const accs = [acc1, acc2, acc3, acc4];

accs.forEach(acc => {
  acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
});

//console.log(acc4.username);

const movements = [100, 200, -250, 500, 100, -400];

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// const withdrew = movements.filter(mov => mov < 0);
// console.log(...deposits);

// console.log(...withdrew);

/// Reduce

// const movements = [100, 200, -250, 500, 100, -400];

// const redumov = movements.reduce(function (acc, mov, i) {
//   //  console.log(`Iteration ${i} : ${acc}`);
//   return acc + mov;
// }, 0);

// //console.log(redumov);

// const lowmov = movements.reduce(function (acc, mov) {
//   if (acc < mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);

// console.log(lowmov);

// Coding Challenge #2

/* 
  Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

  Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

  1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
  2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
  3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
  4. Run the function for both test datasets

  TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
  TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

  GOOD LUCK 😀
  */

// const dogAge = [5, 2, 4, 1, 15, 8, 3];

// const humanAge = dogAge.map(age => (age < 2 ? age * 2 : 16 + age * 4));

// console.log(humanAge); /// 1

// const humanAge18 = humanAge.filter(age => age > 18);

// console.log(humanAge18); ///2

// const avgHumanage = humanAge18.reduce(
//   (acc, age, i, arr) => acc + age / arr.length,
//   0
// );

// console.log(avgHumanage);

///using chain

// const avgHumanageChain = dogAge
//   .map(age => (age < 2 ? age * 2 : 16 + age * 4))
//   .filter(filterage => filterage > 18)
//   .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// console.log(avgHumanageChain);

///find method

// const firstTargetUser = accs.find(acc => acc.owner === 'Sarah Smith');
// console.log(firstTargetUser);

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

//Last withdrawal
/*
  const lastWithdrawamt = movements.findLast(mov => mov < 0);
  const lastWithdraw = movements.findLastIndex(mov => mov < 0);

  console.log(
    `Your last withdrawal was of ${lastWithdrawamt} in ${
      movements.length - lastWithdraw
    } transactions ago`
  );
  */

/// flat and flatmap

// challage is to list all the movements across all the accounts in an array

/*
  const movementsArr = accs.map(acc => acc.movements).flat();
  // const movementsArr = accs.flatMap(acc => acc.movemensts);
  console.log(movementsArr);
  */

// Coding Challenge #4

/*
  This time, Julia and Kate are studying the activity levels of different dog breeds.

  YOUR TASKS:
  1. Store the the average weight of a "Husky" in a variable "huskyWeight"
  2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
  3. Create an array "allActivities" of all the activities of all the dog breeds
  4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
  5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
  6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
  7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

  BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

  TEST DATA:
  */

/*

  const breeds = [
    {
      breed: 'German Shepherd',
      averageWeight: 10,
      activities: ['fetch', 'swimming'],
    },
    {
      breed: 'Dalmatian',
      averageWeight: 24,
      activities: ['running', 'fetch', 'agility'],
    },
    {
      breed: 'Labrador',
      averageWeight: 28,
      activities: ['swimming', 'fetch'],
    },
    {
      breed: 'Beagle',
      averageWeight: 12,
      activities: ['digging', 'fetch'],
    },
    {
      breed: 'Husky',
      averageWeight: 26,
      activities: ['running', 'agility', 'swimming'],
    },
    {
      breed: 'Bulldog',
      averageWeight: 36,
      activities: ['sleeping'],
    },
    {
      breed: 'Poodle',
      averageWeight: 18,
      activities: ['agility', 'fetch'],
    },
  ];

  // 1. Task 1

  const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight;

  console.log(huskyWeight);

  // 2. Task 2

  const type2 = breeds.find(
    breed =>
      breed.activities.includes('running') && breed.activities.includes('fetch')
  ).breed;

  console.log(type2);

  //3. Task 3

  const allActivities = breeds.map(breed => breed.activities).flat();

  //4. Task 4
  console.log(new Set(allActivities));

  //5.  Task 5

  const swimmingAdjacent = breeds
    .filter(breed => breed.activities.includes('swimming'))
    .flatMap(breed => breed.activities)
    .filter(activity => activity != 'swimming');

  console.log(new Set(swimmingAdjacent));

  // 6.

  const allAvg10 = breeds.every(breed => breed.averageWeight >= 10);
  console.log(allAvg10);

  //  7

  const anyActive = breeds.some(breed => breed.activities.length >= 3);

  console.log(anyActive);
  */

////Sorting using sort() method

// 1. sort() converts the array elements to String , then sort it, so works perfectly fine with string arrays

// const strArr = [
//   'Dibya',
//   'Manash',
//   'Bedanta',
//   'Palash',
//   'Pabitra',
//   'Ruhan',
//   'Bijit',
//   'Hirok',
//   'Maitraya',
// ];

// console.log(strArr.sort());

//2. To use sort for Numbers , a callback function also needs to be called.

// console.log(movements);

// console.log(movements.sort());

/// a, b are 2 consucutive number elements in the array

// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// movements.sort((a, b) => a - b);

// console.log(movements);

///Array Grouping
/*
  console.log(movements);

  const groupedMovements = Object.groupBy(movements, movement =>
    movement > 0 ? 'deposit' : 'withdrawal'
  );

  console.log(groupedMovements);

  const groupedByActivity = Object.groupBy(accs, acc => {
    const movementLenght = acc.movements.length;

    if (movementLenght >= 8) return 'very active';
    if (movementLenght >= 4) return 'active';
    if (movementLenght >= 1) return 'moderate';

    return 'inactive';
  });

  console.log(groupedByActivity);

  const groupByType = Object.groupBy(accs, acc => acc.type);
  console.log(groupByType);
  */

// Fill Arrays

/*
  const x = new Array(7);

  x.fill(2, 0, 3);

  console.log(x);

  ///Array.from

  const arr = Array.from({ length: 5 }, (_, i) => i + 1);

  console.log(arr);
  */

// Non-destructive method alternative

//toReversed , toSorted , toSpliced ,  with

// console.log(movements);
// console.log(movements.slice().reverse());
// console.log(movements);

// console.log(movements);
// console.log(movements.toReversed());
// console.log(movements);

// console.log(movements);
// console.log(movements.toSorted((a, b) => a - b));
// console.log(movements);

// console.log(movements);
// console.log(movements.with(2, 8000));
// console.log(movements);

///Array Method Practice

// Coding Challenge #5

/* 
  Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

  - Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
  - Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
  - Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

  YOUR TASKS:
  1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
  2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
  3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
  4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
  5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
  6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
  7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
  8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
  9. Group the dogs by the number of owners they have
  10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

  HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
  HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

  TEST DATA:
  const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
    { weight: 18, curFood: 244, owners: ['Joe'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
  ];

  GOOD LUCK 😀
  */

/*

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1.
dogs.forEach(dog => {
  dog.recFood = Math.round(dog.weight ** 0.75 * 28, 2);
});

// console.log(dogs);

//2

const sarahDogEat = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(sarahDogEat.recFood);
// if (
//   sarahDogEat.curFood > sarahDogEat.recFood
//     ? console.log('Too Much')
//     : console.log('Too less')
// );

//3.

const { ownersTooMuch, ownersTooLittle } = Object.groupBy(dogs, dog =>
  dog.curFood > dog.recFood ? 'ownersTooMuch' : 'ownersTooLittle'
);

//4.

const TooLittle = ownersTooLittle.flatMap(arr => arr.owners);

let statement = '';
const len = TooLittle.length;

for (const owner of TooLittle) {
  if (TooLittle.indexOf(owner) < len - 1) {
    statement = statement + `${owner} and `;
  } else {
    statement = statement + ` ${owner}'s dogs eat too little!`;
  }
}

console.log(statement);
console.log(TooLittle.length);

console.log(TooLittle.indexOf('Bob'));
*/
