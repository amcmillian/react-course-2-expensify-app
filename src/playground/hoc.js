import React from 'react';
import ReactDOM from 'react-dom';

/* 
Benefits...
Reuse code
Render hijacking
Prop manipulation
Abstract state
*/

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>Classification: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    )
};

const AdminInfo = withAdminWarning(Info);

const requreAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? 
                <WrappedComponent {...props} /> :
                <p>Please login</p>}
        </div>
    )
}

const AuthInfo = requreAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="Here are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="Confidential Info!" />, document.getElementById('app'));