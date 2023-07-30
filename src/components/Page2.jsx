/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../styles/Page2.css'
import pro from '../assets/icon-pro.svg';
import advanced from '../assets/icon-advanced.svg';
import arcade from '../assets/icon-arcade.svg';

import sidebar1 from '../assets/Untitled design.png';


const Page2 = () => {
    let navigator = useNavigate();
    let location = useLocation();


    const {
        formValue5,
    } = location.state;

    const [formValue, setFormValue] = useState();
    const [formValue1, setFormValue1] = useState('');
    const [formValue2, setFormValue2] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);
    const [ischeck, setCheck] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(selectedOption));
        // console.log('Selected option:', selectedOption);
        setisSubmit(true)
    };

    const handleToggle = (e) => {
        setCheck(!ischeck);
        // console.log(location.state)
    };

    useEffect(() => {
        if (location.state == null || location.state === '') {
            setFormValue(formValue5)
        } else {
            setFormValue(location.state);
        }
        setFormValue1(selectedOption);
        setFormValue2(String(ischeck));
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            const statesToPass = {
                formValue: formValue,
                formValue1: formValue1,
                formValue2: formValue2,
            };
            navigator('../Page3', { state: statesToPass });
            console.log(formValue);
        }
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [formErrors, selectedOption, ischeck])

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const goBack = (e) => {
        navigator('../');
    }


    const validate = (values) => {
        const errors = {};
        if (!values) {
            errors.options = "Please select an plan"
        }
        return errors;
    }
    return (
        <div className="container2">
            <div className="wrapper2">
                <img src={sidebar1} alt="sidebar" className="sidebar" />
                <div className="stepswrapper">
                    <div className="steps">
                        <div className="number">1</div>
                        <div className="steps2">
                            <span className="stepNo">STEP 1</span>
                            <span className="stepTitle">YOUR INFO</span>
                        </div>
                    </div>

                    <div className="steps1">
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

                    <div className="steps">
                        <div className="number">4</div>
                        <div className="steps2">
                            <span className="stepNo">STEP 4</span>
                            <span className="stepTitle">SUMMARY</span>
                        </div>
                    </div>
                </div>
                <div className="body2">
                    <span className="title">Select your plan</span>
                    <span className="instruction">You have the option of monthly or yearly billing</span>
                    {/* <p>formValue: {formValue5.email} <br/>
                formValue1: {formValue6} <br/>formValue1: {formValue7} formValue1: {formValue8.value1} </p> */}
                    <form onSubmit={handleSubmit} className="form1">
                        <span className="errorText">{formErrors.options}</span>
                        <div className="Wrapper">
                            <div className="planWrapper">
                                <input type="radio"
                                    name="radioed"
                                    id="myCheckbox1"
                                    value="Arcade"
                                    checked={selectedOption === 'Arcade'}
                                    onChange={handleOptionChange}
                                />
                                <label for="myCheckbox1">
                                    <img src={arcade} alt="checkbox" />
                                    <div className="plan" style={{ height: ischeck ? '' : '30%' }}>
                                        <span className="planName">Arcade</span>
                                        <span className="planPrice">{ischeck ? '$90/yr' : '$9/mo'}</span>
                                        <span className="planbonus" style={{ display: ischeck ? '' : 'none' }}>2 months free</span>
                                    </div>
                                </label>
                            </div>
                            <div className="planWrapper">
                                <input type="radio"
                                    name="radioed"
                                    id="myCheckbox2"
                                    value="Advanced"
                                    checked={selectedOption === 'Advanced'}
                                    onChange={handleOptionChange} />
                                <label for="myCheckbox2">
                                    <img src={advanced} alt="checkbox" />
                                    <div className="plan" style={{ height: ischeck ? '' : '30%' }}>
                                        <span className="planName">Advanced</span>
                                        <span className="planPrice">{ischeck ? '$120/yr' : '$12/mo'}</span>
                                        <span className="planbonus" style={{ display: ischeck ? '' : 'none' }}>2 months free</span>
                                    </div>
                                </label>
                            </div>
                            <div className="planWrapper">
                                <input type="radio"
                                    name="radioed"
                                    id="myCheckbox3"
                                    value="Pro"
                                    checked={selectedOption === 'Pro'}
                                    onChange={handleOptionChange} />
                                <label for="myCheckbox3">
                                    <img src={pro} alt="checkbox" />
                                    <div className="plan" style={{ height: ischeck ? '' : '30%' }}>
                                        <span className="planName">Pro</span>
                                        <span className="planPrice">{ischeck ? '$150/yr' : '$15/mo'}</span>
                                        <span className="planbonus" style={{ display: ischeck ? '' : 'none' }}>2 months free</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="monthYear">
                            <p>
                                <span style={{ color: ischeck ? '' : 'hsl(213, 96%, 18%)' }}>Monthly</span>
                                <span style={{ color: ischeck ? 'hsl(213, 96%, 18%)' : '' }}>Yearly</span>
                            </p>
                            <input type="checkbox"
                                id="switch"
                                className="checkbox"
                                value={ischeck}
                                onChange={handleToggle}
                            />

                            <label for="switch"
                                className="toggle">
                            </label>
                        </div>
                        <div className="buttonHolder1">
                            <button className="button3" onClick={goBack}>Go Back</button>
                            <button className="button2">Next Step</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Page2;