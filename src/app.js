import React from 'react';
import ReactDOM from'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import  { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import './styles/styles.scss'; 
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 4500}));
store.dispatch(addExpense({description: 'Gas bill', createdAt:1000}));
store.dispatch(addExpense({description: 'Rent', amount: 109500}));


const state = store.getState();
const VisibleExpenses = getVisibleExpenses( state.expenses, state.filters);
console.log(VisibleExpenses);

const jsx = (
    //have to pass in propr name and set it equal to store you named
    <Provider store = {store}>
      <AppRouter />
    
    </Provider>

);


  
ReactDOM.render(jsx, document.getElementById('app'));
  
