import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import PersonalInfo from './pages/PersonalInfo/PersonalInfo';
import '../style/Form.scss';
import AddOns from './pages/AddOns/AddOns';
import Summary from './pages/Summary/Summary';
import Completed from './pages/Completed/Completed';
import { Identity, IdentityType } from './utils/Info';
import { PlanContext, PlanContextType, PlanInterface } from './utils/Plan';
import { AddOn, AddOnContextType, AddOnContext } from './utils/Addons';
import SelectPlan from './pages/SelectPlan/SelectPlan';

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
    const [isPlanButtonDisabled, setIsPlanButtonDisabled] = useState<boolean>(false);
    const [planCheckedIndexes, setPlanCheckedIndexes] = useState<number[]>([]);

    const planDefType: PlanContextType = {
        monthly: monthly,
        setMonthly: setMonthly,
        plan: userPlan,
        setPlan: setUserPlan,
        isPlanButtonDisabled: isPlanButtonDisabled,
        setIsPlanButtonDisabled: setIsPlanButtonDisabled,
        planCheckedIndexes: planCheckedIndexes,
        setPlanCheckedIndexes: setPlanCheckedIndexes
    }

    //Add-ons
    const [addOns, setAddOns] = useState<AddOn[]>([{
        title: 'Online service',
        monthPrice: 1,
        yearPrice: 10,
        checked: false,
    },
    {
        title: 'Larger storage',
        monthPrice: 2,
        yearPrice: 20,
        checked: false,
    },
    {
        title: 'Customizable profile',
        monthPrice: 5,
        yearPrice: 50,
        checked: false,
    }]
    );
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [checkedIndexes, setCheckedIndexes] = useState<number[]>([]);

    const r: AddOnContextType = {
        addOns: addOns,
        setAddons: setAddOns,
        buttonDisabled: buttonDisabled,
        setButtonDisabled: setButtonDisabled,
        checkedIndexes: checkedIndexes,
        setCheckedIndexes: setCheckedIndexes
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