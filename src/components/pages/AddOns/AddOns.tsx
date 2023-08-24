import checkmark from '../../../assets/images/icon-checkmark.svg'
import { AddOn, AddOnContext } from '../../utils/Addons';
import { PlanContext } from '../../utils/Plan';
import { useContext, useEffect } from 'react';
import { Step } from '../../utils/StepChange';
import { Link } from 'react-router-dom';
import './style.scss'

const AddOns = () => {
    const stepContext = useContext(Step);
    const planContext = useContext(PlanContext);
    const addContext = useContext(AddOnContext);

    const addOnView: AddOn[] = [
        {
            title: "Online Service",
            monthPrice: 1,
            yearPrice: 10,
        },
        {
            title: "Larger storage",
            monthPrice: 2,
            yearPrice: 20,
        },
        {
            title: "Customizable profile",
            monthPrice: 5,
            yearPrice: 50,
        }
    ];

    const addOnViewitems = [
        {
            p: "Access to multiplayer games"
        },
        {
            p: "Extra 1TB of cloud save"
        },
        {
            p: "Custom theme on your profile"

        }
    ];

    const handleClick = (e: React.MouseEvent<HTMLDivElement>, i: number) => {
        let tmpForcheck = addContext!.checkedIndexes;
        tmpForcheck[i] = !addContext!.checkedIndexes[i];
        addContext!.setCheckedIndexes(tmpForcheck);
        const tag = e.currentTarget.querySelector(".tag div") as HTMLElement;
        if (tmpForcheck[i]) {
            e.currentTarget.classList.add("form-item-border")
            tag.classList.add("check-bg");
        } else {
            e.currentTarget.classList.remove("form-item-border")
            tag.classList.remove("check-bg");
        }
        addContext!.setAddons(addOnView.filter((current, index) => addContext!.checkedIndexes[index]));
        console.log(addContext!.addOns);
    }

    useEffect(() => {
        for (let i = 0; i < addContext!.addOns.length; i++) {
            if (planContext!.monthly && addContext!.checkedIndexes) {
                addContext!.setTotalAddOnPrice(0);
                addContext!.setTotalAddOnPrice(addContext!.totalAddOnPrice + addContext!.addOns[i].monthPrice);
            }
            else {
                addContext!.setTotalAddOnPrice(0);
                addContext!.setTotalAddOnPrice(addContext!.totalAddOnPrice + addContext!.addOns[i].yearPrice);
            }
        }
    }, [addContext!.addOns]);

    useEffect(() => {
        const formItems = document.querySelectorAll(".form-item");
        const tags = document.querySelectorAll(".form-item .tag .check");

        for (let i = 0; i < formItems.length; i++) {
            if (addContext!.checkedIndexes[i]) {
                formItems[i].classList.add("form-item-border")
                tags[i].classList.add("check-bg");
            } else {
                formItems[i].classList.remove("form-item-border")
                tags[i].classList.remove("check-bg");
            }
        }
    }, [addContext!.checkedIndexes]);

    useEffect(() => {
        stepContext!.setStepId(2)
    }, []);

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
                            return <div key={i}
                                className='form-item'
                                onClick={(e) => handleClick(e, i)}>
                                <div className="tag">
                                    <div className="check"><img src={checkmark} alt="" /></div>
                                    <label>
                                        <h3>{addOnView[i].title}</h3>
                                        <p>{addOnViewitems[i].p}</p>
                                    </label>
                                </div>
                                {planContext!.monthly ? <p>+${addOnView[i].monthPrice}/mo</p> : <p>+${addOnView[i].yearPrice}/yr</p>}
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
                    <button>Next step</button>

                </Link>
            </div>
        </form>
    );
};

export default AddOns;