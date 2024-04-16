import {
    questionsCrypto,
    questionsCryptoLaw,
    questionsEDKI,
    questionsEDKI_OKM,
    questionsEFI,
    questionsExamples,
    questionsKSZI,
    questionsOSMsDos,
    questionsPartTwo,
    questionsTG,
    questionsTSOO,
    questionsUIB
} from '../data/index.js'

const questionTypeMapping = {
    'Криптографія та закони': questionsCryptoLaw,
    'Криптографія': questionsCrypto,
    'Управління інформаційною безпекою': questionsUIB,
    'КСЗІ': questionsKSZI,
    'ТСОО': questionsTSOO,
    'Телеграмм': questionsTG,
    'Приклади': questionsExamples,
    'Розділ №2': questionsPartTwo,
    'ЕФІ': questionsEFI,
    'ЄДКІ': questionsEDKI,
    'ЄДКІ OKM': questionsEDKI_OKM,
    'Операційна система MS DOS': questionsOSMsDos
};

export const getTypeQuestions = (currentQuestion) => {
    for (const [type, questions] of Object.entries(questionTypeMapping)) {
        if (questions.some(({ question }) => question === currentQuestion)) {
            return type;
        }
    }
};