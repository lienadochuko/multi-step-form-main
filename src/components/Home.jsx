import React from "react";
import '../styles/home.css'
import sidebar from '../assets/bg-sidebar-desktop.svg'


const Home = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <img src={sidebar} alt="sidebar" className="sidebar"/>
                <div className="stepswrapper"><div className="steps"><div className="number">1</div><div className="steps2"><span className="stepNo">STEP 1</span><span className="stepTitle">YOUR INFO</span></div></div></div>
                <div className="body">
                    <span className="title">Personal info</span>
                    <span className="instruction">Please provide your name, email address, and phone number</span>
                    <label className="label">Name</label>
                    <input
                            type="text"
                            name="Name"
                            className="Name"
                            maxLength={35}
                            placeholder="Venessa Mint"
                            // value={form.email}
                            // onChange={handleChange}
                            // style={{ border: formErrors.email ? '1px solid #FF6257' : '', color: formErrors.email ? '#FF6257' : '', backgroundColor: formErrors.email ? '#ff625741' : '' }}
                        />
                    <label className="label">Email Address</label>
                    <input
                            type="text"
                            name="email"
                            className="email"
                            maxLength={35}
                            placeholder="venessamint@"
                            // value={form.email}
                            // onChange={handleChange}
                            // style={{ border: formErrors.email ? '1px solid #FF6257' : '', color: formErrors.email ? '#FF6257' : '', backgroundColor: formErrors.email ? '#ff625741' : '' }}
                        />
                    <label className="label">Phone Number</label>
                    <input
                            type="text"
                            name="phone"
                            className="phone"
                            maxLength={35}
                            placeholder="e.g +1 234 567 890"
                            // value={form.email}
                            // onChange={handleChange}
                            // style={{ border: formErrors.email ? '1px solid #FF6257' : '', color: formErrors.email ? '#FF6257' : '', backgroundColor: formErrors.email ? '#ff625741' : '' }}
                        />

                        <button className="button">Next Step</button>
                </div>
            </div>
        </div>
    );
}

export default Home;