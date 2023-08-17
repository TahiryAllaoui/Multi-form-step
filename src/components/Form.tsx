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

interface plan {
    title: string;
    feeMonth: number;
    feeYear: number;
    yearPay: boolean;
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
        title: 'Arcade',
        feeMonth: 9,
        feeYear: 90,
        yearPay: false,
        div: div
    });
    // const plan: plan[] = [{
    // title: 'Arcade',
    // feeMonth: 9,
    // feeYear: 90,
    // yearPay: false,
    // planId: 0,
    // div: div
    // },
    // {
    //     title: 'Advanced',
    //     feeMonth: 12,
    //     feeYear: 120,
    //     yearPay: false,
    //     planId: 1,
    //     div: div
    // },
    // {
    //     title: 'Arcade',
    //     feeMonth: 15,
    //     feeYear: 150,
    //     yearPay: false,
    //     planId: 2,
    //     div: div
    // }];

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

    return (
        <BrowserRouter>
            <Identity.Provider value={t}>
                <Plan.Provider value={s}>
                    <Routes>
                        <Route path='/' element={<PersonalInfo />} />
                        <Route path='/select-plan' element={<SelectPlan />} />
                        <Route path='/add-ons' element={<AddOns />} />
                        <Route path='/summary' element={<Summary />} />
                        <Route path='/completed' element={<Completed />} />
                    </Routes>
                </Plan.Provider>
            </Identity.Provider>
        </BrowserRouter>
    );
};

export default Form;