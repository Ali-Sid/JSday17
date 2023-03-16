// Exercise: Level 1

// 1. Store you first name, last name, age, country, city in your browser localStorage.

localStorage.setItem('firstName', 'Ali')
localStorage.setItem('lastName', 'Siddiqui')
localStorage.setItem('age', 21)
localStorage.setItem('country', 'India')
localStorage.setItem('city', 'Hyderabad')

console.log(localStorage.getItem('firstName'))
console.log(localStorage.getItem('lastName'))
console.log(localStorage.getItem('age'))
console.log(localStorage.getItem('country'))
console.log(localStorage.getItem('city'))

/*
Ali
Siddiqui
21
India
Hyderabad
*/

// Exercise: Level 2

// 1. Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = {
    firstName: 'Ali',
    lastName: 'Siddiqui',
    age: 21,
    skills: ['HTML', 'CSS', 'JS', 'NodeJS', 'React'],
    country: 'India',
    enrolled: {
        math: true,
        science: false,
        english: true
    }
}

try {
    localStorage.setItem("student", JSON.stringify(student))
} catch(e) {
    console.log("Error storing student object:", e)
}

try{
    const storedStudent = JSON.parse(localStorage.getItem("student"))

    console.log(storedStudent)
}
catch(e) {
    console.error("Error retrieving student object:", e)
}

/*
{
    firstName: 'Ali',
    lastName: 'Siddiqui',
    age: 21,
    skills: ['HTML', 'CSS', 'JS', 'NodeJS', 'React'],
    country: 'India',
    enrolled: {
        math: true,
        science: false,
        english: true
    }
}
*/

// Exercise: Level 3

// 1. Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personAccount = {
    firstName: 'Ali',
    lastName: 'Siddiqui',
    incomes: [],
    expenses: [],
    totalIncome: function(){
        let total = 0
        this.incomes.forEach(function(income) {
            total += income.amount
        })
        return total
    },
    totalExpense: function(){
        let total = 0
        this.expenses.forEach(function(expense) {
            total += expense.amount
        })
        return total
    },
    accountInfo: function(){
        return `Account Info:
        Name: ${this.firstName} ${this.lastName}
        Total Income: ${this.totalIncome()}
        Total Expenses: ${this.totalExpense()}`
    },
    addIncome: function(desc, amount){
        this.incomes.push({description: desc, amount: amount})
    },
    addExpense: function(desc, amount){
        this.expenses.push({description: desc, amount: amount})
    },
    accountBalance: function(){
        return this.totalIncome() - this.totalExpense()
    }
}

const personStringify = JSON.stringify(personAccount)
localStorage.setItem('personAccount', personStringify)

const personJson = localStorage.getItem('personAccount')
const personParse = JSON.parse(personJson)

console.log(personParse)

/*
{
  "firstName": "Ali",
  "lastName": "Siddiqui",
  "incomes": [],
  "expenses": [],
  "totalIncome": function(){
      let total = 0
      this.incomes.forEach(function(income) {
          total += income.amount
      })
      return total
  },
  "totalExpense": function(){
      let total = 0
      this.expenses.forEach(function(expense) {
          total += expense.amount
      })
      return total
  },
  "accountInfo": function(){
      return `Account Info:
      Name: ${this.firstName} ${this.lastName}
      Total Income: ${this.totalIncome()}
      Total Expenses: ${this.totalExpense()}`
  },
  "addIncome": function(desc, amount){
      this.incomes.push({description: desc, amount: amount})
  },
  "addExpense": function(desc, amount){
      this.expenses.push({description: desc, amount: amount})
  },
  "accountBalance": function(){
      return this.totalIncome() - this.totalExpense()
  }
}
*/
