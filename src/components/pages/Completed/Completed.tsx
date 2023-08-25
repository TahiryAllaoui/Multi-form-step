import { useContext, useEffect } from 'react';
import done from '../../../assets/images/icon-thank-you.svg'
import { Step } from '../../utils/StepChange';

import './style.scss'

const Completed = () => {
    const stepContext = useContext(Step);

    useEffect(() => {
        stepContext!.setStepId(undefined);
    }, [stepContext!.stepId])

    return (
        <div className="complet">
            <img src={done} alt="" />
            <h2>Thank you!</h2>
            <p>Thanks for confirming your subscription!
                We hope you have fun using our platform.
                If you ever need support, please feel free to email us at <a href="#">support@loremgaming.com</a></p>
        </div>
    );
};

export default Completed;
