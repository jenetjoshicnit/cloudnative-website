import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceIBSBook from '../components/sections/ServiceIBSBook';

export const getServerSideProps = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service-details?populate=*`);
      const result = await response.json();

      const service = result.data?.find((item) => item.title === "IBS Books: Empower Your Business — Accounting, Inventory & Projects in One");
  
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
                <PageTitle pageName="IBS Book" />
                <ServiceIBSBook service={service} />
            </Layout>
        </>
    )
}
