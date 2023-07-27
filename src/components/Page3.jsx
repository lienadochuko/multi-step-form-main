import React, { useEffect, useState } from "react";
import { useLocation,  } from "react-router-dom";
// useNavigate
import '../styles/Page2.css'
import pro from '../assets/icon-pro.svg';
import advanced from '../assets/icon-advanced.svg';
import arcade from '../assets/icon-arcade.svg';

import sidebar1 from '../assets/Untitled design.png';


const Page3 = () => {
    // const initValue = {
    //     name: "",
    //     email: "",
    //     phone: ""
    // }
    // let navigator = useNavigate();
    let location = useLocation();
    const { formValue, formValue1, formValue2 } = location.state;

    // const [form, formValue] = useState();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);
    const [ischeck, setCheck] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(selectedOption));
        console.log('Selected option:', selectedOption);
        setisSubmit(true)
    };

    const handleToggle = (e) => {
        setCheck(!ischeck);
    };

    useEffect(() => {
        console.log(selectedOption);
        console.log(isSubmit);
        console.log(formErrors);
        // formValue(initValue);
        // if (Object.keys(formErrors).length === 0 && isSubmit) {
        //     navigator('../', { state: form })
        // }
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [formErrors])

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     formValue({ ...form, [name]: value });
    // };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
      };
  

    const validate = (values) => {
        const errors = {};
        if (!values) {
            errors.options = "Please select an plan"
        }
        return errors;
    }
    return (
        <div className="container">
            <div className="wrapper">
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

                    <div className="steps1">
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
                <div className="body">
                    <span className="title">Select your plan</span>
                    <p>formValue: {formValue.name} <br /> formValue: {formValue.email} <br /> formValue: {formValue.phone}</p>
                    <p>formValue1: {formValue1}</p> <p>formValue1: {formValue2}</p>
                    <span className="instruction">You have the option of monthly or yearly billing</span>
                    <form onSubmit={handleSubmit} className="form1">                      
                        <text className="errorText">{formErrors.options}</text>
                        <div className="Wrapper">
                            <div className="planWrapper">
                                <input type="radio" 
                                name="radioed" 
                                id="myCheckbox1"
                                value="option1"
                                checked={selectedOption === 'option1'}
                                onChange={handleOptionChange}
                                />
                                <label for="myCheckbox1">
                                    <img src={arcade} alt="checkbox" />
                                    <div className="plan" style={{height:ischeck ? '' : '30%'}}>
                                        <span className="planName">Arcade</span>
                                        <span className="planPrice">{ischeck ? '$90/yr' : '$9/mo'}</span>
                                        <span className="planbonus" style={{display:ischeck ? '' : 'none'}}>2 months free</span>
                                    </div>
                                </label>
                            </div>
                            <div className="planWrapper">
                                <input type="radio" 
                                name="radioed"
                                 id="myCheckbox2"
                                 value="option2"
                                 checked={selectedOption === 'option2'}
                                 onChange={handleOptionChange} />
                                <label for="myCheckbox2">
                                    <img src={advanced} alt="checkbox" />
                                    <div className="plan" style={{height:ischeck ? '' : '30%'}}>
                                        <span className="planName">Advanced</span>
                                        <span className="planPrice">{ischeck ? '$120/yr' : '$12/mo'}</span>
                                        <span className="planbonus" style={{display:ischeck ? '' : 'none'}}>2 months free</span>
                                    </div>
                                </label>
                            </div>
                            <div className="planWrapper">
                                <input type="radio" 
                                name="radioed" 
                                id="myCheckbox3" 
                                value="option3"
                                checked={selectedOption === 'option3'}
                                onChange={handleOptionChange}/>
                                <label for="myCheckbox3">
                                    <img src={pro} alt="checkbox" />
                                    <div className="plan" style={{height:ischeck ? '' : '30%'}}>
                                        <span className="planName">Pro</span>
                                        <span className="planPrice">{ischeck ? '$150/yr' : '$15/mo'}</span>
                                        <span className="planbonus" style={{display:ischeck ? '' : 'none'}}>2 months free</span>
                                    </div>
                                </label>
                            </div>
                        </div>  
                        <div className="monthYear">
                                <p>
                                    <text>Monthly</text>
                                    <text>Yearly</text>                                    
                                </p>
                            <input type="checkbox"
                                id="switch"
                                class="checkbox"
                                value={ischeck}
                                onChange={handleToggle}
                               />

                            <label for="switch"
                                class="toggle">                                
                            </label>
                        </div>
                        <button className="button">Next Step</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Page3;