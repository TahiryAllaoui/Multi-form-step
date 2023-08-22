import { PlanInterface, PlanContext } from '../../utils/Plan';
import { useContext, useEffect } from 'react';
import { Step } from '../../utils/StepChange';
import { Link } from 'react-router-dom';
import arcadeImg from '../../../assets/images/icon-arcade.svg';
import advancedImg from '../../../assets/images/icon-advanced.svg';
import proImg from '../../../assets/images/icon-pro.svg';
import './style.scss';

const SelectPlan = () => {
    let myArcadeImg = arcadeImg;
    let myAdvancedImg = advancedImg;
    let myProImg = proImg;

    let stepContext = useContext(Step);
    let planContext = useContext(PlanContext);

    //Plan
    let planOnDOM: PlanInterface[] = [{
        title: 'Arcade',
        monthPrice: 9,
        yearPrice: 90,
        checked: false,
    },
    {
        title: 'Advanced',
        monthPrice: 12,
        yearPrice: 120,
        checked: false,
    },
    {
        title: 'pro',
        monthPrice: 15,
        yearPrice: 150,
        checked: false,
    }]

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {

    };
    // useEffect(() => {
    //     // for (let i = 0; i < plan.length; i++) {
    //     //     if (plan[i].div == planContext!.plan.div) {
    //     //         planContext!.setPlan({ ...planContext!.plan, div: plan[i].div, feeMonth: plan[i].feeMonth, feeYear: plan[i].feeYear, title: plan[i].title })
    //     //         plan[i].div.classList.add('choice-border');
    //     //         (!planContext!.bill) ? planContext!.setPay(plan[i].feeMonth) : planContext!.setPay(plan[i].feeYear);
    //     //         planContext!.setButton(false)
    //     //     }
    //     //     else {
    //     //         plan[i].div.classList.remove('choice-border');
    //     //     }
    //     // }
    // }, [planContext!.clicked])


    //Monthly or yearly Bill switch
    const handleSwitch = () => {
        let mySwitchButton = document.querySelector('.bill .switch-container .switch') as HTMLDivElement;
        planContext!.setMonthly(!planContext!.monthly);
        mySwitchButton.classList.toggle('switch-translate');
    };


    //For sidebar scrolling step
    useEffect(() => {
        stepContext!.setStepId(1);
        planContext!.setIsPlanButtonDisabled(true);
    }, []);

    const planItems = [myArcadeImg, myAdvancedImg, myProImg]

    return (
        <form className='step-2'>
            <div className="container">
                <div className="step-label">
                    <h2>Select your plan</h2>
                    <p>You have option of monthly or yearly billing.</p>
                </div>
                <div className="step-items" >
                    {
                        [0, 1, 2].map((i) => {
                            return <div key={i} className="choice" onClick={(e: React.MouseEvent<HTMLDivElement>) => handleClick(e)}>
                                <img src={planItems[i]} />
                                <div>
                                    <h3>{planOnDOM[i].title}</h3>
                                    {(planContext!.monthly) ? <p>${planOnDOM[0].monthPrice}/mo</p> : <p>${planOnDOM[0].yearPrice}/yr</p>}
                                    {!(planContext!.monthly) && <p className="month-bonus">2 months free</p>}
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className="bill">
                    <p>Monthly</p>
                    <div className="switch-container" onClick={handleSwitch}>
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
                    <button disabled={planContext!.isPlanButtonDisabled}>Next step</button>
                </Link>
            </div>
        </form>
    );
};

export default SelectPlan;