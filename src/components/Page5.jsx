import React from "react";
import '../styles/Page5.css';
import sidebar1 from '../assets/Untitled design.png';
// import sidebarMobile from '../assets/bg-sidebar-mobile.svg';
import thankYou from '../assets/icon-thank-you.svg';

const Page5 = () => {
    return (
        <div className="container5">
            <div className="wrapper5">
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
                <div className="body5">
                    <div className="wrapperthanks">
                        <img src={thankYou} alt="thank you" className="thankyou" />
                        <div className="title">Thank you!</div>
                        <p className="word">Thanks for confirming your subscription! We hope you have
                            fun using our platform. If you ever need support, please feel
                            free to email us at support@loremgaming.com.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page5;