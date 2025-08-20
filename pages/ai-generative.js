import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceGenerativeAI from '../components/sections/ServiceGenerativeAI';

export const getServerSideProps = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service-details?populate=*&sort=createdAt:desc`);
      const result = await response.json();
  
      const service = result.data?.find((item) => item.title === "Transform Your Business with Generative AI") || null;
        
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
                <PageTitle pageName="Generative AI" />
                <ServiceGenerativeAI service={service} />
            </Layout>
        </>
    )
}
