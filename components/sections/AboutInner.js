import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const AboutOne = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/abouts?populate=*`);
                const result = await response.json();
                setData(result.data[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <></>;
    }

    if (!data) {
        return <p>No data available</p>;
    }

    const { title, subtitle, Description, aboutSection, image1, image2 } = data;

    return (
        <>
            <section className="about-section">
                <div className="auto-container">
                    <div className="row">
                        <div
                            className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight"
                            data-wow-delay="600ms"
                        >
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">{title}</span>
                                    <h2>{subtitle}</h2>
                                    <div className="text">
                                        {Description[0]?.children[0]?.text}
                                    </div>
                                </div>
                                <div className="content-box">
                                    {aboutSection.map((section) => (
                                        <div key={section.id} className="about-block">
                                            <i className="icon flaticon-business-018-startup" />
                                            <h5 className="title">{section.shortText}</h5>
                                            <div className="text">{section.shortDescription}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12 order-1">
                            <div className="inner-column">
                                <div className="image-1 overlay-anim wow fadeInUp">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_API_URL}${image1.url}`}
                                        alt={image1.name}
                                        width={3648}
                                        height={5472}
                                    />
                                </div>
                                <div className="image-2 overlay-anim wow fadeInRight">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_API_URL}${image2.url}`}
                                        alt={image2.name}
                                        width={5304}
                                        height={7952}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutOne;
