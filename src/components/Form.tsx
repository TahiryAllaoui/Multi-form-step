import { Routes, Route } from 'react-router-dom'
import PersonalInfo from './pages/PersonalInfo/PersonalInfo';
import SelectPlan from './pages/SelectPlan/SelectPlan';
import Completed from './pages/Completed/Completed';
import Summary from './pages/Summary/Summary';
import AddOns from './pages/AddOns/AddOns';
import '../style/Form.scss';

const Form = () => {

    return (
        <Routes>
            <Route path='/' element={<PersonalInfo />} />
            <Route path='/select-plan' element={<SelectPlan />} />
            <Route path='/add-ons' element={<AddOns />} />
            <Route path='/summary' element={<Summary />} />
            <Route path='/completed' element={<Completed />} />
        </Routes>

    );
};

export default Form;