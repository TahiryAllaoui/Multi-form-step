import { Link } from 'react-router-dom';
import './style.scss'
import { useContext, useEffect } from 'react';
import { Step } from '../../utils/StepChange';
import { AddOnContext } from '../../utils/Addons';
import { PlanContext } from '../../utils/Plan';

const Summary = () => {
    const stepContext = useContext(Step);
    const addContext = useContext(AddOnContext);
    const planContext = useContext(PlanContext);

    //Add-ons list rendering
    let addOnIndex: number[] = [];
    for (let i = 0; i < addContext!.addOns.length; i++) {
        addOnIndex.push(i);
    }

    useEffect(() => {
        stepContext!.setStepId(3);
    }, [])

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
                            {planContext!.monthly ? <h3>{planContext!.plan.title} (Monthly)</h3> : <h3>{planContext!.plan.title} (Yearly)</h3>}
                            <Link to='/select-plan' className='links'>Change</Link>
                        </div>
                        {planContext!.monthly ? <p>${planContext!.plan.monthPrice}/mo</p> : <p>${planContext!.plan.yearPrice}/yr</p>}
                    </div>
                    <div className="line"></div>
                    {
                        addOnIndex.map((i) => {
                            return <div key={i} className="add-ons">
                                <div className="add-ons-item">
                                    <div className="title-plan">
                                        <h3>{addContext!.addOns[i].title}</h3>
                                    </div>
                                    <div className="price">
                                        {planContext!.monthly ? <p>+${addContext!.addOns[i].monthPrice}/mo</p> : <p>+${addContext!.addOns[i].yearPrice}/yr</p>}
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className="bill">
                    {planContext!.monthly ? <p>Total (per month)</p> : <p>Total (per year)</p>}
                    {planContext!.monthly ? <h3>+${planContext!.totalPrice + addContext!.totalAddOnPrice}/mo</h3> : <h3>+${planContext!.totalPrice + addContext!.totalAddOnPrice}/yr</h3>}
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