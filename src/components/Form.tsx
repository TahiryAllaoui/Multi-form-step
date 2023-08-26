import { Route, Routes } from 'react-router-dom';
import '../style/Form.scss';
import AddOns from './pages/AddOns/AddOns';
import Completed from './pages/Completed/Completed';
import PersonalInfo from './pages/PersonalInfo/PersonalInfo';
import SelectPlan from './pages/SelectPlan/SelectPlan';
import Summary from './pages/Summary/Summary';

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