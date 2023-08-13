import { Link } from 'react-router-dom';
import '../AddOns/style.scss'

const AddOns = () => {
    return (
        <form>
            <div className="container">
                <div className="step-label">
                    <h2>Pick add-ons</h2>
                    <p>Add-ons to multiplayer games.</p>
                </div>
                <div className="form-elements">
                    <div className="form-item">
                        <div className="tag">
                            <input type="checkbox" required name='online-service' />
                            <label>
                                <h3>Online ervice</h3>
                                <p>Access to multiplayer games</p>
                            </label>
                        </div>
                        <p>+$1/mo</p>
                    </div>
                    <div className="form-item">
                        <div className="tag">
                            <input type="checkbox" required name='storage' />
                            <label>
                                <h3>Larger storage</h3>
                                <p>Extra 1TB of cloud save</p>
                            </label>
                        </div>
                        <p>+$2/mo</p>
                    </div>
                    <div className="form-item">
                        <div className="tag">
                            <input type="checkbox" required name='custom-profile' />
                            <label>Custom theme on your profile</label>
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