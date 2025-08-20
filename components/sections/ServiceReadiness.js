import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

const ServiceReadiness = ({service}) => {
  if (!service) return <></>;

  const { title, description, subtitle1, description1, subtitle2, description2, subtitle3, description3, image, subServices
  } = service;

  const pageTitle = `${title}`;
  const pageDescription = description;
  const pageImage = `${process.env.NEXT_PUBLIC_API_URL}${image.url}`;
  const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/ai-readiness`;

  return (
    <>
    <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="AI Readiness, AI Readiness Services, AI Readiness Solutions" />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Cloud Native IT Solutions" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        <meta name="twitter:url" content={pageUrl} />

        <link rel="canonical" href={pageUrl} />
      </Head>
      
      <section className="services-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <div className="service-sidebar">
                <div className="sidebar-widget service-sidebar-single">
                  <div className="service-sidebar wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1200ms">
                    <div className="service-list">
                      <ul>
                        {subServices.map((subService, index) => (
                          <li key={subService.id}>
                            <Link className={(index === 1) ? 'current': ''} href={subService.link || ''}>
                              <i className="fas fa-angle-right"></i>
                              <span>{subService.subServiceTitle}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-8 col-lg-8">
              <div className="services-details__content">
                <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}${image.url}`} 
                    alt={image.title}
                    width={1300}
                    height={650}
                />
                <h3 className="mt-4">{title}</h3>
                <p>{description}</p>

                <h4 className="mt-4">{subtitle1}</h4>
                <p>{description1}</p>

                <h4 className="mt-4">{subtitle2}</h4>
                <p>{description2}</p>

                <h4 className="mt-4">{subtitle3}</h4>
                <p>{description3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceReadiness;