import {NavLink} from "react-router-dom";
import classes from './Main.module.css';
export const Main = () => {
    return (
        <>
            <h1>Список всех тестов</h1>
            <div className={classes.list}>
                <div className={classes.button}>
                    <NavLink to="/quiz/crypto-and-law">
                        1. Крипта и законы
                    </NavLink>
                </div>
                <div className={classes.button}>
                    <NavLink to="/quiz/something">
                        2. Something
                    </NavLink>
                </div>
            </div>
        </>
    );
};