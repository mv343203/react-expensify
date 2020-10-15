import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'


//map <MAP DESCRIPTION>the expenses array which allows you to take in an array and get back something else 
    //requires you to set an updater function 
    //function takes in indvidual expense 
    //Then returns its JSX and we use spread operator to spread out its properties 
    // a key prop has to be set too to avoid error and has to be a uniqe value (which is key value
// in our case we are getting in an array of objects and returning list items 

export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
       <p>No Expenses!</p>
      ) : (

        props.expenses.map((expense) => {
          return <ExpenseListItem key ={expense.id} {...expense} />;
        })
      )
      }
  </div>
);

//imported selectExpenses to sort the data
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
   };

};

//pulls everything together 
export default connect (mapStateToProps)(ExpenseList);

