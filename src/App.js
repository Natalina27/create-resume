//Core
import React, {useEffect, useState} from "react";
import {Router, Route, Link} from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import CV from "./components/CV";
import history from './history';
//Styles
import styles from "./App.module.css";
import classnames from "classnames";

const App = () => {
    const initialButtonsState = JSON.parse(sessionStorage.getItem("buttons")) || [
        {name: 'Registration', isClicked: true, path: '/'},
        {name: 'Login', isClicked: false, path: '/Login'},
        {name: 'CV', isClicked: false, path: '/CV'}
    ];
    const [buttons, setButtons] = useState(initialButtonsState);

    useEffect(() => {
        sessionStorage.setItem("buttons", JSON.stringify(buttons));
    },[]);

    const chooseButtonClick = (idx) => {
        const newButtons = [...buttons];
        newButtons.map(el => el.isClicked = false);
        newButtons[idx].isClicked = true;
        setButtons(newButtons);
    };

    let linkList = buttons.map((el, i) => {
        return <Link
            key={el.path}
            to={el.path}
            className={classnames({
                [styles.link]: true,
                [styles.linkActive]: (el.isClicked),
            })}
            onClick={() => chooseButtonClick(i)}
        >{el.name}</Link>
    });

    return (
        <Router history={history}>
            <div className={styles.wrap}>
                <div className={styles.inner}>
                    <div className={styles.nav}>
                        {linkList}
                    </div>
                    {/*<div className={styles.content}>*/}
                    {/*<Switch>*/}
                        <Route path='/' exact component={Registration}/>
                        <Route path='/Login' component={Login}/>
                        <Route path='/CV' component={CV}/>
                    {/*</Switch>*/}
                    {/*</div>*/}
                </div>
            </div>
        </Router>
    );
}

export default App;