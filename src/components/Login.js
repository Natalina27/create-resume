import React from 'react';
import {useState} from "react";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [counter, setCounter] = useState(0);
    const [blockedUser, setBlockedUser] = useState(false);

    if (localStorage.getItem('startBlockTime')) {
        const startBlockTime = JSON.parse(localStorage.getItem('startBlockTime'));
        let diff = new Date() - new Date(startBlockTime || new Date());
        console.log(diff);
        if (diff > 60000) {
            localStorage.removeItem("startBlockTime");
            setBlockedUser(false);
        }
        //unblock button
        else {
            //stay blocked display message
            setBlockedUser(true);
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const loginData = {email, password};

        const loginDataFromStorage = JSON.parse(localStorage.getItem('login'));
        if (loginDataFromStorage) {

            //compare 2 objects??
            if (loginData.email === loginDataFromStorage.email && loginData.password === loginDataFromStorage.password) {
                console.log('ok')
            } else {
                setCounter(counter + 1);
                console.log("counter", counter);
                if (counter >= 3) {
                    // block user for 1 min
                    localStorage.setItem('startBlockTime', JSON.stringify(new Date()));
                }
            }


        }


    };


    function validateForm() {
        return email.length > 0 && password.length >= 8 && !blockedUser;
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
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
                <button className="btn btn-outline-primary btn-lg" type="submit"
                        disabled={!validateForm()}>Log In
                </button>
            </form>
        </div>
    );
};

export default Login;