



import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const ServiceOne = ({ data }) => {
    if (!data) {
        return <></>;
    }

    const pageTitle ="Our Services";
    const pageDescription = data.shortheading || "Discover our services tailored to your needs.";
    const pageImage = data.services[0]?.image.url
        ? `${process.env.NEXT_PUBLIC_API_URL}${data.services[0].image.url}`
        : "/images/site-logo-white.png";
    const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/services`;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="ERP Systems, Custom Software Development, Network Infrastructure, Home Automation Solutions, Office Automation, Cybersecurity Services, NFVi Solutions, ISO Certified IT Company, Managed IT Services, Business Automation, IoT Solutions, Cloud-Based IT Services, Digital Marketing, IT Maintenance Services" />

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

            <section className="services-section">
                <div className="auto-container">
                    <div className="row">
                        <h2 className="service-heading">{data.heading}</h2>
                        <h4 className="service-heading">{data.shortheading}</h4>
                        
                        {data.services.map((service,index) =>(
                        <div className="service-block col-lg-4 col-md-6 col-sm-12" key={index}>
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link href={service.link}>
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_API_URL}${service.image.url}`}
                                                alt={service.title}
                                                width={370}
                                                height={536}
                                            />
                                        </Link>
                                    </figure>
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link href={service.link}>{service.title}</Link></h5>
                                    <div className="text">{service.description}</div>
                                    <Link href={service.link} className="read-more">{data.read_more}<i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
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