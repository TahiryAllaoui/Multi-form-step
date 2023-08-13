import { Link } from 'react-router-dom';
import './style.scss'
import { useContext } from 'react';
import { Identity } from '../../utils/Info';


const PersonalInfo = () => {
    const specialChar: RegExp = /[\`1234567890=\/\*\+\{\}\~\!\@\#\$\%\|\^\&\*\(\)\=\[\]\:\'\"\;\,\?\>\<]/;

    const context = useContext(Identity);

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        context?.setName(e.currentTarget.value);
    };

    const handleMail = (e: React.ChangeEvent<HTMLInputElement>) => {
        context?.setMail(e.currentTarget.value);
    };

    const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        context?.setNumber(e.currentTarget.value);
    };




    return (
        <form className='step-1'>
            <div className="container" >
                <div className="step-label">
                    <h2>Personal info</h2>
                    <p>Please provide your name, email address, and phone number.</p>
                </div>
                <div className="form-elements">
                    <div className="form-item">
                        <label>Name</label>
                        <input type="text" required placeholder='e.g. Stephen King' onChange={handleName} value={context?.name} />
                    </div>
                    <div className="form-item">
                        <label>Email Address</label>
                        <input type="email" required placeholder='e.g. stephenking@gmail.com' onChange={handleMail} value={context?.mail} />
                    </div>
                    <div className="form-item">
                        <label>Phone Number</label>
                        <input type="text" required placeholder='e.g. +1 234 567 853' onChange={handleNumber} value={context?.number} />
                    </div>
                </div>
            </div>
            <div className="form-link">
                <Link to='/' className='preview-Link'>

                </Link>
                <Link to='/select-plan' className='next-Link'>
                    <button>Next step</button>
                </Link>
            </div>
        </form>
    );
};

export default PersonalInfo;