import React, { useEffect, useState } from "react";

const ServiceOne = () => {
  const [homeChooseUsData, setHomeChooseUsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/home-pages?populate[HomeChooseUs]=*`
        );
        const result = await response.json();
        const data = result?.data?.find((item) => item.HomeChooseUs);
        if (data?.HomeChooseUs) {
          setHomeChooseUsData(data.HomeChooseUs);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!homeChooseUsData) {
    return <></>;
  }

  return (
    <>
      <section className="services-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">{homeChooseUsData.shortText1}</span>
            <h2>
              {homeChooseUsData.shortText2.split(" ").map((word, index) => (
                <React.Fragment key={index}>
                  {index === 4 && <br />}
                  {word}{" "}
                </React.Fragment>
              ))}
            </h2>
          </div>
          <div className="row">            
            {[
              {
                iconClass: homeChooseUsData.iconClass1,
                barText: homeChooseUsData.barText1,
                description: homeChooseUsData.BarDescription1,
              },
              {
                iconClass: homeChooseUsData.iconClass2,
                barText: homeChooseUsData.barText2,
                description: homeChooseUsData.BarDescription2,
              },
              {
                iconClass: homeChooseUsData.iconClass3,
                barText: homeChooseUsData.barText3,
                description: homeChooseUsData.BarDescription3,
              },
              {
                iconClass: homeChooseUsData.IconClass4,
                barText: homeChooseUsData.barText4,
                description: homeChooseUsData.BarDescription4,
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp`}
                data-wow-delay={`${index * 300}ms`}
              >
                <div className="inner">
                  <i className={item.iconClass} />
                  <h6 className="counter-title">{item.barText}</h6>
                  <div className="text-choose">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceOne;