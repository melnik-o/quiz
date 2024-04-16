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
                        7. Тести Приклади
                    </NavLink>
                </div>
                <div className={classes.button}>
                    <NavLink to="/quiz/part-two">
                        8. Питання розділ 2
                    </NavLink>
                </div>
                <div className={classes.button}>
                    <NavLink to="/quiz/efi">
                        9. ЕФІ
                    </NavLink>
                </div>
                <div className={classes.button}>
                    <NavLink to="/quiz/edki">
                        10. ЄДКІ
                    </NavLink>
                </div>
                <div className={classes.button}>
                    <NavLink to="/quiz/edki-okm">
                        11. ЄДКІ OKM
                    </NavLink>
                </div>
                <div className={classes.button}>
                    <NavLink to="/quiz/os-msdos">
                        12. ОС MS DOS
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