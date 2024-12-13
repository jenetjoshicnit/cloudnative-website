import Link from 'next/link';
import React from 'react';

const ServiceFour = () => {
    return (
        <>
            <section className="services-section-four">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Services we’re offering</span>
                        <h2>We Provide our Clients <br />Best IT Services</h2>
                    </div>
                    <div className="row">
                        {/* Service Block Four */}
                        <div className="service-block-four col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box ">
                                <div className="icon-box">
                                    <i className="icon flaticon-business-002-graph" />
                                </div>
                                <h5 className="title"><Link href="/page-service-details">Product <br />Development</Link></h5>
                                <div className="text">Providing the solutions for tech business</div>
                            </div>
                        </div>
                        {/* Service Block Four */}
                        <div className="service-block-four col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                            <div className="inner-box ">
                                <div className="icon-box">
                                    <i className="icon flaticon-business-012-startup" />
                                </div>
                                <h5 className="title"><Link href="/page-service-details">Digital <br />Marketing</Link></h5>
                                <div className="text">Providing the solutions for tech business</div>
                            </div>
                        </div>
                        {/* Service Block Four */}
                        <div className="service-block-four col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                            <div className="inner-box ">
                                <div className="icon-box">
                                    <i className="icon flaticon-business-046-like" />
                                </div>
                                <h5 className="title"><Link href="/page-service-details">Security <br />System</Link></h5>
                                <div className="text">Providing the solutions for tech business</div>
                            </div>
                        </div>
                        {/* Service Block Four */}
                        <div className="service-block-four col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
                            <div className="inner-box ">
                                <div className="icon-box">
                                    <i className="icon flaticon-business-006-target" />
                                </div>
                                <h5 className="title"><Link href="/page-service-details">UI/UX <br />Designing</Link></h5>
                                <div className="text">Providing the solutions for tech business</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceFour;