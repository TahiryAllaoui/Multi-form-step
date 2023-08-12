import { Link } from 'react-router-dom';
import './style.scss'

const PersonalInfo = () => {

    return (
        <form>
            <div className="container">
                <div className="step-label">
                    <h2>Personal info</h2>
                    <p>Please provide your name, email address, and phone number.</p>
                </div>
                <div className="form-elements">
                    <div className="form-item">
                        <label>Name</label>
                        <input type="text" required placeholder='e.g. Stephen King' />
                    </div>
                    <div className="form-item">
                        <label>Email Address</label>
                        <input type="email" required placeholder='e.g. stephenking@gmail.com' />
                    </div>
                    <div className="form-item">
                        <label>Phone Number</label>
                        <input type="text" required placeholder='e.g. +1 234 567 853' />
                    </div>
                </div>
            </div>
            <div className="form-link">
                <Link to='/' className='preview-Link'>

                </Link>
                <Link to='/select-plan' className='next-Link'>
                    Next Step
                </Link>
            </div>
        </form>
    );
};

export default PersonalInfo;