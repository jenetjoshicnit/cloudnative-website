import React from 'react';
import CounterUp from '../elements/CounterUp';

const FunfactOne = () => {
    return (
        <>
            <section className="fun-fact-section">
                <div className="auto-container">
                    <div className="fact-counter">
                        <div className="row">
                            {/* Counter block*/}
                            <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner">
                                    <i className="icon flaticon-business-060-graph" />
                                    <div className="count-box">
                                        <CounterUp className="count-text" count={4520} time={3} />
                                    </div>
                                    <h6 className="counter-title">Project completed</h6>
                                </div>
                            </div>
                            {/*Counter block*/}
                            <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                                <div className="inner">
                                    <i className="icon flaticon-business-035-helpline" />
                                    <div className="count-box">
                                        <CounterUp className="count-text" count={326} time={3} />
                                    </div>
                                    <h6 className="counter-title">IT specialists</h6>
                                </div>
                            </div>
                            {/*Counter block*/}
                            <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                                <div className="inner">
                                    <i className="icon flaticon-business-020-hierarchy" />
                                    <div className="count-box">
                                        <CounterUp className="count-text" count={8600} time={3} />
                                    </div>
                                    <h6 className="counter-title">Satisfied clients</h6>
                                </div>
                            </div>
                            {/*Counter block*/}
                            <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                                <div className="inner">
                                    <i className="icon flaticon-business-048-coin" />
                                    <div className="count-box">
                                        <CounterUp className="count-text" count={238} time={3} />
                                    </div>
                                    <h6 className="counter-title">Smart solutions</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FunfactOne;