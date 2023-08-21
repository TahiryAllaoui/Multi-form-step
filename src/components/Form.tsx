import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useContext, useState } from 'react'
import PersonalInfo from './pages/PersonalInfo/PersonalInfo';
import '../style/Form.scss';
import SelectPlan from './pages/SelectPlan/SelectPlan';
import AddOns from './pages/AddOns/AddOns';
import Summary from './pages/Summary/Summary';
import Completed from './pages/Completed/Completed';
import { Identity, IdentityType } from './utils/Info';
import { Plan, PlanType } from './utils/Plan';
import { AddOn, AddOnContextType, AddOnContext } from './utils/Addons';

interface plan {
    title: string;
    feeMonth: number;
    feeYear: number;
    div: HTMLDivElement;
}

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
    let div = document.createElement('div');
    const [pay, setPay] = useState(0);
    const [bill, setBill] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [total, setTotal] = useState(0);
    const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
    const [planState, setPlanState] = useState<plan>({
        title: '',
        feeMonth: 0,
        feeYear: 0,
        div: div
    });

    let s: PlanType = {
        pay: pay,
        setPay: setPay,
        bill: bill,
        setBill: setBill,
        totalBill: total,
        setTotalBill: setTotal,
        button: buttonIsDisabled,
        setButton: setButtonIsDisabled,
        clicked: clicked,
        setClicked: setClicked,
        plan: planState,
        setPlan: setPlanState
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
    const [buttonDisabled, setButtonDisabled] = useState(false);
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
                <Plan.Provider value={s}>
                    <AddOnContext.Provider value={r}>
                        <Routes>
                            <Route path='/' element={<PersonalInfo />} />
                            <Route path='/select-plan' element={<SelectPlan />} />
                            <Route path='/add-ons' element={<AddOns />} />
                            <Route path='/summary' element={<Summary />} />
                            <Route path='/completed' element={<Completed />} />
                        </Routes>
                    </AddOnContext.Provider>
                </Plan.Provider>
            </Identity.Provider>
        </BrowserRouter>
    );
};

export default Form;