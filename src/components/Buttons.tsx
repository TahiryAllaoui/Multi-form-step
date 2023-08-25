import { PlanContext } from "./utils/Plan";
import { Step } from "./utils/StepChange";
import { Link } from "react-router-dom";
import { Identity } from "./utils/Info";
import { useContext, useEffect } from "react";
import '../style/Buttons.scss'


const Buttons = () => {
    const stepContext = useContext(Step);
    const infoContext = useContext(Identity)
    const planContext = useContext(PlanContext);

    useEffect(() => {
        let myButton = document.querySelector('.button-container') as HTMLDivElement;
        if (stepContext!.stepId == undefined) {
            myButton.style.display = 'none';

        }
        else myButton.style.display = 'block';
    }, [stepContext!.stepId])

    const paths = ["/", "/select-plan", "/add-ons", "/summary", "/completed"]

    return (
        <div className="button-container">
            <div className="form-link">
                {
                    stepContext!.stepId! > 0 ?
                        <Link to={paths[stepContext!.stepId! - 1]} className='preview-Link'>
                            Go back
                        </Link> : <Link to={paths[stepContext!.stepId! - 1]} className='preview-Link'>

                        </Link>
                }
                {
                    stepContext!.stepId! <= 4 ? <Link to={paths[stepContext!.stepId! + 1]} className='next-Link'>
                        <button disabled={infoContext!.buttonDisableInfo!}>Next step</button>
                    </Link> : null
                }
            </div>
        </div>
    );
};

export default Buttons;