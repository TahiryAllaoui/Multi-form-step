import { PlanContext, PlanContextType, PlanInterface } from './utils/Plan';
import { AddOn, AddOnContextType, AddOnContext } from './utils/Addons';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PersonalInfo from './pages/PersonalInfo/PersonalInfo';
import SelectPlan from './pages/SelectPlan/SelectPlan';
import { Identity, IdentityType } from './utils/Info';
import Completed from './pages/Completed/Completed';
import Summary from './pages/Summary/Summary';
import AddOns from './pages/AddOns/AddOns';
import { useState } from 'react'
import '../style/Form.scss';

const Form = () => {

    //Identity
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [number, setNumber] = useState('');
    let t: IdentityType = {
        name: name,
        mail: mail,
        number: number,
        setName: setName,
        setMail: setMail,
        setNumber: setNumber
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
        <BrowserRouter>
            <Identity.Provider value={t}>
                <PlanContext.Provider value={planDefType}>
                    <AddOnContext.Provider value={r}>
                        <Routes>
                            <Route path='/' element={<PersonalInfo />} />
                            <Route path='/select-plan' element={<SelectPlan />} />
                            <Route path='/add-ons' element={<AddOns />} />
                            <Route path='/summary' element={<Summary />} />
                            <Route path='/completed' element={<Completed />} />
                        </Routes>
                    </AddOnContext.Provider>
                </PlanContext.Provider>
            </Identity.Provider>
        </BrowserRouter>
    );
};

export default Form;