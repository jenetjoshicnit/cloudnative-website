import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServicePostmortemQuorem from '../components/sections/servicePostmortemQuorem';

export const getServerSideProps = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service-details?populate=*&sort=createdAt:desc`);
      const result = await response.json();

      const service = result.data?.find((item) => item.title === "Postmortem Quorum Encryption - A Premium Security Service");
    // const service = result.data?.find((item) => item.title === "Postmortem Quorum Encryption - A Premium Security Service") || null;
  
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
                <PageTitle pageName="Postmortem Quorum Encryption" />
                <ServicePostmortemQuorem service={service} />
            </Layout>
        </>
    )
}
