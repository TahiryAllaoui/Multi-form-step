import { PlanContext } from "./utils/Plan";
import { Step } from "./utils/StepChange";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { Identity } from "./utils/Info";
import { useContext } from "react";
import '../style/Buttons.scss'


const Buttons = () => {
    const stepContext = useContext(Step);
    const infoContext = useContext(Identity)
    const planContext = useContext(PlanContext);

    console.log(stepContext!.stepId)

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
                        <button>Next step</button>
                    </Link> : null
                }
            </div>
        </div>
    );
};

export default Buttons;