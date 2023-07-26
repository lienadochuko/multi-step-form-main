import React, {useEffect, useState} from "react";
// import { useNavigate } from "react-router-dom";
import '../styles/home.css'
// import sidebar from '../assets/bg-sidebar-desktop.svg';
import sidebar1 from '../assets/Untitled design.png';


const Page2 = () => {
    const initValue = {
        name:"",
        email: "",
        phone: ""
    }
    // let navigator = useNavigate();

    const [form, formValue] = useState(initValue)
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(form));
        setisSubmit(true)
    };

    useEffect(() => {
        console.log(form);
        console.log(isSubmit);
        console.log(formErrors);
        formValue(initValue);
        // if (Object.keys(formErrors).length === 0 && isSubmit) {
        //     navigator('./Thankyou', { state: form })
        // }
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [formErrors])

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
        if (!values.phone) {
            errors.phone = "This field is required"
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "This field is required"
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
                <div className="body">
                    <span className="title">Select your plan</span>
                    <span className="instruction">You have the option of monthly or yearly billing</span>
                    <form onSubmit={handleSubmit} className="form">
                    <label className="label">Name</label>                   
                    <input
                        type="text"
                        name="name"
                        className="Name"
                        maxLength={35}
                        placeholder="Venessa Mint"
                        value={form.name}
                        onChange={handleChange}
                        style={{ border: formErrors.name ? '1px solid #FF6257' : '', color: formErrors.name ? '#FF6257' : '', backgroundColor: formErrors.name ? '#ff625741' : '' }}
                    />
                    

                    <button className="button">Next Step</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Page2;