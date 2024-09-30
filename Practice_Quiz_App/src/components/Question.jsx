import { useState } from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import QUESTIONS from "../questions";

export default function Question({
    questionIdx,
    onAnswerSelect,  
    onSkipAnswer
}) {
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    let timer = 10000;

    if(answer.selectedAnswer) {
        timer = 1000;
    }

    if (answer.isCorrect !== null) {
        timer = 2000;
    }

    function HandleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[questionIdx].answers[0] === answer
            })

            setTimeout(() => {
                onAnswerSelect(answer);
            }, 2000);
        }, 1000);
    }

    let answerState = '';
    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswer) {
        answerState = 'answered';
    }

    return <div id="question">
        <QuestionTimer
            key={timer}
            timeout={timer} 
            onTimeOut={answer.selectedAnswer === '' ? onSkipAnswer : null} 
            mode={answerState} />
        <h2>{QUESTIONS[questionIdx].text}</h2>
        <Answers 
            answers={QUESTIONS[questionIdx].answers} 
            selectedAnswer={answer.selectedAnswer }
            answerState={answerState} 
            onAnswerSelect={HandleSelectAnswer}
        />        
    </div>
}