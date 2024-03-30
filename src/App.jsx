import {Quiz} from "./Quiz.jsx";
import {questions} from "./questions.js";

export const App = () => {
    return (
        <>
            <Quiz questions={questions}/>
        </>
    );
};