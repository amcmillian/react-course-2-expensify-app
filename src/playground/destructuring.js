// Object destructuring

// const person = {
//     // name: 'AJ',
//     age: 51,
//     location: {
//         city: 'Los Angeles',
//         temp: 75
//     }
// };

// const {name: firstName = "Anonymous", age} = person;

// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;

// if (city && temperature) {
//     console.log( `It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };   

// const {name: publisherName = "Self-published"} = book.publisher

// console.log(publisherName);  // use default val of "Self-published"

// ___________

// Array destructuring

// const address = ['13900 Marquesas Way', 'Marina del Rey', 'California', '90292'];

// const [, city, state='TX'] = address;

// console.log(`You are in ${city} ${state}`);


const item = ['Green Tea Matcha', '$2.00', '$2.50', '$2.75'];

const [itemType, priceSmall, priceMedium = '$3.50', priceLarge] = item;

console.log( `A medium ${itemType} is ${priceMedium}`);