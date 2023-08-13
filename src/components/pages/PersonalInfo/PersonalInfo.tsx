import { Link } from 'react-router-dom';
import './style.scss'
import { useContext, useEffect, useState } from 'react';
import { Identity } from '../../utils/Info';

interface etat {
    value: string;
    error: boolean;
}


const PersonalInfo = () => {
    const specialChar: RegExp = /[\`1234567890=\/\*\+\{\}\~\!\@\#\$\%\|\^\&\*\(\)\=\[\]\:\'\"\;\,\?\>\<]/;
    const specialCharForNumber: RegExp = /[\`qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM=\/\*\+\{\}\~\!\@\#\$\%\|\^\&\*\(\)\=\[\]\:\'\"\;\,\?\>\<]/;
    const specialCharForMail: RegExp = /[\`=\/\*\+\{\}\~\!\\\#\$\%\|\^\&\*\(\)\=\[\]\:\'\"\;\,\?\>\<]/;

    const context = useContext(Identity);

    //Handling Input Change
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        context!.setName(e.currentTarget.value);
    };

    const handleMail = (e: React.ChangeEvent<HTMLInputElement>) => {
        context!.setMail(e.currentTarget.value);
    };

    const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        context!.setNumber(e.currentTarget.value);
    };

    //handling Input error
    // const [nameError, setNameError] = useState<etat>({
    //     value: context!.name,
    //     error: true
    // })
    // const [mailError, setMailError] = useState<etat>({
    //     value: context!.mail,
    //     error: true
    // })
    // const [numberError, setNUmberError] = useState<etat>({
    //     value: context!.number,
    //     error: true
    // })
    const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

    useEffect(() => {
        let buttonState: boolean = false;

        //Contrlling void input
        if (context!.name == '') {
            buttonState = true;
        }

        if (context!.number == '') {
            buttonState = true;
        }

        if (context!.name == '') {
            buttonState = true;
        }

        //Controlling non-void input
        if (specialChar.test(context!.name)) {
            let myInput = document.querySelector('.input-1');
            myInput!.classList.add('vibrate');
            buttonState = true;
        }
        else {
            let myInput = document.querySelector('.input-1');
            myInput!.classList.remove('vibrate');
        }

        if (specialCharForMail.test(context!.mail)) {
            let myInput = document.querySelector('.input-2');
            myInput!.classList.add('vibrate');
            buttonState = true;
        }
        else {
            let myInput = document.querySelector('.input-2');
            myInput!.classList.remove('vibrate');
        }

        if (specialCharForNumber.test(context!.number)) {
            let myInput = document.querySelector('.input-3');
            myInput!.classList.add('vibrate');
            buttonState = true;
        }
        else {
            let myInput = document.querySelector('.input-3');
            myInput!.classList.remove('vibrate');
        }
        setButtonIsDisabled(buttonState);
    }, [context!.name, context!.mail, context!.number])





    return (
        <form className='step-1'>
            <div className="container" >
                <div className="step-label">
                    <h2>Personal info</h2>
                    <p>Please provide your name, email address, and phone number.</p>
                </div>
                <div className="form-elements">
                    <div className="form-item">
                        <label>Name</label>
                        <input type="text" required placeholder='e.g. Stephen King' onChange={handleName} value={context?.name} className='input-1' />
                    </div>
                    <div className="form-item">
                        <label>Email Address</label>
                        <input type="email" required placeholder='e.g. stephenking@gmail.com' onChange={handleMail} value={context?.mail} className='input-2' />
                    </div>
                    <div className="form-item">
                        <label>Phone Number</label>
                        <input type="text" required placeholder='e.g. +1 234 567 853' onChange={handleNumber} value={context?.number} className='input-3' />
                    </div>
                </div>
            </div>
            <div className="form-link">
                <Link to='/' className='preview-Link'>

                </Link>
                <Link to='/select-plan' className='next-Link'>
                    <button disabled={buttonIsDisabled}>Next step</button>
                </Link>
            </div>
        </form>
    );
};

export default PersonalInfo;