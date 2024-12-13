import React from 'react';
import Accordion from '../elements/Accordion';

const FaqOne = () => {
    return (
        <>
            <section className="faqs-section">
                <div className="auto-container">
                    <div className="row">
                        <div className="faq-column col-lg-6 col-md-12 col-sm-12 order-4">
                            <div className="faq-bg" style={{ backgroundImage: 'url(./images/icons/pattern-2.jpg)' }} />
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Questions &amp; answers</span>
                                    <h2>See Frequently Asked Questions</h2>
                                </div>
                                <Accordion />
                            </div>
                        </div>
                        <div className="form-column col-lg-6 col-md-12 col-sm-12">
                            <div className="form-bg" style={{ backgroundImage: 'url(./images/background/3.jpg)' }} />
                            <div className="inner-column">
                                <div className="contact-form wow fadeInLeft">
                                    <div className="title-box">
                                        <span className="sub-title">Contact us</span>
                                        <h3>Write Email</h3>
                                    </div>
                                    <form method="post" action="#" id="contact-form">
                                        <div className="form-group">
                                            <input type="text" name="full_name" placeholder="Your Name" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="Email" placeholder="Email Address" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="Phone" placeholder="Phone Number" required />
                                        </div>
                                        <div className="form-group">
                                            <textarea name="message" placeholder="Write a Message" required={""} />
                                        </div>
                                        <div className="form-group">
                                            <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Send a message</span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FaqOne;