import arcade from '../../../assets/images/icon-arcade.svg'
import advanced from '../../../assets/images/icon-advanced.svg'
import pro from '../../../assets/images/icon-pro.svg'
import { Link } from 'react-router-dom';
import './style.scss'
import { useContext, useEffect, useRef } from 'react';
import { Step } from '../../utils/StepChange';
import { Plan } from '../../utils/Plan';

interface plan {
    title: string;
    feeMonth: number;
    feeYear: number;
    yearPay: boolean;
    div: HTMLDivElement;
}

const SelectPlan = () => {

    //Plan
    let planContext = useContext(Plan)

    let div = document.createElement('div');

    const arcadeDiv = useRef<HTMLDivElement>(div);
    const advancedDiv = useRef<HTMLDivElement>(div);
    const proDiv = useRef<HTMLDivElement>(div);

    let plan: plan[] = [{
        title: 'Arcade',
        feeMonth: 9,
        feeYear: 90,
        yearPay: false,
        div: arcadeDiv.current!
    },
    {
        title: 'Advanced',
        feeMonth: 12,
        feeYear: 120,
        yearPay: false,
        div: advancedDiv.current!
    },
    {
        title: 'Arcade',
        feeMonth: 15,
        feeYear: 150,
        yearPay: false,
        div: proDiv.current!
    }]

    const swithButton = useRef<HTMLDivElement>(null);
    const bonus1 = useRef<HTMLParagraphElement>(null);
    const bonus2 = useRef<HTMLParagraphElement>(null);
    const bonus3 = useRef<HTMLParagraphElement>(null);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        planContext!.setPlan({ ...planContext!.plan, div: e.currentTarget });
        planContext!.setClicked(!(planContext!.clicked));
    };
    useEffect(() => {
        for (let i = 0; i < plan.length; i++) {
            if (plan[i].div == planContext!.plan.div) {
                plan[i].div.classList.add('choice-border');
                (!planContext!.bill) ? planContext!.setPay(plan[i].feeMonth) : planContext!.setPay(plan[i].feeYear);
                planContext!.setButton(false)
            }
            else {
                plan[i].div.classList.remove('choice-border');
            }
        }
    }, [planContext!.clicked])


    //Monthly or yearly Bill
    const handleSwitch = () => {
        planContext!.setBill(!planContext!.bill);
    };

    useEffect(() => {
        !planContext!.bill ? swithButton.current!.style.transform = 'translateX(0px)' : swithButton.current!.style.transform = "translateX(15px)";
        !planContext!.bill ? bonus1.current!.style.display = 'none' : bonus1.current!.style.display = "block";
        !planContext!.bill ? bonus2.current!.style.display = 'none' : bonus2.current!.style.display = "block";
        !planContext!.bill ? bonus3.current!.style.display = 'none' : bonus3.current!.style.display = "block";
        !planContext!.bill ? planContext!.setBill(false) : planContext!.setBill(true);
    }, [planContext!.bill])


    //For sidebar scrolling step
    const stepContext = useContext(Step);
    useEffect(() => {
        stepContext!.setStepId(1);
        planContext!.setButton(true);
    }, []);

    return (
        <form className='step-2'>
            <div className="container">
                <div className="step-label">
                    <h2>Select your plan</h2>
                    <p>You have option of monthly or yearly billing.</p>
                </div>
                <div className="step-items" >
                    <div className="choice" onClick={(e: React.MouseEvent<HTMLDivElement>) => handleClick(e)} ref={arcadeDiv}>
                        <img src={arcade} alt="" />
                        <div>
                            <h3>{plan[0].title}</h3>
                            {!(planContext!.bill) ? <p>${plan[0].feeMonth}/mo</p> : <p>${plan[0].feeYear}/yr</p>}
                            <p className="month-bonus" ref={bonus1}>2 months free</p>
                        </div>
                    </div>
                    <div className="choice" onClick={(e: React.MouseEvent<HTMLDivElement>) => handleClick(e)} ref={advancedDiv}>
                        <img src={advanced} alt="" />
                        <div>
                            <h3>{plan[1].title}</h3>
                            {!(planContext!.bill) ? <p>${plan[1].feeMonth}/mo</p> : <p>${plan[1].feeYear}/yr</p>}
                            <p className="month-bonus" ref={bonus2}>2 months free</p>
                        </div>
                    </div>
                    <div className="choice" onClick={(e: React.MouseEvent<HTMLDivElement>) => handleClick(e)} ref={proDiv}>
                        <img src={pro} alt="" />
                        <div>
                            <h3>{plan[2].title}</h3>
                            {!(planContext!.bill) ? <p>${plan[2].feeMonth}/mo</p> : <p>${plan[2].feeYear}/yr</p>}
                            <p className="month-bonus" ref={bonus3}>2 months free</p>
                        </div>
                    </div>
                </div>
                <div className="bill">
                    <p>Monthly</p>
                    <div className="switch-container" onClick={handleSwitch}>
                        <div className="switch" ref={swithButton}></div>
                    </div>
                    <p>Yearly</p>
                </div>
            </div>
            <div className="form-link">
                <Link to='/' className='preview-Link'>
                    Go back
                </Link>
                <Link to='/add-ons' className='next-Link'>
                    <button disabled={planContext!.button}>Next step</button>
                </Link>
            </div>
        </form>
    );
};

export default SelectPlan;