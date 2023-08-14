import { Link } from 'react-router-dom';
import './style.scss'
import { useContext, useEffect } from 'react';
import { Step } from '../../utils/StepChange';

const AddOns = () => {
    const stepContext = useContext(Step);

    useEffect(() => {
        stepContext!.setStepId(2)
    }, [])
    return (
        <form className='step-3'>
            <div className="container">
                <div className="step-label">
                    <h2>Pick add-ons</h2>
                    <p>Add-ons to multiplayer games.</p>
                </div>
                <div className="form-elements">
                    <div className="form-item">
                        <div className="tag">
                            <input type="checkbox" required name='online-service' id='online' />
                            <label htmlFor='online'>
                                <h3>Online ervice</h3>
                                <p>Access to multiplayer games</p>
                            </label>
                        </div>
                        <p>+$1/mo</p>
                    </div>
                    <div className="form-item">
                        <div className="tag">
                            <input type="checkbox" required name='storage' id='storage' />
                            <label htmlFor='storage'>
                                <h3>Larger storage</h3>
                                <p>Extra 1TB of cloud save</p>
                            </label>
                        </div>
                        <p>+$2/mo</p>
                    </div>
                    <div className="form-item">
                        <div className="tag">
                            <input type="checkbox" required name='custom-profile' id='profile' />
                            <label htmlFor='profile'>
                                <h3>Customizable profile</h3>
                                <p>Custom theme on your profile</p>
                            </label>
                        </div>
                        <p>+$2/mo</p>
                    </div>
                </div>
            </div>
            <div className="form-link">
                <Link to='/select-plan' className='preview-Link'>
                    Go back
                </Link>
                <Link to='/summary' className='next-Link'>
                    <button>Next step</button>
                </Link>
            </div>
        </form>
    );
};

export default AddOns;