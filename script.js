'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov} €</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

const updateMovements = function (acc) {
  //Display Movements
  displayMovements(acc.movements);

  // Display Balance

  calcDisplaybalance(acc);

  // Display Summary
  calcDisplaySummary(acc);
};

const calcDisplaybalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance} €`;
};

const calcDisplaySummary = function (acc) {
  const inBalance = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${inBalance} €`;

  const outBalance = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outBalance)} €`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int > 1)
    .reduce((acc, finalInt) => acc + finalInt);

  labelSumInterest.textContent = `${interest} €`;
};

///Login

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  //verify account name

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  //verify pin

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('Logged In');

    //Display UI and Message
    labelWelcome.textContent = `Welcome Back ! ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    //clear credentials
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.blur();
    inputLoginPin.blur();

    //Display Movements
    // Display Balance
    // Display Summary

    updateMovements(currentAccount);
  }
});

//Transfer money

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Tranfer Money');

  const transferAmt = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  console.log(transferAmt, receiverAcc);

  //validations
  if (
    transferAmt > 0 &&
    currentAccount.balance > transferAmt &&
    receiverAcc &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //movements
    currentAccount.movements.push(-transferAmt);
    receiverAcc.movements.push(transferAmt);
    inputTransferAmount.value = inputTransferTo.value = 0;
    updateMovements(currentAccount);
  }
});

//Loan

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateMovements(currentAccount);
    inputLoanAmount.value = '';
  }
});

///Close account

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Account Close Initiated');

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    //Display UI and Message
    labelWelcome.textContent = `Good Bye ! ${
      currentAccount.owner.split(' ')[0]
    }`;
    accounts.splice(index, 1);
  }
  containerApp.style.opacity = 0;
  inputCloseUsername.value = inputClosePin.value = '';
});

// labelBalance.addEventListener('click', function () {
//   const movementUI = Array.from(document.querySelectorAll('.movements__value'));
//   console.log(movementUI.map(el => Number(el.textContent.replace('€', ''))));
// });
