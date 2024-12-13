import React from 'react';
import Head from 'next/head';
import Layout from "../components/layout/Layout";
import AboutInner from "../components/sections/AboutInner";
// import FunfactOne from "../components/sections/FunfactOne";
import OfferOne from "../components/sections/OfferOne";
import ServiceOne from "../components/sections/ServiceOne";
import PageTitle from "../components/sections/PageTitle";

export default function Home() {
    const title = "About Us";
    const description = "Cloud Native IT Solutions is an ISO-certified IT company offering innovative services, including ERP systems, custom software development, network infrastructure, cybersecurity, and IoT automation solutions. Empower your business with cutting-edge technology tailored to your needs.";
    const url = `${process.env.NEXT_PUBLIC_SITE_URL}/about`;
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
                <PageTitle pageName="About Us" />
                <AboutInner />
                <ServiceOne />
                <OfferOne />
                {/* <FunfactOne /> */}
            </Layout>
        </>
    )
}
