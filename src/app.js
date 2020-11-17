import React from 'react';
import ReactDOM from'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import  { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import './styles/styles.scss'; 
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import './playground/promises';


const store = configureStore();


const jsx = (
    //have to pass in propr name and set it equal to store you named
    <Provider store = {store}>
      <AppRouter />
    
    </Provider>

);

ReactDOM.render(<p>Loading....</p>, document.getElementById('app'));
  
store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});

