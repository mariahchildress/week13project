import React, { useState } from 'react';

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({name: '', email: '', password: ''});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <form>
            <div className="form-inner">
                <h3>Login</h3>
                {/* Error */}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="text" id="text"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password"></input>
                </div>
                <input type="submit" value="LOGIN"/>
            </div>
        </form>>
    )
}

export default LoginForm;