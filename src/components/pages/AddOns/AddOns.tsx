import { Link } from 'react-router-dom';
import checkmark from '../../../assets/images/icon-checkmark.svg'
import './style.scss'
import { useContext, useEffect } from 'react';
import { Step } from '../../utils/StepChange';
import { PlanContext } from '../../utils/Plan';
import { AddOnContext } from '../../utils/Addons';

const AddOns = () => {
    const stepContext = useContext(Step);
    const planContext = useContext(PlanContext);
    const addContext = useContext(AddOnContext);

    useEffect(() => {
        stepContext!.setStepId(2)
        addContext!.setButtonDisabled(true)
    }, [])

    const addOnViewitems = [
        {
            h3: "Online Service",
            p: "Access to multiplayer games",
        },
        {
            h3: "Larger storage",
            p: "Extra 1TB of cloud save",
        },
        {
            h3: "Customizable profile",
            p: "Custom theme on your profile",
        }
    ]

    const handleClick = (i: number) => {
        addContext!.setButtonDisabled(false);
        const addOnsTmp = addContext!.addOns;
        for (let j = 0; j < addOnsTmp.length; j++) {
            if (i == j) {
                addOnsTmp[i].checked = !addOnsTmp[i].checked;
                if (addOnsTmp[i].checked && !addContext!.checkedIndexes.includes(i)) {
                    addContext!.setCheckedIndexes([...addContext!.checkedIndexes, i]);
                }
                else if (!addOnsTmp[i].checked && addContext!.checkedIndexes.includes(i)) {
                    const tmp: number[] = [];
                    addContext!.checkedIndexes.forEach((k) => {
                        if (k != i) {
                            tmp.push(k)
                        }
                    })
                    addContext!.setCheckedIndexes([...tmp]);
                }
                break;
            }
        }
        addContext!.setAddons(addOnsTmp);
    }

    return (
        <form className='step-3'>
            <div className="container">
                <div className="step-label">
                    <h2>Pick add-ons</h2>
                    <p>Add-ons to multiplayer games.</p>
                </div>
                <div className="form-elements">
                    {
                        [0, 1, 2].map((i) => {
                            return <div key={i} className={`form-item ${addContext!.checkedIndexes.includes(i) ? "form-item-border" : ""}`} onClick={() => handleClick(i)}>
                                <div className="tag">
                                    <div className={`check ${addContext!.checkedIndexes.includes(i) ? "check-bg" : ""}`}><img src={checkmark} alt="" /></div>
                                    <label>
                                        <h3>{addOnViewitems[i].h3}</h3>
                                        <p>{addOnViewitems[i].p}</p>
                                    </label>
                                </div>
                                {!planContext!.monthly ? <p>+${addContext!.addOns[i].monthPrice}/mo</p> : <p>+${addContext!.addOns[i].yearPrice}/yr</p>}
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="form-link">
                <Link to='/select-plan' className='preview-Link'>
                    Go back
                </Link>
                <Link to='/summary' className='next-Link'>
                    <button disabled={addContext!.buttonDisabled}>Next step</button>

                </Link>
            </div>
        </form>
    );
};

export default AddOns;