import React from 'react';
import Brand from '../slider/Brand';

const ClientTwo = ({addClass}) => {
    return (
        <>
            <section className={`clients-section ${addClass}`}>
                <div className="auto-container">
                    <div className="sponsors-outer">
                        <div className="clients-carousel">
                            <Brand />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ClientTwo;