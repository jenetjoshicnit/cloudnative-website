import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const IntroSlider4 = () => {



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
                    <div className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/4.jpg)' }} />
                        <div className="auto-container">
                            <div className="content-box">
                                <h1 className="title animate-1">Innovations</h1>
                                <h2 className="sub-title animate-2">Technolgy Partners</h2>
                                <div className="btn-box animate-3">
                                    <Link href="/page-about" className="theme-btn btn-style-one hvr-light"><span className="btn-title">Discover more</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/2.jpg)' }} />
                        <div className="auto-container">
                            <div className="content-box">
                                <h1 className="title animate-1">Innovations</h1>
                                <h2 className="sub-title animate-2">Technolgy Partners</h2>
                                <div className="btn-box animate-3">
                                    <Link href="/page-about" className="theme-btn btn-style-one hvr-light"><span className="btn-title">Discover more</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default IntroSlider4;

