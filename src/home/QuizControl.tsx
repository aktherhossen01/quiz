import React from 'react';
import { Button } from '../components/ui/button';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { completeQuiz, nextQuestion, previousQuestion } from '../redux/features/quiz/quizSlice';

const QuizControl = () => {
const {question,currentQuestionIndex,userAnswers} = useAppSelector(state =>state.quiz)

const isAnswerSelected = userAnswers[currentQuestionIndex] !==null

    const dispatch = useAppDispatch()
    const handleNextQuestion =()=>{
        dispatch(nextQuestion())
    }
    const handlePreviousQuestion =()=>{
        dispatch(previousQuestion())
    }
    const handleComplete =()=>{
        dispatch(completeQuiz())
    }

    const isCompleteQuiz = isAnswerSelected || currentQuestionIndex !== question.length - 1
    return (
        <div className='flex justify-between mt-4 space-x-4'> 
          <Button
          disabled={currentQuestionIndex === 0}
          onClick={handlePreviousQuestion}>Previous</Button>  

         {currentQuestionIndex < question.length -1 &&( <Button disabled={!isAnswerSelected} onClick={handleNextQuestion}>Next</Button>)}  

         {currentQuestionIndex ===question.length -1 &&( <Button disabled={!isCompleteQuiz} onClick={handleComplete} >Complete quiz</Button>)} 
        </div>
    );
};

export default QuizControl;