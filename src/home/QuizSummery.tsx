import React from 'react';
import { Card, CardContent, CardHeader } from '../components/ui/card';

const QuizSummery = () => {
    return (
        <div>
           <Card className='w-[450px]'>
            <CardHeader>Quiz Summery</CardHeader>
            <CardContent>
                <h1>you got</h1>
            </CardContent>
           </Card>
        </div>
    );
};

export default QuizSummery;