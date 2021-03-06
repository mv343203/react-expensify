import {v4 as uuid} from 'uuid';
import database from '../firebase/firebase';


//this creates an action to interact with store with default properties 
//names the type of action
//this actions is stating to add the expense to the store 
//use the default properties listed first if nothing is provided
//we will be adding the object of expense on the array 
export const addExpense = (expense) => ({
         type: 'ADD_EXPENSE',
         expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
        description = '', 
        note = '', 
        amount = 0,
        createdAt = 0
     } = expenseData;
     const expense = { description, note, amount, createdAt };

    return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
         dispatch(addExpense({
           id: ref.key,
           ...expense  
         }));
     });
    };
};

//creates action to interact with store by fetching id property
//fetches the id property  
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }));
        });
    };
};

//EDIT_EXPENSE

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense= (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
}



//SET_EXPENSES

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

//export const startSetExpenses

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
          const expenses = [];

          snapshot.forEach((childSnapshot) => {
              expenses.push({
                  id: childSnapshot.key,
                  ...childSnapshot.val()
              });
          });

          dispatch(setExpenses(expenses));
        });
    };
};
