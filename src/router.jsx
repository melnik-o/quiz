import {createBrowserRouter} from "react-router-dom";
import {Main} from "./components/main/Main.jsx";
import {Quiz} from "./components/quiz/Quiz.jsx";
import {questionsCryptoLaw} from "./data/questionsCryptoLaw.js";
import {questionsUIB} from "./data/questionsUIB.js";
import QuizTerms from "./components/questionnaire/QuizTerms.jsx";
import {questionsTerms} from "./data/questionsTerms.js";
import {questionsKSZI} from "./data/questionsKSZI.js";
import {questionsTG} from "./data/questionsTG.js";
import {questionsCrypto} from "./data/questionsCrypto.js";
import {questionsTSOO} from "./data/questionsTSOO.js";
import {questionsExamples} from "./data/questionsExamples.js";
import {questionsPartTwo} from "./data/questionsPartTwo.js";
import {questionsEFI} from "./data/questionsEFI.js";
import {questionsEDKI} from "./data/questionsEDKI.js";
import {questionsOSMsDos} from "./data/questionsOSMsDos.js";
import {questionsEDKI_OKM} from "./data/questionsEDKI_OKM.js";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
    },
    {
        path: '/quiz/crypto-and-law',
        element: <Quiz title="криптографія та закони" questions={questionsCryptoLaw}/>,
    },
    {
        path: '/quiz/crypto',
        element: <Quiz title="криптографія" questions={questionsCrypto}/>,
    },
    {
        path: '/quiz/uib',
        element: <Quiz title="управління інформаційною безпекою" questions={questionsUIB}/>,
    },
    {
        path: '/quiz/kszi',
        element: <Quiz title="КСЗІ" questions={questionsKSZI}/>
    },
    {
        path: '/quiz/tsoo',
        element: <Quiz title="ТСОО" questions={questionsTSOO}/>
    },
    {
        path: '/quiz/tg',
        element: <Quiz title="тести Телеграмм" questions={questionsTG}/>
    },
    {
        path: '/quiz/examples',
        element: <Quiz title="тести Приклади" questions={questionsExamples}/>
    },
    {
        path: '/quiz/part-two',
        element: <Quiz title="тести Питання розділ №2" questions={questionsPartTwo}/>
    },
    {
        path: '/quiz/efi',
        element: <Quiz title="ЕФІ" questions={questionsEFI}/>
    },
    {
        path: '/quiz/edki',
        element: <Quiz title="ЄДКІ" questions={questionsEDKI}/>
    },
    {
        path: '/quiz/edki-okm',
        element: <Quiz title="ЄДКІ OKM" questions={questionsEDKI_OKM}/>
    },
    {
        path: '/quiz/os-msdos',
        element: <Quiz title="Операційна система MS DOS" questions={questionsOSMsDos}/>
    },
    {
        path: '/quiz/terms',
        element: <QuizTerms title="Визначення" questions={questionsTerms}/>,
    },
])