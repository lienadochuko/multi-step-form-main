import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../styles/Page3.css'
import sidebar1 from '../assets/Untitled design.png';


const Page3 = () => {
    let navigator = useNavigate();
    let location = useLocation();
    const {
        formValue,
        formValue1,
        formValue2,
        formValues15,
        formValues14,
        formValues13 } = location.state;

    const [formErrors, setFormErrors] = useState({});
    const [formValues4, setFormValue4] = useState([]);
    const [formValues5, setFormValue5] = useState([]);
    const [isSubmit, setisSubmit] = useState(false);
    const [isSubmit1, setisSubmit1] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [selectedOption3, setSelectedOption3] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(selectedOption, selectedOption2, selectedOption3));
        setisSubmit(true)
        // console.log(totalValue);
    };

    useEffect(() => {
        setFormValue4(totalValue);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            if (formValue == null || formValue1 == null || formValue2 == null || formValue === '' || formValue1 === '' || formValue2 === '') {
                const statesToPass = {
                    formValue5: formValues15,
                    formValue1: formValues14,
                    formValue2: formValues13,
                    formValues4: formValues4
                };
                navigator('../Page4', { state: statesToPass });
            } else {
                const statesToPass = {
                    formValue5: formValue,
                    formValue1: formValue1,
                    formValue2: formValue2,
                    formValues4: formValues4
                };
                navigator('../Page4', { state: statesToPass });
            }
            console.log(location.state)
        }
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [formErrors, selectedOption, selectedOption2, selectedOption3, isSubmit])



    const goBack1 = (e) => {
        e.preventDefault();
        setisSubmit1(true);
    }


    useEffect(() => {
        setFormValue5(formValue);
        if (isSubmit1) {
            const statesToPass = {
                formValue5: formValues5,
            };
            navigator('../Page2', { state: statesToPass });
            // console.log(formValues5)
        }
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [selectedOption, selectedOption2, selectedOption3, isSubmit1])

    const validate = (values) => {
        const errors = {};
        if (selectedOption === '' && selectedOption2 === '' && selectedOption3 === '') {
            errors.options = "Please select an plan"
        }
        return errors;
    }

    const totalValue = {
        value1: selectedOption,
        value2: selectedOption2,
        value3: selectedOption3
    }

    const handleChange = (e) => {
        // Destructuring
        const { value, checked } = e.target;
        // console.log(`${value} is ${checked}`);
        if (checked === false) {
            setSelectedOption('');
        } else {
            setSelectedOption(value);
        }
    }
    const handleChange2 = (e) => {
        // Destructuring
        const { value, checked } = e.target;
        // console.log(`${value} is ${checked}`);
        if (checked === false) {
            setSelectedOption2('');
        } else {
            setSelectedOption2(value);
        }
    }
    const handleChange3 = (e) => {
        // Destructuring
        const { value, checked } = e.target;
        // console.log(`${value} is ${checked}`);
        if (checked === false) {
            setSelectedOption3('');
        } else {
            setSelectedOption3(value);
        }
    }
    return (
        <div className="container3">
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
                    <span className="title">Pick add-ons Add-ons</span>
                    {/* <p>formValue: {formValue.name} <br /> formValue: {formValue.email} <br /> formValue: {formValue.phone} <br/>
                formValue1: {formValue1} <br/>formValue1: {formValue2} <br/> {totalValue.value1}  {totalValue.value2}  {totalValue.value3}</p> */}
                    <span className="instruction">help enhance your gaming experience</span>
                    <form onSubmit={handleSubmit} className="form1">
                        <span className="errorText">{formErrors.options}</span>
                        <div className="Wrapper1">
                            <div className="planWrapper">
                                <input type="checkbox"
                                    name="radioed"
                                    id="myCheckbox4"
                                    value="Online service"
                                    // checked={selectedOption === 'option1'}
                                    onChange={handleChange}
                                />
                                <label for="myCheckbox4">
                                    <div className="plan1" >
                                        <span className="planName">Online service</span>
                                        <span className="planPrice">Access to multiplayer games</span>
                                    </div>
                                    <span className="Prices">{formValue2 === 'false' ? '+$1/mo' : '+$10/yr'}</span>
                                </label>
                            </div>
                            <div className="planWrapper">
                                <input type="checkbox"
                                    name="radioed"
                                    id="myCheckbox5"
                                    value="Larger storage"
                                    // checked={selectedOption === 'option2'}
                                    onChange={handleChange2} />
                                <label for="myCheckbox5">
                                    <div className="plan1" >
                                        <span className="planName">Larger storage</span>
                                        <span className="planPrice">Extra 1TB of cloud save</span>
                                    </div>
                                    <span className="Prices">{formValue2 === 'false' ? '+$2/mo' : '+$20/yr'}</span>
                                </label>
                            </div>
                            <div className="planWrapper">
                                <input type="checkbox"
                                    name="radioed"
                                    id="myCheckbox6"
                                    value="Customizable Profile"
                                    // checked={selectedOption === 'option3'}
                                    onChange={handleChange3} />
                                <label for="myCheckbox6">
                                    <div className="plan1" >
                                        <span className="planName">Customizable Profile</span>
                                        <span className="planPrice">Custom theme on your profile</span>
                                    </div>
                                    <span className="Prices">{formValue2 === 'false' ? '+$2/mo' : '+$20/yr'}</span>
                                </label>
                            </div>
                        </div>

                        <div className="buttonHolder1">
                            <button className="button5" onClick={goBack1}>Go Back</button>
                            <button className="button4">Next Step</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Page3;