import React from 'react';
import {useState} from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [counter, setCounter] = useState(1);
    const [blocked, setBlocked] = useState(false);

    if(localStorage.getItem('startBlockTime')){

        const timeFromStorage = JSON.parse(localStorage.getItem('startBlockTime'));
        const currentTime =  Date.now();
        const timeDiff = currentTime - timeFromStorage;

    //if difference <= 1min  block ??? block button Else unblock
        if (timeDiff < 60000){
            console.log(' you are blocked for 1 min');

        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const loginData = {
            email,
            password
        };

       const loginDataFromStorage =  JSON.parse(localStorage.getItem('login'));
        console.log("loginData", loginData, loginDataFromStorage);
        //compare 2 objects??
        if(loginData.email === loginDataFromStorage.email && loginData.password === loginDataFromStorage.password){
            console.log('ok')
        }else{
            setCounter(counter + 1);
            console.log("counter", counter);
             if (counter >= 3){
                 // block user for 1 min
                 localStorage.setItem('startBlockTime', JSON.stringify(Date.now()));
                 setBlocked(true);
             }
        }


    };
    function validateForm() {
        return( email.length > 0 && password.length >= 8 && !blocked);
    }

    return (
        <div>
            <form  className="loginForm" onSubmit={handleSubmit}>
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
                <button className="btn btn-outline-primary btn-lg"
                        type="submit"
                        disabled={!validateForm()}>Log In
                </button>
            </form>
        </div>
    );
};

export default Login;