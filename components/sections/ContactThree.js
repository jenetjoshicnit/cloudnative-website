import Link from 'next/link';
import React from 'react';

const ContactThree = () => {
    return (
        <>
            <section className="contact-section-three pull-up">
                <div className="auto-container">
                    <div className="row">
                        <div className="info-column col-lg-6 col-md-12 col-sm-12 order-2">
                            <div className="inner-column wow fadeInRight">
                                <div className="sec-title light">
                                    <div className="sub-title">Get in Touch</div>
                                    <h2>Get a free quote today</h2>
                                    <div className="text">Web designing in a powerful way of just not an only professions, however, in a passion for our company</div>
                                </div>
                                <div className="contact-info-box-two">
                                    <span className="icon fa fa-map-marker-alt" />
                                    <h6 className="title">Visit Us</h6>
                                    <div className="text">66 Road Broklyn Street, 600 New York, USA</div>
                                </div>
                                <div className="contact-info-box-two">
                                    <span className="icon fa fa-envelope" />
                                    <h6 className="title">Email address</h6>
                                    <div className="text"><Link href="mailto:needhelp@company.com">needhelp@company.com</Link></div>
                                </div>
                                <div className="contact-info-box-two">
                                    <span className="icon fa fa-phone" />
                                    <h6 className="title">Call now</h6>
                                    <div className="text"><Link href="tel:+999000111222">+999 000 111 222</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="form-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="contact-form-two style-two wow fadeInLeft">
                                    <form method="post" action="#" id="contact-form">
                                        <div className="row">
                                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                <input type="text" name="full_name" placeholder="Your Name" required />
                                            </div>
                                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                <input type="email" name="Email" placeholder="Email Address" required />
                                            </div>
                                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                <input type="text" name="Phone" placeholder="Phone Number" required />
                                            </div>
                                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                <input type="text" name="subject" placeholder="Subject" required />
                                            </div>
                                            <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                <textarea name="message" placeholder="Write Message" required={""} />
                                            </div>
                                            <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                <button className="theme-btn btn-style-one hvr-light" type="submit" name="submit-form"><span className="btn-title">Send a message</span></button>
                                            </div>
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

export default ContactThree;