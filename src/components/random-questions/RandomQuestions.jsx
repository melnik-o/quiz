import {useEffect, useState} from 'react';
import './RandomQuestions.css';
import { useNavigate } from "react-router-dom";
import {getTypeQuestions} from "../../helpers/getTypeQuestions.js";

export const RandomQuestions = ({ questions }) => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [answers, setAnswers] = useState({});
    const [results, setResults] = useState({});
    const [showCorrectAnswer, setShowCorrectAnswer] = useState({});
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * questions.length);
        setCurrentQuestion(questions[randomIndex]);
    }, [questions]);

    const getRandomQuestion = () => {
        const randomIndex = Math.floor(Math.random() * questions.length);
        setCurrentQuestion(questions[randomIndex]);
        setAnswers({});
        setResults({});
        setShowCorrectAnswer({});
        setShowResults(false);
    };

    const handleAnswer = (questionId, option) => {
        const currentAnswers = { ...answers };
        if (!currentAnswers[questionId]) {
            currentAnswers[questionId] = [];
        }
        const index = currentAnswers[questionId].indexOf(option);
        if (index === -1) {
            currentAnswers[questionId].push(option);
        } else {
            currentAnswers[questionId].splice(index, 1);
        }
        setAnswers(currentAnswers);

        // Проверка ответов
        const isCorrect = questions.find(q => q.id === questionId).correctAnswers.includes(option);
        const currentResults = { ...results };
        currentResults[questionId] = isCorrect;
        setResults(currentResults);
    };

    const handleShowCorrectAnswer = (questionId) => {
        const currentShowCorrectAnswer = { ...showCorrectAnswer };
        currentShowCorrectAnswer[questionId] = true;
        setShowCorrectAnswer(currentShowCorrectAnswer);
    };

    const handleSubmitResults = () => {
        setShowResults(true);
    };

    return (
        <>
            <div className="navigate-btn">
                <button className="submit-btn" onClick={() => navigate("/")}>Назад</button>
            </div>
            <div className="quiz-container">
                {currentQuestion && (
                    <div key={currentQuestion.id} className="question">
                        <h2 className="question-type">Питання з тесту: {getTypeQuestions(currentQuestion.question)}</h2>
                        <hr />
                        <h3>{currentQuestion.id}. {currentQuestion.question} {currentQuestion.correctAnswers.length > 1 && '(*)'}</h3>
                        {currentQuestion.options.map((option) => (
                            <div key={option} className="option">
                                <label className="label">
                                    <input
                                        className="input"
                                        type="checkbox"
                                        name={`question-${currentQuestion.id}`}
                                        value={option}
                                        disabled={showResults}
                                        checked={answers[currentQuestion.id] && answers[currentQuestion.id].includes(option)}
                                        onChange={() => handleAnswer(currentQuestion.id, option)}
                                    />
                                    {option}
                                </label>
                            </div>
                        ))}
                        <hr/>
                        {showResults && (
                            <p className={results[currentQuestion.id] ? 'correct-answer' : 'incorrect-answer'}>
                                {results[currentQuestion.id] ? 'Вірно!' : 'Не вірно!'}
                                {!results[currentQuestion.id] && (
                                    <button className="submit-btn"
                                            onClick={() => handleShowCorrectAnswer(currentQuestion.id)}>Показати відповідь</button>
                                )}
                            </p>
                        )}
                        {showCorrectAnswer[currentQuestion.id] && (
                            <p className="correct-answer">
                                Вірна відповідь: <strong>{currentQuestion.correctAnswers.join(', ')}</strong>
                            </p>
                        )}
                    </div>
                )}
                {!showResults && currentQuestion && (
                    <button className="submit-btn" onClick={handleSubmitResults}>Відповісти</button>
                )}
                <button className="next-btn" onClick={getRandomQuestion}>Наступне питання</button>
            </div>
        </>
    );
};
