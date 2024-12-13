import React from 'react';
import ProjectSlider from '../slider/ProjectSlider';

const ProjectOne = ({ addClass }) => {
    return (
        <>
            <section className={`project-section ${addClass}`}>
                <div className="auto-container">
                    <div className="carousel-outer">
                        <ProjectSlider />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectOne;