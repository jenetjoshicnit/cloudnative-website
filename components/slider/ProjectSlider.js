import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);

const ProjectSlider = ({ services }) => {
    return (
        <>
            <Swiper
                slidesPerView={4}
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
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                className="project-carousel"
            >
                {services?.map((item, i) => (
                    <SwiperSlide key={i} className="project-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link href="" className="lightbox-image">
                                        <Image src={`${process.env.NEXT_PUBLIC_API_URL}${item.image?.url}`} 
                                        alt={item.title}
                                        width={370}
                                        height={536}
                                         />
                                    </Link>
                                </figure>
                                <Link href={item.link} className="icon">
                                    <i className="fa fa-long-arrow-alt-right" />
                                </Link>
                            </div>
                            <div className="content-box">
                                <h4 className="title">
                                    <Link href={item.link}>{item.title}</Link>
                                </h4>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default ProjectSlider;
