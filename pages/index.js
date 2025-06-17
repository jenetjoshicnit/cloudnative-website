import React from 'react';
import Head from 'next/head';
import Layout from "../components/layout/Layout";
import AboutOne from "../components/sections/AboutOne";
import BannerOne from "../components/sections/BannerOne";
// import BlogOne from "../components/sections/BlogOne";
// import ClientOne from "../components/sections/ClientOne";
// import CtaOne from "../components/sections/CtaOne";
import CtaTwo from "../components/sections/CtaTwo";
// import FaqOne from "../components/sections/FaqOne";
// import FunfactOne from "../components/sections/FunfactOne";
import MapOne from "../components/sections/MapOne";
// import OfferOne from "../components/sections/OfferOne";
import ProjectOne from "../components/sections/ProjectOne";
import ServiceOne from "../components/sections/ServiceOne";
// import TeamOne from "../components/sections/TeamOne";
// import TestimonialOne from "../components/sections/TestimonialOne";
// import ProjectFour from "../components/sections/ProjectFour";
import Industries from '../components/sections/Industries';
import BlogTwo from '../components/sections/BlogTwo';
import ServiceThree from "../components/sections/ServiceThree";
import GoogleReviewsWidget from "google-reviews-widget"
// import GooglrReviews from '../components/sections/GoogleReviews';
import GoogleReviews from '../components/sections/GoogleReviews';

export default function Home() {
    const title = "Cloud Native IT Solutions";
    const description = "Cloud Native IT Solutions is an ISO-certified IT company offering innovative services, including ERP systems, custom software development, network infrastructure, cybersecurity, and IoT automation solutions. Empower your business with cutting-edge technology tailored to your needs.";
    const url = `${process.env.NEXT_PUBLIC_SITE_URL}/`;
    const image =`${process.env.NEXT_PUBLIC_API_URL}/uploads/site_logo_white_76f0f7b859.png`

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* <meta name="robots" content="index, follow" /> */}
                <meta name="keywords" content="ERP Systems, Custom Software Development, Network Infrastructure, Home Automation Solutions, Office Automation, Cybersecurity Services, NFVi Solutions, ISO Certified IT Company, Managed IT Services, Business Automation, IoT Solutions, Cloud-Based IT Services, Data Protection, IT Maintenance Services, Network Virtualization, IT Solutions UAE" />

                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="og:url" content={url} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Cloud Native IT Solutions" />
                

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
                <meta name="twitter:url" content={url} />
            </Head>

            <Layout HeaderStyle="one">
                <BannerOne />
                <AboutOne />
                <ProjectOne  />
                {/* <ProjectFour addClass={"style-two text-white"} /> */}
                <ServiceOne />
                {/* <OfferOne /> */}
                <Industries />
                {/* <ProjectOne /> */}
                {/* <FunfactOne /> */}
                {/* <TestimonialOne /> */}
                {/* <ClientOne /> */}
                {/* <FaqOne /> */}
                <BlogTwo />
                 {/* <GoogleReviewsWidget instanceId='1u5AAWBnP7lhL0r4bOUX' /> */}
                 <GoogleReviews />
                <CtaTwo />
                <ServiceThree />
               
                <MapOne />
            </Layout>
        </>
    )
}
