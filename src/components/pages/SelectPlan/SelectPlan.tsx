import advancedImg from '../../../assets/images/icon-advanced.svg';
import arcadeImg from '../../../assets/images/icon-arcade.svg';
import { PlanInterface, PlanContext } from '../../utils/Plan';
import proImg from '../../../assets/images/icon-pro.svg';
import { useContext, useEffect } from 'react';
import { Step } from '../../utils/StepChange';
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
        checked: false
    },
    {
        title: 'Advanced',
        monthPrice: 12,
        yearPrice: 120,
        checked: false
    },
    {
        title: 'Pro',
        monthPrice: 15,
        yearPrice: 150,
        checked: false
    }]

    const handleClick = (i: number) => {
        planContext!.setIsPlanButtonDisabled(false);
        planContext!.setCurrentPlanIndex(i);
        let tmp: PlanInterface = planOnDOM[i];
        tmp.checked = true;
        planContext!.setPlan(tmp);
        if (planContext!.monthly) {
            planContext!.setTotalPrice(planContext!.plan.monthPrice);
        }
        else {
            planContext!.setTotalPrice(planContext!.plan.yearPrice);
        }
    };

    //For total Price
    useEffect(() => {
        if (planContext!.monthly) {
            planContext!.setTotalPrice(planContext!.plan.monthPrice);
        }
        else {
            planContext!.setTotalPrice(planContext!.plan.yearPrice);
        }
    }, [planContext!.plan, planContext!.monthly])


    //Monthly or yearly Bill switch
    const handleSwitch = () => {
        planContext!.setMonthly(!planContext!.monthly);
    };

    //For sidebar scrolling step
    useEffect(() => {
        stepContext!.setStepId(1);
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
                            return <div key={i} className="choice" onClick={() => handleClick(i)} style={{
                                border: i == planContext!.currentPlanIndex ? '1px solid hsl(243, 100%, 62%)' : '1px solid hsl(229, 24%, 87%)',
                                backgroundColor: i == planContext!.currentPlanIndex ? 'hsl(217, 100%, 97%)' : 'hsl(0,0%,100%)'
                            }}>
                                <img src={planItems[i]} />
                                <div>
                                    <h3>{planOnDOM[i].title}</h3>
                                    {(planContext!.monthly) ? <p>${planOnDOM[i].monthPrice}/mo</p> : <p>${planOnDOM[i].yearPrice}/yr</p>}
                                    {!(planContext!.monthly) && <p className="month-bonus">2 months free</p>}
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className="bill">
                    <p>Monthly</p>
                    <div className="switch-container" onClick={handleSwitch}>
                        <div className='switch' style={{ transform: `${!planContext!.monthly ? 'translatex(15px)' : 'translatex(0)'}` }}></div>
                    </div>
                    <p>Yearly</p>
                </div>
            </div>
        </form>
    );
};

export default SelectPlan;