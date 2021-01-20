import React from 'react';
import {useState} from "react";

const Registration = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        const loginData = {
            email,
            password
        }

        localStorage.setItem('login', JSON.stringify(loginData));

    };
    function validateForm() {
        return email.length > 0 && password.length >= 8;
    }

    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="email" className="form-control" id="emailInput" placeholder="Email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="passwordInput"
                           placeholder="Password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className="btn btn-outline-primary btn-lg"  type="submit"
                        disabled={!validateForm()}>Sign Up
                </button>
            </form>
        </div>
    );
};

export default Registration;