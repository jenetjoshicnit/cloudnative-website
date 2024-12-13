import Link from 'next/link';
import React from 'react';

const CtaFive = () => {
    return (
        <>
            <section className="call-to-action-five">
                <div className="row g-0">
                    <div className="column col-lg-6 col-md-12 col-sm-12">
                        <div className="title-box">
                            <h2 className="title"><Link href="/page-projects">Improve &amp; Enhance the <br />Tech Projects</Link></h2>
                        </div>
                    </div>
                    <div className="column col-lg-6 col-md-12 col-sm-12">
                        <div className="title-box style-two">
                            <h2 className="title"><Link href="/page-services">The Best Source for <br />IT Solutions</Link></h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CtaFive;