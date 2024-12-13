import Link from 'next/link';
import React from 'react';

const CtaFour = () => {
    return (
        <>
            <section className="call-to-action-four" style={{ backgroundImage: 'url(images/background/4.jpg)' }}>
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="title-box">
                            <div className="sub-title">We’re here to help to grow your business.</div>
                            <h3 className="title">Looking for the Best IT Business Solutions?</h3>
                        </div>
                        <div className="btn-box">
                            <Link href="/page-about" className="theme-btn btn-style-two hvr-light"><span className="btn-title">Discover more</span></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CtaFour;