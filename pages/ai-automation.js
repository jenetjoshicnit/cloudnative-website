import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceIntelligentAutomation from '../components/sections/ServiceIntelligentAutomation';

export const getServerSideProps = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service-details?populate=*&sort=createdAt:desc`);
      const result = await response.json();
  
      const service = result.data?.find((item) => item.title === "Supercharge Your Business with Intelligent Automation") || null;
        
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
                <PageTitle pageName="Intelligent Automation" />
                <ServiceIntelligentAutomation service={service} />
            </Layout>
        </>
    )
}
