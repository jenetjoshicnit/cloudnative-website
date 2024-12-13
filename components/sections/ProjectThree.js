import Link from 'next/link';
import React from 'react';
import ProjectSlider3 from '../slider/ProjectSlider3';

const ProjectThree = () => {
    return (
        <>
            <section className="project-section-three">
                <div className="auto-container">
                    <div className="sec-title light">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <span className="sub-title">recently Completed work</span>
                                <h2>Improve &amp; Enhance the <br />Tech Projects</h2>
                            </div>
                            <div className="col-lg-5 text-end btn-box">
                                <Link href="/page-projects" className="theme-btn btn-style-two bg-light"><span className="btn-title text-black">View all work</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-outer">
                        <ProjectSlider3 />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectThree;