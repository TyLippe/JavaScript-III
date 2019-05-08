/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
    //no age for sayAge to call for, this.age points to nothing
function sayAge () {
    console.log(`My age is ${this.age}`)
  }
  
  const user = {
    name: 'Ty',
    age: 24
  }

  sayAge()

    //giving the window a global age and then calling this.age will call the global since no age is placed in the sayAge2 method
  window.age = 24
  function sayAge2 () {
    console.log(`My age is ${this.age}`)
  }
  
  const user2 = {
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

// Principle 4

// code example for Explicit Binding