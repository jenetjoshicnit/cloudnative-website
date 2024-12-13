import React from 'react';
import Testimonial from '../slider/Testimonial';
import Testimonial4 from '../slider/Testimonial4';

const TestimonialFour = () => {
    return (
        <>
            <section className="testimonial-section-four">
                <div className="auto-container">
                    <div className="row">
                        {/* Title Column */}
                        <div className="title-column col-xl-5 col-lg-6 col-md-12">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Our feedbacks</span>
                                    <h2>What They’re Talking About Us</h2>
                                    <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                                </div>
                            </div>
                        </div>
                        {/* Testimonial Column */}
                        <div className="testimonial-column col-xl-7 col-lg-6 col-md-12">
                            <div className="carousel-outer">
                                <div className="testimonial-bg" style={{ backgroundImage: 'url(images/resource/testimonial-bg.png)' }} />
                                <Testimonial4 />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialFour;