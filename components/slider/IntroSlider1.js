import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import ModalVideo from 'react-modal-video';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useGetInnerWidth from './useGetInnerWidth'; 

SwiperCore.use([Autoplay, Navigation]);

const IntroSlider1 = () => {
  const [isOpen, setOpen] = useState(false);
  const [banners, setBanners] = useState([]);

  const width = useGetInnerWidth();

  const isDesktop = width > 1023;
  const isTablet = width <= 1023 && width > 576;
  const isMobile = width <= 576;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home-banners?populate[IntroSlider][populate]=*`);
      const data = await response.json();
      setBanners(data.data);
    };

    fetchData();
  }, []);

  const getImageUrl = (slider) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL.replace('/api', '');
    if (isMobile) {
      return `${baseUrl}${slider.mobileImage?.url}` 
    } else if (isDesktop) {
      return `${baseUrl}${slider.desktopImage?.url}`
    }
    return `${baseUrl}${slider.tabletImage?.url}`
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: '.swiper-button-prev-style-3',
          nextEl: '.swiper-button-next-style-3',
        }}
        className="project-carousel"
      >
        {banners && banners.map((banner, i) => (
          banner.IntroSlider && banner.IntroSlider.map((slider, j) => (
            <SwiperSlide key={`${i}-${j}`}>
              <div className="slide-item">
                <div
                  className="bg-image"
                  style={{
                    // backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${slider.image.url})`,
                    backgroundImage: `url(${getImageUrl(slider)})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    objectFit: 'cover',
                  }}
                />
                <div className="auto-container">
                  <div className="content-box">
                    
                    {slider.title && (
                      <h3 className="title animate-2">{slider.title}</h3>
                    )}
                    {slider.subtitle && (
                      <span className="sub-title animate-1">{slider.subtitle}</span>
                    )}
                    <div className="btn-box animate-3">
                      {banner.buttonText && banner.buttonLink && (
                        <Link href={banner.buttonLink} className="theme-btn btn-style-one">
                          <span className="btn-title">{banner.buttonText}</span>
                        </Link>
                      )}
                      {slider.exploreButton && slider.exploreLink && (
                        <Link href={slider.exploreLink} className="theme-btn btn-style-one">
                          <span className="btn-title">{slider.exploreButton}</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        ))}
      </Swiper>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default IntroSlider1;

