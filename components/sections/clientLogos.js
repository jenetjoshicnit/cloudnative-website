import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./clientLogos.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ClientLogos = () => {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  const logos = [
    { id: 1, src: '/client-logos/adek.png', alt: 'ADEK' },
    { id: 2, src: '/client-logos/alef.jpg', alt: 'Alef' },
    { id: 3, src: '/client-logos/anfal.png', alt: 'Anfal' },
    { id: 4, src: '/client-logos/arun%20marine.png', alt: 'Arun Marine' },
    { id: 5, src: '/client-logos/charterschool.png', alt: 'Charter School' },
    { id: 6, src: '/client-logos/faza.png', alt: 'Faza' },
    { id: 7, src: '/client-logos/jazz.png', alt: 'Jazz' },
    { id: 8, src: '/client-logos/jumbo.png', alt: 'Jumbo' },
    { id: 9, src: '/client-logos/mammu-tea.png', alt: 'Mammu Tea' },
    { id: 10, src: '/client-logos/nce.png', alt: 'NCE' },
    { id: 11, src: '/client-logos/novetiq.png', alt: 'Novetiq' },
    { id: 12, src: '/client-logos/rashid-centre.jpg', alt: 'Rashid Centre' },
    { id: 13, src: '/client-logos/vulcan.png', alt: 'Vulcan' },
    { id: 14, src: '/client-logos/Itqan-logo-white.png', alt: 'Itqan' },
    { id: 15, src: '/client-logos/Main-logo.png', alt: 'Main Logo' },
    { id: 16, src: '/client-logos/aggreko.png', alt: 'Aggreko' }
  ];

  return (
    <section className="industries-section">
      <div className="auto-container">
        <div className="row">
          <div className="title-column col-lg-6 col-md-12 col-sm-12">
            <div className="sec-title light">
              <span className="sub-title">Our Clients</span>
              <h2 style={{whiteSpace: 'nowrap'}}>Our clients are everything to us</h2>
              <div className="text">We are committed to providing top-notch services to our clients, ensuring their satisfaction and success.</div>
            </div>
          </div>
        </div>
        <div className="logos-container">
          <Swiper
            spaceBetween={30}
            slidesPerView={5}
            loop={true}
            loopAdditionalSlides={1}
            speed={1000}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              reverseDirection: false
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30
              }
            }}
            className="mySwiper"
          >
            {logos.map((logo) => (
              <SwiperSlide key={logo.id}>
                <div className={styles.logoItem}>
                  <div className={styles.logoWrapper}>
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={240}         
                      height={100}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
