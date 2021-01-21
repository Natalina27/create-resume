import React, {useState} from 'react';
import {connect} from "react-redux";
import history from "../history";

const Cv = (props) => {
    if(!JSON.parse(localStorage.getItem('auth'))){
        console.log('cv component');
        history.push('/Login');

    }
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    return (
        <div>
            <form>
                <div className="form-group">
                    <input type="text" id="firstName" placeholder="First Name"
                           value={firstName}
                           onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input type="text" id="lastName"
                           placeholder="Last Name"
                           value={lastName}
                           onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <button className="btn btn-outline-primary btn-lg" type="submit"> SUBMIT
                </button>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    infos: state.infos,
})
const mapDispatchToProps = (dispatch) => ({
    addInfo: (info) => dispatch({type: 'ADD_INFO', payload: info}),
    updateInfo: (info) => dispatch({type: 'UPDATE_INFO', payload: info}),
    deleteInfo: (infoId) => dispatch({type: 'DELETE_INFO', payload: infoId}),
})
export default connect(mapStateToProps, mapDispatchToProps)(Cv);