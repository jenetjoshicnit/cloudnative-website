import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Autoplay, Navigation]);
import Image from 'next/image';

const BlogSlider = ({ blogSlider }) => {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation={{
                prevEl: ".swiper-button-prev-style-3",
                nextEl: ".swiper-button-next-style-3",
            }}
            breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 30 },
                575: { slidesPerView: 1, spaceBetween: 30 },
                767: { slidesPerView: 1, spaceBetween: 30 },
                991: { slidesPerView: 2, spaceBetween: 30 },
                1199: { slidesPerView: 3, spaceBetween: 30 },
                1350: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="news-carousel"
        >
            {blogSlider.map((item, i) => {
                const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                });

                return (
                    <SwiperSlide key={i}>
                        <div className="news-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <a href={item.link}>
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_API_URL}${item.image.url}`} 
                                                alt={item.title}
                                                width={370}
                                                height={334}
                                            />
                                        </a>
                                    </figure>
                                    <span className="date">
                                        <b>{formattedDate.split(' ')[0]}</b> {formattedDate.split(' ')[1]}
                                    </span>
                                </div>
                                <div className="content-box">
                                    <ul className="post-info">
                                        <li><i className="fa fa-user" />{item.postedBy}</li>
                                        <li><i className="fa fa-tag" />{item.category}</li>
                                    </ul>
                                    <h4 className="title"><a href={item.link}>{item.title}</a></h4>
                                </div>
                                <div className="bottom-box">
                                    <a href={item.link} className="read-more">
                                        {item.read_more}<i className="fa fa-long-arrow-alt-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default BlogSlider;
