import arcade from '../../../assets/images/icon-arcade.svg'
import advanced from '../../../assets/images/icon-advanced.svg'
import pro from '../../../assets/images/icon-pro.svg'
import { Link } from 'react-router-dom';
import './style.scss'

const SelectPlan = () => {
    return (
        <form className='step-2'>
            <div className="container">
                <div className="step-label">
                    <h2>Select your plan</h2>
                    <p>You have option of monthly or yearly billing.</p>
                </div>
                <div className="step-items">
                    <div className="choice">
                        <img src={arcade} alt="" />
                        <div>
                            <h3>Arcade</h3>
                            <p>$9/mo</p>
                        </div>
                    </div>
                    <div className="choice">
                        <img src={advanced} alt="" />
                        <div>
                            <h3>Advanced</h3>
                            <p>$12/mo</p>
                        </div>
                    </div>
                    <div className="choice">
                        <img src={pro} alt="" />
                        <div>
                            <h3>Pro</h3>
                            <p>$15/mo</p>
                        </div>
                    </div>
                </div>
                <div className="bill">
                    <p>Monthly</p>
                    <div className="switch-container">
                        <div className="switch"></div>
                    </div>
                    <p>Yearly</p>
                </div>
            </div>
            <div className="form-link">
                <Link to='/' className='preview-Link'>
                    Go back
                </Link>
                <Link to='/add-ons' className='next-Link'>
                    <button>Next step</button>
                </Link>
            </div>
        </form>
    );
};

export default SelectPlan;