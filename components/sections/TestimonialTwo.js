import React from 'react';
import Testimonial from '../slider/Testimonial';

const TestimonialTwo = () => {
    return (
        <>
            <section className="testimonial-section-two">
                <div className="auto-container">
                    <div className="row">
                        <div className="title-column col-xl-3 col-lg-12">
                            <div className="sec-title">
                                <span className="sub-title">Our feedbacks</span>
                                <h3>What They’re Talking About Company</h3>
                                <div className="text">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean solldin, lorem is simply free text quis bibendum.</div>
                            </div>
                        </div>
                        <div className="testimonial-column col-xl-9 col-lg-12">
                            <div className="inner-column">
                                <Testimonial />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialTwo;