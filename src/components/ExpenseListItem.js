import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


//destructure props object to access to individual data  from the props object 
//we will then import into the ExpenseList 
//access the store by adding dispatch into the spread and id to grab specefic id 
const ExpenseListItem = ({id, description, amount, createdAt}) => (
     <Link className="list-item" to = {`/edit/${id}`}> 
      <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__sub-title"> {moment(createdAt).format('MMMM Do, YYYY')} </span>
      </div> 
      <h3 className='list-item__data'>{numeral(amount / 100).format ('$0,0.00')} </h3>
    </Link>
);

//default 
export default ExpenseListItem;