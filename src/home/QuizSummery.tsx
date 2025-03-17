import React from 'react';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { useAppSelector } from '../redux/hook';
import { Progress } from '../components/ui/progress';

const QuizSummery = () => {
const {question,userAnswers} = useAppSelector(state =>state.quiz)

const correctAnswerCount = question.reduce((count,qna,index)=>{
    return qna.correctAnswer === userAnswers[index] ? count +1 :count;
},0)
const correntPercentage = parseFloat(
    ((correctAnswerCount / question.length)*100).toFixed(2)
)

    return (
        <div className='flex justify-center'>
           <Card className='w-[450px]'>
            <CardHeader>Quiz Summery</CardHeader>
            <CardContent>
                <h1> you got{correctAnswerCount} out of {question.length}</h1>
                <div>
                <Progress value={correntPercentage} />

                </div>
            </CardContent>
           </Card>
        </div>
    );
};

export default QuizSummery;