
import quizComplete from '../assets/quiz-complete.png';
import QUESTION from '../questions';

export default function Summary({userAnswers}) {
    const skippedAnswers = userAnswers.filter(answer => answer === null);
    const correctAnswer = userAnswers.filter((answer, index) => answer === QUESTION[index].answers[0]);

    const skippedAnsPercentage = Math.round((skippedAnswers.length / userAnswers.length) * 100);
    const correctAnsPercentage = Math.round((correctAnswer.length / userAnswers.length) * 100);
    const wrongAnsPercentage = 100 - skippedAnsPercentage - correctAnsPercentage;

    return <div id="summary">
        <img src={quizComplete} alt="quiz completed" />
        <h2>Quiz Completed!</h2>
        <div id="summary-stats">
            <p>
                <span className="number">{skippedAnsPercentage}%</span>
                <span className='text'>Skipped</span>
            </p>
            <p>
                <span className="number">{correctAnsPercentage}%</span>
                <span className='text'>Correct Answers</span>
            </p>
            <p>
                <span className="number">{wrongAnsPercentage}%</span>
                <span className='text'>Wrong Answers</span>
            </p>                        
        </div>
        <ol>
            {userAnswers.map((answer, index) => {
                let cssClass = 'user-answer';
                if (answer === null) {
                    cssClass += ' skipped';
                } else if(answer === QUESTION[index].answers[0]) {
                    cssClass += ' correct';
                } else {
                    cssClass += ' wrong';
                }
                return (
                    <li key={index}>
                        <h3>{index + 1}</h3>
                        <p className='question'>{QUESTION[index].text}</p>
                        <p className={cssClass}>{answer ?? 'Skipped'}</p>
                    </li>
                );
            })}
        </ol>
    </div>
}