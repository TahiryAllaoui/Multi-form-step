import Form from './Form'
import '../style/App.scss'
import SideBar from './SideBar'
import { Step, StepType } from './utils/StepChange';
import { useState } from 'react';
import Buttons from './Buttons';


function App() {
  const [stepId, setStepId] = useState<number | null>(0);
  let t: StepType = {
    stepId: stepId,
    setStepId: setStepId
  }



  return (
    <Step.Provider value={t}>
      <SideBar />
      <div className='app'>
        <div className="placeholder" ></div>
        <Form />
      </div>
      <Buttons />
    </Step.Provider>
  )
}

export default App
