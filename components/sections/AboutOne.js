import Link from 'next/link';
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
        return <></>;
    }

    const { Features, title, subtitle, Description, buttonText, buttonLink, aboutSection, image1, image2 } = data;

    return (
        <>
            <section className="about-section pt-0">
                <div className="features-section pull-up pt-0">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="row">
                                {Features.map((feature) => (
                                    <div
                                        key={feature.id}
                                        className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                                    >
                                        <div className="inner-box ">
                                            <div className="title-box">
                                                <i className={feature.IconClass} />
                                                <h5 className="title">
                                                    <Link href={feature.FeatureLink}>{feature.FeatureTitle}</Link>
                                                </h5>
                                            </div>
                                            <div className="text">{feature.FeatureDescription}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
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
                                <div className="btm-box">
                                    <Link href={buttonLink} className="theme-btn btn-style-one">
                                        <span className="btn-title">{buttonText}</span>
                                    </Link>
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
