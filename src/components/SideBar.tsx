import { useContext, useEffect, useRef } from 'react';
import '../style/SideBar.scss'
import { Step } from './utils/StepChange';

const SideBar = () => {

    //For sidebar step scroll
    const step1 = useRef<HTMLParagraphElement>(null);
    const step2 = useRef<HTMLParagraphElement>(null);
    const step3 = useRef<HTMLParagraphElement>(null);
    const step4 = useRef<HTMLParagraphElement>(null);
    const stepTab: React.RefObject<HTMLParagraphElement>[] = [step1, step2, step3, step4];
    const stepContext = useContext(Step);

    useEffect(() => {
        for (let i = 0; i < stepTab.length; i++)
            (i == stepContext!.stepId) ? stepTab[stepContext!.stepId].current!.classList.add('step-color') : stepTab[i].current!.classList.remove('step-color');
    }, [stepContext!.stepId])


    return (
        <ul className="side-bar">
            <li className="step">
                <p ref={step1} className='step-p-1'>1</p>
                <div>
                    <h3>STEP 1</h3>
                    <p className='step-tag'>YOUR INFO</p>
                </div>
            </li>
            <li className="step">
                <p ref={step2} className='step-p-2'>2</p>
                <div>
                    <h3>STEP 2</h3>
                    <p className='step-tag'>SELECT PLAN</p>
                </div>
            </li>
            <li className="step">
                <p ref={step3} className='step-p-3'>3</p>
                <div>
                    <h3>STEP 3</h3>
                    <p className='step-tag'>ADD-ONS</p>
                </div>
            </li>
            <li className="step">
                <p ref={step4} className='step-p-4'>4</p>
                <div>
                    <h3>STEP 4</h3>
                    <p className='step-tag'>SUMMARY</p>
                </div>
            </li>
        </ul>
    );
};

export default SideBar;