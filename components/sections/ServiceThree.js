// import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const ServiceThree = () => {
    const [details, setDetails] = useState([]);
    const [sectionTitle, setSectionTitle] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service-technicals?populate[Details][populate]=*`);
            const data = await response.json();
            
            setSectionTitle(data.data?.[0]?.title || 'Our Technical Partners');
            setDetails(data.data);
        };
        fetchData();
    }, []);

    return (
        <>
            <section className="services-section-three">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>{sectionTitle}</h2>
                    </div>
                    <div className="outer-box">
                        <div className="row justify-content-center">
                            {details?.[0]?.Details?.map((partner, index) => (
                                <div 
                                    key={index} 
                                    className="service-block-three col wow fadeInUp" 
                                    data-wow-delay={`${index * 200}ms`}>
                                    <div className="inner-box">
                                        <Image className="icon" 
                                            src={`${process.env.NEXT_PUBLIC_API_URL}${partner.image.url}`}
                                            alt={partner.image.title}
                                            width={3000}
                                            height={2000} 
                                            />
                                        <h6 className="title">
                                            {partner.title}
                                        </h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceThree;
