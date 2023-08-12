import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PersonalInfo from './pages/PersonalInfo';
import '../style/Form.scss';
import SelectPlan from './pages/SelectPlan';


const Form = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PersonalInfo />} />
                <Route path='/select-plan' element={<SelectPlan />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Form;