// using expect library
const expect = require('expect');

// use reducer function as example.
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

// scenario 1: type = increment
expect(
    counter(0, { type: 'INCREMENT' })
).toEqual(1);

// scenario 2: type = decrement
expect(
    counter(1, { type: 'DECREMENT' })
).toEqual(0);

// scenario 3: type is not in your expect. 
expect(
    counter(0, { type: 'SOMETHING' })
).toEqual(0);

// scenario 4: type is empty object and state is undefined.
expect(
    counter(undefined, {})
).toEqual(0);

// if all tests passed, you will see this message.
console.log('All tests passed!');
