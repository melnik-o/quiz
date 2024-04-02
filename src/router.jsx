import {createBrowserRouter} from "react-router-dom";
import {Main} from "./components/main/Main.jsx";
import {Quiz} from "./components/quiz/Quiz.jsx";
import {questionsCryptoLaw} from "./data/questionsCryptoLaw.js";
import {questionsUIB} from "./data/questionsUIB.js";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
    },
    {
        path: '/quiz/crypto-and-law',
        element: <Quiz title="крипта и законы" questions={questionsCryptoLaw}/>,
    },
    {
        path: '/quiz/uib',
        element: <Quiz title="управління інформаційною безпекою" questions={questionsUIB}/>,
    },
])