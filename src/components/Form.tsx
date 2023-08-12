import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PersonalInfo from './pages/PersonalInfo';
import '../style/Form.scss';


const Form = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PersonalInfo />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Form;