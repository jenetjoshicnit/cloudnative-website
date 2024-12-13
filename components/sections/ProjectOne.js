import React, { useEffect, useState } from 'react';
import ProjectSlider from '../slider/ProjectSlider';

const ProjectOne = ({ addClass }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sliders?populate[services][populate]=*`);
                const result = await response.json();
                setData(result.data); 
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    if (!data) {
        return <></>;
    }

    return (
        <section className={`project-section pb-0 ${addClass}`}>
            <div className="auto-container">
                <div className="sec-title">
                    <div className="row">
                        <div className="col-lg-7">
                            <span className="sub-title"></span>
                            <h2>{data[0]?.title}</h2>
                        </div>
                        <div className="col-lg-5">
                            <div className="text">{data[0]?.description}</div>
                        </div>
                    </div>
                </div>
                <div className="carousel-outer">
                    <ProjectSlider services={data[0]?.services} />
                </div>
            </div>
        </section>
    );
};

export default ProjectOne;
