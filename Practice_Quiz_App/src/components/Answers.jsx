import { useRef } from "react";

export default function Answers({answers, selectedAnswer, answerState, onAnswerSelect}) {
    const shuffeldAnswers = useRef();
    if (!shuffeldAnswers.current) {
        shuffeldAnswers.current = [...answers];
        shuffeldAnswers.current.sort(() => Math.random()-0.5);
    }
    return (
        <ul id="answers">
            {shuffeldAnswers.current.map((answer) => {
                const isAnswerSelected = selectedAnswer === answer;
                let cssClasses = '';
                if (answerState === 'answered' && isAnswerSelected) {
                    cssClasses = 'selected';
                }
                if ((answerState === 'correct' || answerState === 'wrong') && isAnswerSelected) {
                    cssClasses = answerState;
                }
                return                 (
                    <li key={answer} className="answer">
                        <button 
                            className={cssClasses}
                            onClick={() => onAnswerSelect(answer)}
                            disabled={answerState !== ''}>
                                {answer}
                        </button>
                    </li>
                )
            })}
        </ul>        
    );
}