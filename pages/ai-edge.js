import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceEdge from '../components/sections/ServiceEdge';

export const getServerSideProps = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service-details?populate=*&sort=createdAt:desc`);
      const result = await response.json();
  
      const service = result.data?.find((item) => item.title === "Embedded AI & Edge Computing – Intelligence at Your Fingertips") || null;
        
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
                <PageTitle pageName="Embedded AI & Edge Computing" />
                <ServiceEdge service={service} />
            </Layout>
        </>
    )
}
