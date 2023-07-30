import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/home.css'
// import sidebar from '../assets/bg-sidebar-desktop.svg';
import sidebar1 from '../assets/Untitled design.png';


const Home = () => {
    const initValue = {
        name: "",
        email: "",
        phone: ""
    }
    let navigator = useNavigate();

    const [form, formValue] = useState(initValue)
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);
    // const [isFocused, setIsFocused] = useState(false);

    // const handleFocus = () => {
    //     setIsFocused(true);
    // };

    // const handleBlur = () => {
    //     setIsFocused(false);
    // };


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(form));
        setisSubmit(true)
    };

    useEffect(() => {
        // console.log(form);
        // console.log(isSubmit);
        // console.log(formErrors);
        // formValue(initValue);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            navigator('./Page2', { state: form })
        }
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [formErrors, form])

    const handleChange = (e) => {
        const { name, value } = e.target;
        formValue({ ...form, [name]: value });
    };

    const validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = "This field is required"
        }
        if (!values.email) {
            errors.email = "This field is required"
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Enter a Valid Email"
        }
        if (!values.phone) {
            errors.phone = "This field is required"
        }
        return errors;
    }

    return (
        <div className="container">
            <div className="wrapper">
                <img src={sidebar1} alt="sidebar" className="sidebar" />
                <div className="stepswrapper">
                    <div className="steps1">
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

                    <div className="steps">
                        <div className="number">4</div>
                        <div className="steps2">
                            <span className="stepNo">STEP 4</span>
                            <span className="stepTitle">SUMMARY</span>
                        </div>
                    </div>
                </div>
                <div className="body">
                    <span className="title">Personal info</span>
                    <span className="instruction">Please provide your name, email address, and phone number</span>
                    <form onSubmit={handleSubmit} className="form">
                        <span className="label_error"><label className="label">Name</label> <span className="error">{formErrors.name}</span></span>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="name"
                            // onFocus={handleFocus}
                            // onBlur={handleBlur}
                            maxLength={35}
                            placeholder="Venessa Mint"
                            value={form.name}
                            onChange={handleChange}
                            style={{ border: formErrors.name ? '1px solid #FF6257' : '', color: formErrors.name ? '#FF6257' : '' }}
                        />
                        <span className="label_error"><label className="label">Email Address</label> <span className="error">{formErrors.email}</span></span>
                        <input
                            type="text"
                            name="email"
                            className="email"
                            maxLength={35}
                            placeholder="venessamint@"
                            value={form.email}
                            onChange={handleChange}
                            style={{ border: formErrors.email ? '1px solid #FF6257' : '', color: formErrors.email ? '#FF6257' : '' }}
                        />
                        <span className="label_error"><label className="label">Phone Number</label> <span className="error">{formErrors.phone}</span></span>
                        <input
                            type="text"
                            name="phone"
                            className="phone"
                            maxLength={12}
                            placeholder="e.g +1 234 567 890"
                            value={form.phone}
                            onChange={handleChange}
                            style={{ border: formErrors.phone ? '1px solid #FF6257' : '', color: formErrors.phone ? '#FF6257' : '' }}
                        />

                        <div className="buttonHolder">
                            <button className="button1">Go Back</button>
                            <button className="button">Next Step</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;