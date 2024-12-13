import Link from 'next/link';
import React from 'react';

const ServiceTwo = () => {
    return (
        <>
            <section className="services-section-two">
                <div className="auto-container">
                    <div className="row">
                        <div className="title-column col-lg-5 col-md-12">
                            <div className="sec-title light">
                                <span className="sub-title">What we offer</span>
                                <h2>Help you Overcome your Technology Challenges</h2>
                                <Link href="/page-services" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                            </div>
                        </div>
                        <div className="services-column col-lg-7 col-md-12">
                            <div className="inner-column">
                                <div className="row">
                                    <div className="col">
                                        <div className="service-block-two">
                                            <div className="inner-box">
                                                <div className="icon fa fa-globe" />
                                                <h6 className="title"><Link href="/page-service-details">Website</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="service-block-two">
                                            <div className="inner-box">
                                                <div className="icon fab fa-apple" />
                                                <h6 className="title"><Link href="/page-service-details">IOS</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="service-block-two">
                                            <div className="inner-box">
                                                <div className="icon fab fa-android" />
                                                <h6 className="title"><Link href="/page-service-details">Android</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="service-block-two">
                                            <div className="inner-box">
                                                <div className="icon fab fa-ioxhost" />
                                                <h6 className="title"><Link href="/page-service-details">IOT</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceTwo;