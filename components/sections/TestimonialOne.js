import React from 'react';
import Testimonial from '../slider/Testimonial';

const TestimonialOne = () => {
    return (
        <>
            <section className="testimonial-">
                <div className="auto-container">
                    <div className="title-column text-center">
                        <div className="sec-title">
                            <span className="sub-title">Our feedbakcs</span>
                            <h2>What They’re Talking<br /> About Company</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="testimonial-column col-lg-12">
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

export default TestimonialOne;