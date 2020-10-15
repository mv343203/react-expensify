import React from 'react';
import { Link } from 'react-router-dom'


//destructure props object to access to individual data  from the props object 
//we will then import into the ExpenseList 
//access the store by adding dispatch into the spread and id to grab specefic id 
const ExpenseListItem = ({id, description, amount, createdAt}) => (
  <div>
    <Link to = {`/edit/${id}`}>  
      <h1>{description}</h1>
    </Link>
    
    <p>{amount} - {createdAt} </p>
    
  </div>
);

//default 
export default ExpenseListItem;