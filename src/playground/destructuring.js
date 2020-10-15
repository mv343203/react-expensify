console.log('destructuring')

const person = {
    //name: 'Max',
    age: 27,
    location: {
        city : "Charleston",
        temp: 87
    }
};

//creates two variable from above
const {name = 'Anonymous', age} = person;

console.log(`${name} is ${age}`)


const {city, temp: temperature} = person.location

if(city && temperature) {
console.log(`it is ${temperature} in ${city}`)
}


//Array Destructuring 
//you can have defaults - dont need to have named 
//variable for each index

const address = ['1299 S Juniper Street', , 'South Carolin', '29492'];

//matches it by postion in the array 
const [street, place = "Cincinncati", state, zip] = address;

console.log(`You are in ${place} which is in the state of ${zip}`)

const numbers = ['1','2', '3']
const [,lucky_number] = numbers;

console.log(`this is my ${lucky_number}`);
