import { PlanContext } from "./utils/Plan";
import { Step } from "./utils/StepChange";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { Identity } from "./utils/Info";
import { useContext, useEffect, useState } from "react";
import '../style/Buttons.scss'


const Buttons = () => {
    const stepContext = useContext(Step);
    const infoContext = useContext(Identity)
    const planContext = useContext(PlanContext);

    const [tmp, setTmp] = useState<JSX.Element>(<></>)

    useEffect(() => {
        switch (stepContext!.stepId) {
            case 1: setTmp(<div className="form-link">
                <Link to='/' className='preview-Link'>

                </Link>
                <Link to='/select-plan' className='next-Link'>
                    <button disabled={infoContext!.buttonDisableInfo}>Next step</button>
                </Link>
            </div>);
                break;
            case 2: setTmp(<div className="form-link">
                <Link to='/' className='preview-Link'>
                    Go back
                </Link>
                <Link to='/add-ons' className='next-Link'>
                    {!planContext!.isPlanButtonDisabled ? <button>Next step</button> : <button disabled={true}>Next step</button>}
                </Link>
            </div>);
                break;
            case 3: setTmp(<div className="form-link">
                <Link to='/select-plan' className='preview-Link'>
                    Go back
                </Link>
                <Link to='/summary' className='next-Link'>
                    <button>Next step</button>

                </Link>
            </div>);
                break;
            case 4: setTmp(<div className="form-link">
                <Link to='/add-ons' className='preview-Link'>
                    Go back
                </Link>
                <Link to='/completed' className='next-Link'>
                    <button>Next step</button>
                </Link>
            </div>);
                break;
        }
    }, [])


    // const navigate = useNavigate()
    // navigate("/")

    const paths = ["/", "/select-plan", "/add-ons", "/summary", "/completed"]

    return (
        <div className="button-container">
            <div className="form-link">
                {
                    stepContext!.stepId > 0 ?
                        <Link to={paths[stepContext!.stepId - 1]} className='preview-Link'>
                            Go back
                        </Link> : null
                }
                {
                    stepContext!.stepId <= 4 ? <Link to={paths[stepContext!.stepId + 1]} className='next-Link'>
                        <button>Next step</button>
                    </Link> : null
                }

            </div>
        </div>
    );
};

export default Buttons;