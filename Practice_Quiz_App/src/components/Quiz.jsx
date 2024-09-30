import { useState, useCallback } from "react";
import QUESTIONS from '../questions';
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIdx = userAnswers.length;
    const isQuizCompleted = activeQuestionIdx === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleAnswerSelection(selectedAnswer) {
        setUserAnswers((prevAnswers) => {
            return [...prevAnswers, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (isQuizCompleted) {
        return <Summary userAnswers={userAnswers}  />
    }   

    return <div id="quiz">
        <Question 
            key={activeQuestionIdx}
            questionIdx={activeQuestionIdx}
            onAnswerSelect={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}/>
    </div>
}