import React from 'react';
import {useState} from "react";

const Login = () => {


    // if(localStorage.getItem('startBlockTime')){
    //if difference <= 1min  block ??? block button Else unblock
    //     const time = JSON.parse(localStorage.getItem('startBlockTime'));
    //     const currentTime = new Date();
    //     console.log('storageTime',time,  'currentTime', currentTime);
    //     console.log('c-t', currentTime - time);
    //     //console.log('getDate', currentTime.getDate() - time.getDate());
    // }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [counter, setCounter] = useState(0);

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
                 localStorage.setItem('startBlockTime', JSON.stringify(new Date()));
             }
        }


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
                        disabled={!validateForm()}>Log In
                </button>
            </form>
        </div>
    );
};

export default Login;