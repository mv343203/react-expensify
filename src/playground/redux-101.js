import { createStore, } from 'redux';

//Action Generators 

//Syntax - if your funnction just returns an object you can use shorthand syntax with ()
//No need to call return 
//{objects are within curly braces}
const incrementCount = ({ incrementBy = 1} = {}) => ({
        type: 'INCREMENT',
        incrementBy
    });

const decrementCount = ({ decrementBy = 1} = {}) => ({
        type: 'DECREMENT',
        decrementBy
});

const setCount = ({ setBy = 0 } = {}) => ({
       type: 'SET',
       setBy
})





//set up variable creating store and then make an object of the creatStore with a default state
//we then call a simple function that just returns the count which we set as a default state of 0
//store tracks changing data overtime
//a function has to be passed into the create store and it must me called righ away


//Reducers 
//1. Reducers are pure functions  
    //output is only determined by the input and doesnt interact outside of scope(state and action)
    //just use state and aciton argument
//2. Never change state or action and just return objects that just change state

    const countReducer =  (state = {count : 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
        return {
              count: state.count + action.incrementBy
          };
        case 'DECREMENT':
        //set up const to determine if typeof action.dcrement by is a number  ? means if it is than use the action.decrement by 
        // number if it is not a number default value to 1
        return {
                count: state.count - action.decrementBy
            };
        // case 'SET':
        //     return{
        //         count: action.count
        //     }
        
        case 'SET':
            return {
                count: action.setBy
            };
        default:
            return state;
    }
}; 


const store = createStore(countReducer);


const unsubscribe = store.subscribe(() =>{
    console.log(store.getState());
})


// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy:5
// });

store.dispatch(incrementCount({incrementBy: 5 }))

// store.dispatch({
//     type: 'INCREMENT'
//   });


store.dispatch(decrementCount({decrementBy: 10}))
  

store.dispatch(setCount({setBy: 10}))

store.dispatch(setCount({setBy: 19}))
  
//   store.dispatch({
//       type: 'SET',
//       count: 101

//   });




