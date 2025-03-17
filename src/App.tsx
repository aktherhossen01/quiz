
import './App.css'

import Question from './home/Question'
import QuizSummery from './home/QuizSummery'
import { useAppSelector } from './redux/hook'

function App() {
 const {quizComplete}= useAppSelector((state)=>state.quiz)

 

  return (
    <>
     <h1 className='mb-7 text-gray-600 text-4xl text-center mt-3 font-extrabold'> T oMaDeR JOnNo QuIz</h1>
      
    {!quizComplete ? <Question></Question>:<QuizSummery></QuizSummery>}
     
    </>
  )
}

export default App
