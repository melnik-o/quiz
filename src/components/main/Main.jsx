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
                    <NavLink to="/quiz/crypto">
                        2. Крипта №2
                    </NavLink>
                </div>
                <div className={classes.button}>
                    <NavLink to="/quiz/uib">
                        3. УІБ
                    </NavLink>
                </div>
                <div className={classes.button}>
                    <NavLink to="/quiz/kszi">
                        4. КСЗІ
                    </NavLink>
                </div>
                <div className={classes.button}>
                    <NavLink to="/quiz/tg">
                        5. Тести Телеграмм
                    </NavLink>
                </div>
                <div className={classes.button}>
                    <NavLink to="/quiz/tsoo">
                        6. ТСОО
                    </NavLink>
                </div>
                <div className={classes.button}>
                    <NavLink to="/quiz/examples">
                        6. Тести Приклади
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