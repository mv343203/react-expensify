import {v4 as uuid} from 'uuid';


//this creates an action to interact with store with default properties 
//names the type of action
//this actions is stating to add the expense to the store 
//use the default properties listed first if nothing is provided
//we will be adding the object of expense on the array 
export const addExpense = (
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
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
