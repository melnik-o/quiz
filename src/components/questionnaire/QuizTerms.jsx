import { useState } from 'react';
import {useNavigate} from "react-router-dom";

const QuizTerms = ({ questions, title }) => {
    const navigate = useNavigate();
    const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(''));
    const [totalAnswers, setTotalAnswers] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(Array(questions.length).fill(false));
    const [submitted, setSubmitted] = useState(false);

    const handleAnswerChange = (index, event) => {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[index] = event.target.value;
        setSelectedAnswers(newSelectedAnswers);
        setShowCorrectAnswer(Array(questions.length).fill(false)); // Скрыть предыдущий результат при изменении ответа
    };

    const handleSubmit = () => {
        let total = 0;
        let correct = 0;
        selectedAnswers.forEach((answer, index) => {
            total++;
            if (answer === questions[index].correctAnswer) {
                correct++;
            }
        });
        setTotalAnswers(total);
        setCorrectAnswers(correct);
        setShowCorrectAnswer(selectedAnswers.map((answer, index) => answer === questions[index].correctAnswer));
        setSubmitted(true);
    };

    const showCorrect = (index) => {
        setShowCorrectAnswer((prev) => [...prev.slice(0, index), true, ...prev.slice(index + 1)]);
    };

    return (
        <div className="container">
            <h1>{title}</h1>
            <button className="submit-btn" onClick={() => navigate("/")}>Назад</button>
            <div className="quiz-form">
                {questions.map((questionObj, index) => (
                    <div className="question" key={index}>
                        <h3>{questionObj.question}</h3>
                        <div className="options">
                            {questionObj.options.map((option, optionIndex) => (
                                <div key={optionIndex} className="option">
                                    <label className="radio-label" htmlFor={`question_${index}_option_${optionIndex}`}>
                                        <input
                                            type="radio"
                                            id={`question_${index}_option_${optionIndex}`}
                                            name={`question_${index}`}
                                            value={option}
                                            checked={selectedAnswers[index] === option}
                                            onChange={(e) => handleAnswerChange(index, e)}
                                        />
                                        {option}
                                    </label>
                                </div>
                            ))}
                        </div>
                        {submitted && (
                            <div>
                                {showCorrectAnswer[index] ? (
                                    <p className="correct-answer">Вірна відповідь: <strong>{questionObj.correctAnswer}</strong></p>
                                ) : (
                                    <div>
                                        <p className="incorrect-answer">Не вірно!</p>
                                        <button className="submit-btn" onClick={() => showCorrect(index)}>
                                            Вірна відповідь
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                        <hr/>
                    </div>
                ))}
                <button className="submit-btn" onClick={handleSubmit}>Відправити</button>
                {submitted && (
                    <div className="statistics">
                        <p>Вірних відповідей: {correctAnswers}/{totalAnswers}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuizTerms;
