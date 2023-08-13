import { Link } from 'react-router-dom';
import './style.scss'

const Summary = () => {
    return (
        <form className='step-4'>
            <div className="container">
                <div className="step-label">
                    <h2>Finishing up</h2>
                    <p>Double-check everything looks OK before confirming.</p>
                </div>
                <div className="step-items">
                    <div className="plan">
                        <div>
                            <h3>Arcade (Monthly)</h3>
                            <Link to='/select-plan' className='links'>Change</Link>
                        </div>
                        <p>$9/mo</p>
                    </div>
                    <div className="line"></div>
                    <div className="add-ons">
                        <div className="add-ons-item">
                            <h3>Online service</h3>
                            <p>+$1/mo</p>
                        </div>
                        <div className="add-ons-item">
                            <h3>Larger storage</h3>
                            <p>+$2/mo</p>
                        </div>
                    </div>
                </div>
                <div className="bill">
                    <p>Total (per month)</p>
                    <h3>+$12/mo</h3>
                </div>
            </div>
            <div className="form-link">
                <Link to='/add-ons' className='preview-Link'>
                    Go back
                </Link>
                <Link to='/completed' className='next-Link'>
                    <button>Next step</button>
                </Link>
            </div>
        </form>
    );
};

export default Summary;