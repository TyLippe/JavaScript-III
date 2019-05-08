/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding, 'this' will call on the global element when no other rules are met
* 2. Implicit Binding, 'this' will act as the object and can be called on from inside function to log elements
* 3. New Binding, 'this' can be put into a generic function with place holders. Outside of function we can place a 'new' to tell the function what elements will be changed to.
* 4. Explicit Binding, 'this' will take place when we use functions like 'call', 'apply', or 'bind'. Element can be placed outside of function
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
    //no age for sayAge to call for, this.age points to nothing
function sayAge () {
    console.log(`My age is ${this.age}`)
  }
  
  const winUser = {
    name: 'Ty',
    age: 24
  }

  sayAge()

    //giving the window a global age and then calling this.age will call the global since no age is placed in the sayAge2 method
  window.age = 24
  function sayAge2 () {
    console.log(`My age is ${this.age}`)
  }
  
  const winUser2 = {
    name: 'Ty',
    age: 24
  }

  sayAge2()

// Principle 2

// code example for Implicit Binding
    //stole from internet to mess with
// const user = {
//     name: 'Ty',
//     age: 27,
//     greet() {
//       console.log(`Hello, my name is ${this.name}`)
//     }
//   }
//   user.greet()

    //mine
    const earth = {
       name: 'Earth',
       order: 3,
       size: '3958.8 mi',
       facts(){
           console.log(`${this.name} is ${this.size} and is planet number ${this.order}`);
       }
    }
earth.facts()

// Principle 3

// code example for New Binding
function newUser(name, age, location) { //can build a User that can be changed without ever having to touch the function
    this.name = name
    this.age = age
    this.location = location
    console.log(`${this.name}, ${this.age}, ${this.location}`) 
}
  
  const me = new newUser('Ty', 24, 'Orlando')
  const wife = new newUser('Dev', 24, 'Orlando')
 

// Principle 4

// code example for Explicit Binding
function sayAge () { //using the .call we can tell the function to use a variable that we can have outside the function
    console.log(`My age is ${this.age}`)
  }
  
  const exUser = {
    name: 'Ty',
    age: 24
  }
  
  sayAge.call(exUser)