//sets a default state for the store to return 
const expensesReducerDefaultState = [];

//reducer which describes how the state changes in response to action
//call actions types with cases 
export default (state = expensesReducerDefaultState, action) => {
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
