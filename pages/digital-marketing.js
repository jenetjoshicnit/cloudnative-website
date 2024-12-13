import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceDigitalMarketing from '../components/sections/ServiceDigitalMarketing';

export const getServerSideProps = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service-details?populate=*`);
      const result = await response.json();
  
      const service = result.data?.find((item) => item.title === "Tailored Digital Marketing Solutions for Your Business Growth") || null;
        
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
                <PageTitle pageName="Digital Marketing" />
                <ServiceDigitalMarketing service={service}/>
            </Layout>
        </>
    )
}