import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../styles/Page4.css'
import sidebar1 from '../assets/Untitled design.png';


const Page4 = () => {
    let navigator = useNavigate();
    let location = useLocation();
    const [formValue, setFormValue] = useState([]);
    const [formValue6, setFormValue6] = useState('');
    const [formValue4, setFormValue4] = useState('');
    const [formValue3, setFormValue3] = useState([]);
    const [return3, setReturn3] = useState(false);
    const [return2, setReturn2] = useState(false);

    const {
        formValue5,
        formValue1,
        formValue2,
        formValues4 } = location.state;

    useEffect(() => {
        if (return3) {
            const statesToPass = {
                formValues15: formValue4,
                formValues14: formValue1,
                formValues13: formValue2,
            };
            navigator('../Page3', { state: statesToPass });
            // console.log(formValues5)
        }
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [return3])

    useEffect(() => {
        if (return2) {
            const statesToPass = {
                formValues5: formValue4,
            };
            navigator('../Page2', { state: statesToPass });
            console.log(formValue4)
        }
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [return2])

    const goBack2 = (e) => {
        e.preventDefault();
        setReturn2(true);
    }

    const goBack1 = (e) => {
        e.preventDefault();
        setReturn3(true);
    }

    useEffect(() => {
        setFormValue(formValues4)
        setFormValue4(formValue5)
        setFormValue3(formValue1)
        setFormValue6(formValue2)

    }, [formValue1, formValue2, formValue5, formValue6, formValues4])

    const handleChange = (e) => {
        e.preventDefault();
        // console.log(formValue);
        // console.log(formValue3)
        // console.log(formValue6)
        // console.log(formValue4)
        navigator('../Page5');
    }

    let NoOfChosen
    if (formValue.value1 !== '' && formValue.value2 !== '' && formValue.value3 !== '') {
        NoOfChosen = 3;
    }

    let duration
    if (formValue6 === 'false' || formValue6 === null) {
        duration = 'Monthly'
    } else {
        duration = 'Yearly'
    }


    var price = 0;
    if (formValue3 === 'Pro' && formValue6 === 'false') {
        price = 15;
    } else if (formValue3 === 'Pro' && formValue6 === 'true') {
        price = 150;
    } else if (formValue3 === 'Advanced' && formValue6 === 'false') {
        price = 12;
    } else if (formValue3 === 'Advanced' && formValue6 === 'true') {
        price = 120;
    } else if (formValue3 === 'Arcade' && formValue6 === 'false') {
        price = 9;
    } else if (formValue3 === 'Arcade' && formValue6 === 'true') {
        price = 90;
    }

    var addOnPrice = 0;
    var addOnPrice1 = 0;
    var addOnPrice2 = 0;
    if (formValue6 === 'false') {
        addOnPrice2 = 2;
        addOnPrice2 = 2;
        addOnPrice2 = 1;
    } else if (formValue6 === 'true') {
        addOnPrice2 = 20;
        addOnPrice1 = 20;
        addOnPrice = 10;
    }

    var total = price + addOnPrice + addOnPrice1 + addOnPrice2;

    return (
        <div className="container4">
            <div className="wrapper4">
                <img src={sidebar1} alt="sidebar" className="sidebar" />
                <div className="stepswrapper">
                    <div className="steps">
                        <div className="number">1</div>
                        <div className="steps2">
                            <span className="stepNo">STEP 1</span>
                            <span className="stepTitle">YOUR INFO</span>
                        </div>
                    </div>

                    <div className="steps">
                        <div className="number">2</div>
                        <div className="steps2">
                            <span className="stepNo">STEP 2</span>
                            <span className="stepTitle">SELECT PLAN</span>
                        </div>
                    </div>

                    <div className="steps">
                        <div className="number">3</div>
                        <div className="steps2">
                            <span className="stepNo">STEP 3</span>
                            <span className="stepTitle">ADD-ONS</span>
                        </div>
                    </div>

                    <div className="steps1">
                        <div className="number">4</div>
                        <div className="steps2">
                            <span className="stepNo">STEP 4</span>
                            <span className="stepTitle">SUMMARY</span>
                        </div>
                    </div>
                </div>
                <div className="body4">
                    <span className="title">Finishing up</span>
                    {/* <p>formValue: {formValue.name} <br /> formValue: {formValue.email} <br /> formValue: {formValue.phone} <br/>
                formValue1: {formValue1} <br/>formValue1: {formValue2} <br/></p> */}
                    <span className="instruction">Double-check everything looks OK before confirming</span>
                    <div className="wrapperConfirm" style={{ height: NoOfChosen === 3 ? '48%' : '' }}>
                        <div className="wrapperPlan">
                            <div className="info1">
                                <span className="chosen">{formValue3}({duration})</span>
                                <span className="chosen">${price}/{formValue6 === 'false' ? 'mo' : 'yr'}</span>
                            </div>
                            <div className="change" onClick={goBack2}>Change</div>
                        </div>
                        <div className="info" style={{ height: NoOfChosen === 3 ? '15%' : '', display: formValue.value1 !== '' ? '' : 'none' }}>
                            <span className="chosen1">{formValue.value1}</span>
                            <span className="chosen2">+${addOnPrice}/{formValue6 === 'false' ? 'mo' : 'yr'}</span>
                        </div>
                        <div className="info" style={{ height: NoOfChosen === 3 ? '15%' : '', display: formValue.value2 !== '' ? '' : 'none' }}>
                            <span className="chosen1">{formValue.value2}</span>
                            <span className="chosen2">+${addOnPrice2}/{formValue6 === 'false' ? 'mo' : 'yr'}</span>
                        </div>
                        <div className="info" style={{ height: NoOfChosen === 3 ? '15%' : '', display: formValue.value3 !== '' ? '' : 'none' }}>
                            <span className="chosen1">{formValue.value3}</span>
                            <span className="chosen2">+${addOnPrice1}/{formValue6 === 'false' ? 'mo' : 'yr'}</span>
                        </div>
                    </div>
                    <div className="wrapperTotal">
                        <div className="info">
                            <span className="chosen1">Total (per month/year)</span>
                            <span className="chosen3">+${total}/{formValue6 === 'false' ? 'mo' : 'yr'}</span>
                        </div>
                    </div>
                    <div className="buttonHolder4">
                        <button className="button5" onClick={goBack1}>Go Back</button>
                        <button className="button4" onClick={handleChange}>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page4;