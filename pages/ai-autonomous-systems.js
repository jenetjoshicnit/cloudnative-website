import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceAgenticAI from '../components/sections/ServiceAgenticAI';

export const getServerSideProps = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service-details?populate=*&sort=createdAt:desc`);
      const result = await response.json();
  
      const service = result.data?.find((item) => item.title === "Agentic AI – The Next Frontier in Intelligent Automation") || null;
        
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
                <PageTitle pageName="Agentic AI & Autonomous Systems" />
                <ServiceAgenticAI service={service} />
            </Layout>
        </>
    )
}
