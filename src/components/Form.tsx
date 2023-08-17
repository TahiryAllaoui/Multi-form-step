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
import { AddType, Add } from './utils/Addons';

interface plan {
    title: string;
    feeMonth: number;
    feeYear: number;
    div: HTMLDivElement;
}

interface add {
    title: string;
    feeMonth: number;
    feeYear: number;
    checked: boolean;
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
    const [payForAdd, setPayForAdd] = useState(0);
    const [buttonIsDisabledForAdd, setButtonIsDisabledForAdd] = useState(true);
    const [addState, setAddState] = useState<add>({
        title: '',
        feeMonth: 0,
        feeYear: 0,
        div: div,
        checked: false
    });

    let r: AddType = {
        pay: payForAdd,
        setPay: setPayForAdd,
        totalBill: total,
        setTotalBill: setTotal,
        button: buttonIsDisabledForAdd,
        setButton: setButtonIsDisabledForAdd,
        adds: addState,
        setAdd: setAddState
    }


    return (
        <BrowserRouter>
            <Identity.Provider value={t}>
                <Plan.Provider value={s}>
                    <Add.Provider value={r}>
                        <Routes>
                            <Route path='/' element={<PersonalInfo />} />
                            <Route path='/select-plan' element={<SelectPlan />} />
                            <Route path='/add-ons' element={<AddOns />} />
                            <Route path='/summary' element={<Summary />} />
                            <Route path='/completed' element={<Completed />} />
                        </Routes>
                    </Add.Provider>
                </Plan.Provider>
            </Identity.Provider>
        </BrowserRouter>
    );
};

export default Form;