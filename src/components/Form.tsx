import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useContext, useState } from 'react'
import PersonalInfo from './pages/PersonalInfo/PersonalInfo';
import '../style/Form.scss';
import SelectPlan from './pages/SelectPlan/SelectPlan';
import AddOns from './pages/AddOns/AddOns';
import Summary from './pages/Summary/Summary';
import Completed from './pages/Completed/Completed';
import { Identity, IdentityType } from './utils/Info';


const Form = () => {
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

    return (
        <BrowserRouter>
            <Identity.Provider value={t}>
                <Routes>
                    <Route path='/' element={<PersonalInfo />} />
                    <Route path='/select-plan' element={<SelectPlan />} />
                    <Route path='/add-ons' element={<AddOns />} />
                    <Route path='/summary' element={<Summary />} />
                    <Route path='/completed' element={<Completed />} />
                </Routes>
            </Identity.Provider>
        </BrowserRouter>
    );
};

export default Form;