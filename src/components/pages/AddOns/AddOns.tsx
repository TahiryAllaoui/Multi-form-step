import { Link } from 'react-router-dom';
import checkmark from '../../../assets/images/icon-checkmark.svg'
import './style.scss'
import React, { useContext, useEffect, useRef } from 'react';
import { Step } from '../../utils/StepChange';
import { Plan } from '../../utils/Plan';
import { Add } from '../../utils/Addons';

interface add {
    title: string;
    feeMonth: number;
    feeYear: number;
    checked: boolean;
    div: HTMLDivElement;
}

const AddOns = () => {
    const stepContext = useContext(Step);
    const planContext = useContext(Plan);
    const addContext = useContext(Add)

    let div = document.createElement('div');
    const online = useRef<HTMLDivElement>(div);
    const storage = useRef<HTMLDivElement>(div);
    const profile = useRef<HTMLDivElement>(div);

    let added: add[] = [{
        title: 'Online service',
        feeMonth: 1,
        feeYear: 10,
        checked: addContext!.check,
        div: online.current!
    },
    {
        title: 'Larger storage',
        feeMonth: 2,
        feeYear: 20,
        checked: false,
        div: storage.current!
    },
    {
        title: 'Customizable profile',
        feeMonth: 5,
        feeYear: 50,
        checked: false,
        div: profile.current!
    }]

    // let tmp: add[] = [];
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        addContext!.setCheck(!addContext!.check);
        for (let i = 0; i < 3; i++) {
            if (e.currentTarget.tabIndex == i) {
                addContext!.check ? addContext!.setAdd([...addContext!.adds, added[i]]) : addContext!.setAdd(addContext!.adds.splice(0, i));
                console.log(addContext!.adds)
            }
        }

    };

    useEffect(() => {
        addContext!.check ? online.current.classList.add("form-item-border") : online.current.classList.remove("form-item-border");
    }, [addContext!.check])


    useEffect(() => {
        stepContext!.setStepId(2)
        addContext!.setButton(true)
    }, [])
    return (
        <form className='step-3'>
            <div className="container">
                <div className="step-label">
                    <h2>Pick add-ons</h2>
                    <p>Add-ons to multiplayer games.</p>
                </div>
                <div className="form-elements">
                    <div className="form-item" ref={online} onClick={(e: React.MouseEvent<HTMLDivElement>) => handleClick(e)} tabIndex={0}>
                        <div className="tag">
                            <div className='check'><img src={checkmark} alt="" /></div>
                            <label>
                                <h3>Online ervice</h3>
                                <p>Access to multiplayer games</p>
                            </label>
                        </div>
                        {!planContext!.bill ? <p>+${added[0].feeMonth}/mo</p> : <p>+${added[0].feeYear}/yr</p>}
                    </div>
                    <div className="form-item" ref={storage} onClick={(e: React.MouseEvent<HTMLDivElement>) => handleClick(e)} tabIndex={1}>
                        <div className="tag">
                            <div className='check'><img src={checkmark} alt="" /></div>
                            <label>
                                <h3>Larger storage</h3>
                                <p>Extra 1TB of cloud save</p>
                            </label>
                        </div>
                        {!planContext!.bill ? <p>+${added[1].feeMonth}/mo</p> : <p>+${added[1].feeYear}/yr</p>}
                    </div>
                    <div className="form-item" ref={profile} onClick={(e: React.MouseEvent<HTMLDivElement>) => handleClick(e)} tabIndex={2}>
                        <div className="tag">
                            <div className='check'><img src={checkmark} alt="" /></div>
                            <label>
                                <h3>Customizable profile</h3>
                                <p>Custom theme on your profile</p>
                            </label>
                        </div>
                        {!planContext!.bill ? <p>+${added[2].feeMonth}/mo</p> : <p>+${added[2].feeYear}/yr</p>}
                    </div>
                </div>
            </div>
            <div className="form-link">
                <Link to='/select-plan' className='preview-Link'>
                    Go back
                </Link>
                <Link to='/summary' className='next-Link'>
                    <button>Next step</button>
                    {/* disabled={addContext!.button} */}
                </Link>
            </div>
        </form>
    );
};

export default AddOns;