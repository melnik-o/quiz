import {useState, useEffect} from 'react';
import './Quiz.css';
import {useNavigate} from "react-router-dom";

export const Quiz = ({questions, title}) => {
    const [answers, setAnswers] = useState({});
    const [results, setResults] = useState({});
    const [showCorrectAnswer, setShowCorrectAnswer] = useState({});
    const [timerRunning, setTimerRunning] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        let interval;
        if (timerRunning) {
            interval = setInterval(() => {
                setEndTime(Date.now());
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timerRunning]);

    const handleAnswer = (questionId, selectedOption) => {
        const newAnswers = {...answers};
        if (newAnswers[questionId]) {
            if (newAnswers[questionId].includes(selectedOption)) {
                newAnswers[questionId] = newAnswers[questionId].filter(option => option !== selectedOption);
            } else {
                newAnswers[questionId].push(selectedOption);
            }
        } else {
            newAnswers[questionId] = [selectedOption];
        }
        setAnswers(newAnswers);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newResults = {};
        questions.forEach((question) => {
            const userAnswers = answers[question.id] || [];
            const correctAnswers = question.correctAnswers;
            newResults[question.id] = userAnswers.length === correctAnswers.length && userAnswers.every(answer => correctAnswers.includes(answer));
        });
        setResults(newResults);
        setIsSubmit(true);
        setTimerRunning(false);
    };

    const handleShowCorrectAnswer = (questionId) => {
        setShowCorrectAnswer({...showCorrectAnswer, [questionId]: true});
    };

    const handleStartTimer = () => {
        setStartTime(Date.now());
        setTimerRunning(true);
    };

    const formatTime = (milliseconds) => {
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className="container">
            <h1>Квіз - {title}</h1>
            <div className="timer">
                <button className="submit-btn" onClick={() => navigate("/")}>Назад</button>
                {!timerRunning && !endTime && (
                    <button className="submit-btn" onClick={handleStartTimer}>Запустити таймер</button>
                )}
                {timerRunning && (
                    <div className="time">
                        <p>Пройшло часу: {formatTime(endTime - startTime)}</p>
                    </div>
                )}
            </div>
            <form className="quiz-form" onSubmit={handleSubmit}>
                {questions.map((question) => (
                    <div key={question.id} className="question">
                        <h3>{question.id}. {question.question} {question.correctAnswers.length > 1 && '(*)'}</h3>
                        {question.options.map((option) => (
                            <div
                                key={option}
                                className={`option ${results[question.id] !== undefined &&
                                (answers[question.id] && answers[question.id].includes(option) && results[question.id] ? 'correct' : '')}
                  ${answers[question.id] && answers[question.id].includes(option) && !results[question.id] ? 'incorrect' : ''}`}
                            >
                                <label>
                                    <input
                                        className="input"
                                        type="checkbox"
                                        name={`question-${question.id}`}
                                        value={option}
                                        checked={answers[question.id] && answers[question.id].includes(option)}
                                        onChange={() => handleAnswer(question.id, option)}
                                    />
                                    {option}
                                </label>
                            </div>
                        ))}
                        {results[question.id] !== undefined && (
                            <p className={results[question.id] ? 'correct-answer' : 'incorrect-answer'}>
                                {results[question.id] ? 'Вірно!' : 'Не вірно!'}
                                {!results[question.id] && (
                                    <button className="submit-btn"
                                            onClick={() => handleShowCorrectAnswer(question.id)}>Вірна відповідь</button>
                                )}
                            </p>
                        )}
                        {showCorrectAnswer[question.id] && (
                            <p className="correct-answer">
                                Вірна відповідь: <strong>{question.correctAnswers.join(', ')}</strong>
                            </p>
                        )}
                        <hr/>
                    </div>
                ))}
                <button type="submit" className="submit-btn">Відправити</button>
            </form>
            {isSubmit && (
                <div className="statistics">
                    <p>Вірних
                        відповідей: {Object.values(results).filter(result => result).length}/{questions.length}</p>
                    <p>Час виконання: {formatTime(endTime - startTime)}</p>
                </div>
            )}
        </div>
    );
};