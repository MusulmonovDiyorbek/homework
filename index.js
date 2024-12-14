// ******************************1 misol********************************
// const drinks = [
//     { name: "lemonade", price: 15000 },
//     { name: "apple", price: 10000 }
//   ];
//   function sortDrinksByPrice(drinks) {
//     return drinks.sort((a, b) => a.price - b.price);
//   }
//   const sortedDrinks = sortDrinksByPrice(drinks);
//   console.log(sortedDrinks);





// *********************************2 misol**************************************
// function objectToArray(obj) {
//     return Object.entries(obj);
//   }
//   const userObject = {
//     name: "Diyorbek",
//     age: 18,
//     city: "Toshkent"
//   };
//   const result = objectToArray(userObject);
//   console.log(result);





// ********************************3 misol*********************************
// function getUserNames(users) {
//     return users.map(({ name }) => name);
//   }
//   const users = [
//     { name: "Diyorbek", age: 18 },
//     { name: "Ozodbek", age: 18 },
//     { name: "Azamat", age: 19 }
//   ];
//   const names = getUserNames(users);
//   console.log(names);







// ************************************4 misol****************************************
// function afterNYears(people, n) {
//     const years = Math.abs(n);
//     const updatedAges = {};
//     for (const person in people) {
//       updatedAges[person] = people[person] + years;
//     }
//    return updatedAges;
//   }
//   const people = {
//     Diyorbek: 18,
//     Ozodbek: 18,
//     Azamat: 19
//   };
//   const n = 6;
//   const updatedPeople = afterNYears(people, n);
//   console.log(updatedPeople);
