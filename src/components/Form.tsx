import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PersonalInfo from './pages/PersonalInfo/PersonalInfo';
import '../style/Form.scss';
import SelectPlan from './pages/SelectPlan/SelectPlan';
import AddOns from './pages/AddOns/AddOns';
import Summary from './pages/Summary/Summary';
import Completed from './pages/Completed/Completed';


const Form = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PersonalInfo />} />
                <Route path='/select-plan' element={<SelectPlan />} />
                <Route path='/add-ons' element={<AddOns />} />
                <Route path='/summary' element={<Summary />} />
                <Route path='/completed' element={<Completed />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Form;