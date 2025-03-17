import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { setAnswer } from '../redux/features/quiz/quizSlice';
import QuizControl from './QuizControl';





const Question = () => {
  const dispatch = useAppDispatch()
  const {question,currentQuestionIndex,userAnswers} = useAppSelector(state =>state.quiz)
  const currentAnswer = userAnswers[currentQuestionIndex]
  const currentQuestion = question[currentQuestionIndex]
console.log(currentAnswer);

  const handleAnswerChange =(answer:string)=>{
    dispatch(setAnswer({questionIndex:currentQuestionIndex,answer}))
    console.log(answer);
    
  }


    return (
      <div className='flex justify-center'>
        <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>{currentQuestion.question}</CardTitle>
        <CardDescription>
Question {currentQuestionIndex + 1}of {question.length}

        </CardDescription>
      </CardHeader>
      <CardContent>
      {currentQuestion.options.map((option,index )=>(<Button onClick={()=>handleAnswerChange(option)} key={index} className='w-full mt-3' 
        variant={option === currentAnswer ? "default":"outline"}
        >{option}</Button>))}
        <QuizControl/>
      </CardContent>
      
    
    </Card>
    </div>
    );
};

export default Question;