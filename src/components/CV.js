import React, {useState} from 'react';

const Cv = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    return (
        <div>
            <form>
                <div className="form-group">
                    <input type="text"
                           id="firstName"
                           className="form-control"
                           placeholder="First Name"
                           value={firstName}
                           onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input type="text"
                           id="lastName"
                           className="form-control"
                           placeholder="Last Name"
                           value={lastName}
                           onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <button className="btn btn-outline-primary btn-lg"  type="submit"> SUBMIT
                </button>
            </form>
        </div>
    );
};

export default Cv;