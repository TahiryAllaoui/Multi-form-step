import Form from './Form'
import '../style/App.scss'
import SideBar from './SideBar'
import { Step, StepType } from './utils/StepChange';
import { useState } from 'react';


function App() {
  const [stepId, setStepId] = useState(0);
  let t: StepType = {
    stepId: stepId,
    setStepId: setStepId
  }



  return (
    <Step.Provider value={t}>
      <div className='app'>
        <SideBar />
        <Form />
      </div>
    </Step.Provider>
  )
}

export default App
