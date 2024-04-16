import {createBrowserRouter} from "react-router-dom";

import {Main} from "./components/main/Main.jsx";
import {Quiz} from "./components/quiz/Quiz.jsx";
import {QuizTerms} from "./components/quiz-terms/QuizTerms.jsx";
import {RandomQuestions} from "./components/random-questions/RandomQuestions.jsx";

import {
    questionsAll,
    questionsCrypto,
    questionsCryptoLaw,
    questionsEDKI,
    questionsEDKI_OKM,
    questionsEFI,
    questionsExamples,
    questionsKSZI,
    questionsOSMsDos,
    questionsPartTwo,
    questionsTerms,
    questionsTG,
    questionsTSOO,
    questionsUIB
} from './data/index.js'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
    },
    {
        path: '/quiz/random-questions',
        element: <RandomQuestions questions={questionsAll}/>
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