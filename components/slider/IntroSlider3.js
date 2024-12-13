import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const IntroSlider3 = () => {

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                }}
                className="project-carousel"
            >
                <SwiperSlide>
                    {/* Slide Item */}
                    <div className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/3.jpg)' }} />
                        <div className="auto-container">
                            <div className="content-box">
                                <span className="sub-title animate-2">Solutions for your businesses</span>
                                <h1 className="title animate-3">Technology Solutaions for Future</h1>
                                <div className="btn-box animate-4">
                                    <Link href="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Slide Item */}
                    {/*  */}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/3.jpg)' }} />
                        <div className="auto-container">
                            <div className="content-box">
                                <span className="sub-title animate-2">Solutions for your businesses</span>
                                <h1 className="title animate-3">Technology Solutaions for Future</h1>
                                <div className="btn-box animate-4">
                                    <Link href="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default IntroSlider3;

