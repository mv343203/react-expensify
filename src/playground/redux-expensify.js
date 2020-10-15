import { createStore, combineReducers } from 'redux';
import {v4 as uuid} from 'uuid';


//this creates an action to interact with store with default properties 
//names the type of action
//this actions is stating to add the expense to the store 
//use the default properties listed first if nothing is provided
//we will be adding the object of expense on the array 
const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0,
        createdAt = 0
      } = {}
    ) => ({
         type: 'ADD_EXPENSE',
         expense: {
           id: uuid(),
           description,
           note,
           amount,
           createdAt
    }
});

//creates action to interact with store by fetching id property
//fetches the id property  
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//action function with text as a parameter and default of empty text
//if no text provided  - action type - then text = text 
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
}); 



const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const sortByAmount = () => ({
        type: 'SORT_BY_AMOUNT'
});




const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});



//sets a default state for the store to return 
const expensesReducerDefaultState = [];

//reducer which describes how the state changes in response to action
//call actions types with cases 
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            //returns new array with subset values
            //if function returns true item will be kept
            //if false item will be removed
            //we destructured the expense array and just got its id
            //if id does not = action id then id will be kept
            //if = then id is removed by filter
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            //iterates over array in expenses
            return state.map((expense) => {
                //checks to match ids and if no changes made
                if (expense.id === action.id) {
                    //if there is a match spread operator and update expense with updates
                    return {
                        ...expense,
                        ...action.updates
                    };

                } else {
                    return expense;
                };
            }); 
        default:
            return state;

    }
};
//creates an object with default state values 
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', 
    startDate: undefined,
    endDate: undefined
};

//reducer for filters which describe changes taking place when actions are initiated
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                 startDate: action.startDate
            };       
            
        case 'SET_END_DATE':
            return {
                ...state,
                 endDate: action.endDate
            }; 

        default:
            return state;
    }
};

//Get visible expenses
//expenses is the array it will sorting 
//filtering is what willbe applied - destructured the filtering objectit to get properties
//using timestamps which start at 1970 January 1


const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
  };



//creates a store 
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
    );

//watches the changes to the store     
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

//sends actions to the store
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount:500})); 

//store.dispatch(setTextFilter('e'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(-2000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(400));
// store.dispatch(setEndDate());



const demoState = {
    //using object within the expense array because we want to track multiple things 
    expenses: [{
      id: 'ashfdkdjsfkj',
      description: 'January Rent',
      note: 'This was final payment for address',
      amount: 54500,
      createdAt: 0
    }],
    // these are filters we will allow users to apply
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }   
};

