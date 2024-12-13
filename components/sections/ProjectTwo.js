import React from 'react';
import ProjectSlider from '../slider/ProjectSlider';
import ProjectSlider2 from '../slider/ProjectSlider2';

const ProjectTwo = () => {
    return (
        <>
            <section className="project-section-two">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">recently Completed work</span>
                        <h2>Improve &amp; Enhance the <br />Tech Projects</h2>
                    </div>
                    <div className="carousel-outer">
                        <ProjectSlider2 />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectTwo;