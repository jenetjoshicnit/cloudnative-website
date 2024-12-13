import Link from 'next/link';
import React from 'react';

const CtaThree = () => {
    return (
        <>
            <section className="call-to-action-three p-0">
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="title-box">
                            <span className="icon fa fa-network-wired" />
                            <h5 className="title">Need IT solutions &amp; services consultation?</h5>
                        </div>
                        <div className="btn-box">
                            <Link href="/page-services" className="theme-btn btn-style-one bg-light"><span className="btn-title">get solution</span></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CtaThree;