import Form from './Form'
import '../style/App.scss'
import SideBar from './SideBar'
import { Step, StepType } from './utils/StepChange';
import { useState } from 'react';
import Buttons from './Buttons';
import { AddOn, AddOnContextType, AddOnContext } from './utils/Addons';
import { IdentityType, Identity } from './utils/Info';
import { PlanInterface, PlanContextType, PlanContext } from './utils/Plan';


function App() {
  const [stepId, setStepId] = useState<number | undefined>(0);
  let t: StepType = {
    stepId: stepId,
    setStepId: setStepId
  }

  //Identity
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [number, setNumber] = useState('');
  const [buttonDisableInfo, setButtonDisableInfo] = useState(true)
  let id: IdentityType = {
    name: name,
    mail: mail,
    number: number,
    setName: setName,
    setMail: setMail,
    setNumber: setNumber,
    setButtonDisableInfo: setButtonDisableInfo,
    buttonDisableInfo: buttonDisableInfo
  }

  //Bill
  const [userPlan, setUserPlan] = useState<PlanInterface>({
    title: "",
    monthPrice: 0,
    yearPrice: 0,
    checked: false
  });
  const [monthly, setMonthly] = useState<boolean>(true)
  const [isPlanButtonDisabled, setIsPlanButtonDisabled] = useState<boolean>(true);
  const [planCheckedIndexes, setPlanCheckedIndexes] = useState<number[]>([]);
  const [currentPlanIndex, setCurrentPlanIndex] = useState(3);
  const [totalPrice, setTotalPrice] = useState(0);


  const planDefType: PlanContextType = {
    monthly: monthly,
    setMonthly: setMonthly,
    plan: userPlan,
    setPlan: setUserPlan,
    isPlanButtonDisabled: isPlanButtonDisabled,
    setIsPlanButtonDisabled: setIsPlanButtonDisabled,
    planCheckedIndexes: planCheckedIndexes,
    setPlanCheckedIndexes: setPlanCheckedIndexes,
    currentPlanIndex: currentPlanIndex,
    setCurrentPlanIndex: setCurrentPlanIndex,
    totalPrice: totalPrice,
    setTotalPrice: setTotalPrice
  }

  //Add-ons
  const [addOns, setAddOns] = useState<AddOn[]>([]);
  const [checkedIndexes, setCheckedIndexes] = useState<boolean[]>([false, false, false]);
  const [totalAddOnPrice, setTotalAddOnPrice] = useState<number>(0);
  const r: AddOnContextType = {
    addOns: addOns,
    setAddons: setAddOns,
    checkedIndexes: checkedIndexes,
    setCheckedIndexes: setCheckedIndexes,
    totalAddOnPrice: totalAddOnPrice,
    setTotalAddOnPrice: setTotalAddOnPrice
  }



  return (
    <Step.Provider value={t} >
      <Identity.Provider value={id}>
        <PlanContext.Provider value={planDefType}>
          <AddOnContext.Provider value={r}>
            <SideBar />
            <div className='app'>
              <div className="placeholder" ></div>
              <Form />
            </div>
            <Buttons />
          </AddOnContext.Provider>
        </PlanContext.Provider>
      </Identity.Provider>
    </Step.Provider >
  )
}

export default App
