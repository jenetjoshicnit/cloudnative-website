import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceLmsZoraAI from '../components/sections/ServiceLmsZoraAI';

export const getServerSideProps = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service-details?populate=*`);
      const result = await response.json();

      const service = result.data?.find((item) => item.title === "ZORA AI: Intelligent Learning Management System (LMS)");
  
      return {
        props: {
          service,
        },
      };
    } catch (error) {
      console.error('Error fetching service details:', error);
      return {
        props: {
          service: null,
        },
      };
    }
  };

export default function Home({ service }) {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="ZORA AI: Intelligent LMS" />
                <ServiceLmsZoraAI service={service} />
            </Layout>
        </>
    )
}
