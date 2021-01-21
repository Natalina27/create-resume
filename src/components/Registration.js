import React from 'react';
import {useState} from "react";
import {connect} from "react-redux";

const Registration = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        const loginData = {
            email,
            password
        }
        localStorage.setItem('login', JSON.stringify(loginData));
        //NOT SURE IF WE NEED TO ADD USER TO REDUX

    }
    function checkPwd(str) {
        if (str.length < 8) {
            return("too_short");
        } else if (str.search(/\d/) == -1) {
            return("no_num");
        } else if (str.search(/[a-z]/) == -1) {
            return("no_letter");
        } else if (str.search(/[A-Z]/) == -1) {
            return("no_capital_letters");
        }else if(str.search(/[\!\@\#\$\%\^\&\*\(\)\_\+]/) == -1){
            return("no_special_chars");
        } else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
            return("bad_char");
        }
        return("OK");
    }

    function validateForm() {
        return checkPwd(password) ==='OK';
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
const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({
    userRegister:(newUser)=>dispatch({type:'ADD_USER', payload: newUser}),
})
export default connect(mapStateToProps, mapDispatchToProps)(Registration);