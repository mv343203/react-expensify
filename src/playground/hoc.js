//Higher Order COmponenet = HOC
// a component that just renders another component
//Goal of a higher order compoenent is to reuse code 
//We will use Render hijacking - prop manipulation - abstract state


//allows us to reuse and recreate by passing down key value pairs from spread operators and 
//creating functions that wrap a componenent 
import React from 'react';
import ReactDOM from 'react-dom';
//Regular component
const Info = (props) => (
    <div>
    <h1> Info </h1>
    <p> The info is: {props.info}</p>
    </div>
);
//higher order funciton that wraps other component 
//taking all of props passed in and spreading them out as key value pairs and passing them down

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAdmin && <p>This is provate info. Please do not share!</p>}
        <WrappedComponent {...props} /> 
        </div>
    );
};

//this is another function 
//terniary operator usage 
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated ? (<WrappedComponent {...props}/>) : (<p> Denied Access</p>)}
        </div>
    )
}

//this is the componenet you create after creating the above function that executes 
const AdminInfo = withAdminWarning(Info);
const AuthorInfo = requireAuthentication(Info);

ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthorInfo isAuthenticated={true} info="These are the details" />, document.getElementById('app'));
