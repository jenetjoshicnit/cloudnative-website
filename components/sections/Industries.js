import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const Industries = () => {
  const [industriesData, setIndustriesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/industries-sections?populate=*`);
        setIndustriesData(response.data.data[0]);
      } catch (error) {
        console.error("Error fetching industries data:", error);
      }
    };

    fetchData();
  }, []);

  if (!industriesData) {
    return <></>;
  }

  const {
    title,
    subtitle,
    description,
    image,
    industry_items: industryItems,
  } = industriesData;

  return (
    <section className="industries-section">
      <div className="auto-container">
        <div className="row">
          <div className="title-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="sec-title light">
                <span className="sub-title">{title}</span>
                <h2>{subtitle}</h2>
                <div className="text">{description}</div>
              </div>
            </div>
          </div>

          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="image-box wow fadeIn">
              <figure className="image">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}${image.url}`}
                  alt={image.alternativeText || "Industry Image"}
                  width={500}
                  height={310}
                />
              </figure>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {industryItems.map((item, index) => (
            <div
              key={item.id}
              className={`feature-block-two col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp`}
              style={{ animationDelay: `${item.delay || index * 200}ms` }}
            >
              <div className="inner-box">
                <i className={item.IconClass} />
                <h6 className="title">
                  {item.title}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
