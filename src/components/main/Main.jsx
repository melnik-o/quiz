import {NavLink} from "react-router-dom";
import classes from './Main.module.css';
export const Main = () => {
    return (
        <>
            <h1>Тести-Квізи</h1>
            <div className={classes.list}>
                <div className={classes.button}>
                    <NavLink to="/quiz/crypto-and-law">
                        1. Крипта та закони
                    </NavLink>
                </div>
                <div className={classes.button}>
                    <NavLink to="/quiz/uib">
                        2. УІБ
                    </NavLink>
                </div>
                <div className={classes.button}>
                    <NavLink to="/quiz/kszi">
                        3. КСЗІ
                    </NavLink>
                </div>
                <div className={classes.button}>
                    <NavLink to="/quiz/tg">
                        4. Тести Телеграмм
                    </NavLink>
                </div>
            </div>
            <h1>Тести на сумісність</h1>
            <div className={classes.list}>
                <div className={classes.button}>
                    <NavLink to="/quiz/terms">
                        1. Визначення
                    </NavLink>
                </div>
            </div>
        </>
    );
};