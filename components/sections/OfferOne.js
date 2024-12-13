import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const OfferOne = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/offer-abouts?populate=*`);
                const res = await response.json();
                setData(res.data[0]);
            }
            catch (error) {
                console.error("Error:", error);
            }
            finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    if (isLoading) {
        return <></>
    }

    const {shortTitle, title, description, ideaIcon, ideaTitle, iconClass, shortText1, shortText2, shortText3, image} = data;
    
    return (
        <>
            <section className="offer-section">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-lg-6 col-md-12">
                            <div className="inner-column">
                                <div className="sec-title light">
                                    <span className="sub-title">{shortTitle}</span>
                                    <h2>{title}</h2>
                                    <div className="text">{description}</div>
                                </div>
                                <div className="info-box">
                                    <i className={ideaIcon} />
                                    {/* <h5 className="title">{ideaTitle}</h5> */}
                                    <h5 className="title">
                                        {ideaTitle?.split('.')[0]}.
                                        <br />
                                        {ideaTitle?.split('.')[1]?.trim() + '.'}
                                    </h5>
                                </div>
                                <ul className="list-style-two">
                                    <li><i className={iconClass}/>{shortText1}</li>
                                    <li><i className={iconClass} />{shortText2}</li>
                                    <li><i className={iconClass} />{shortText3}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="image-box">
                                    <figure className="image">
                                        <Image 
                                            src={`${process.env.NEXT_PUBLIC_API_URL}${image.url}`}
                                            alt={image.title}
                                             width={930}
                                             height={570}
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OfferOne;