import '../style/SideBar.scss'

const SideBar = () => {
    return (
        <ul className="side-bar">
            <li className="step">
                <p className='step-id'>1</p>
                <div>
                    <h3>STEP 1</h3>
                    <p className='step-tag'>YOUR INFO</p>
                </div>
            </li>
            <li className="step">
                <p className='step-id'>2</p>
                <div>
                    <h3>STEP 2</h3>
                    <p className='step-tag'>SELECT PLAN</p>
                </div>
            </li>
            <li className="step">
                <p className='step-id'>3</p>
                <div>
                    <h3>STEP 3</h3>
                    <p className='step-tag'>ADD-ONS</p>
                </div>
            </li>
            <li className="step">
                <p className='step-id'>4</p>
                <div>
                    <h3>STEP 4</h3>
                    <p className='step-tag'>SUMMARY</p>
                </div>
            </li>
        </ul>
    );
};

export default SideBar;