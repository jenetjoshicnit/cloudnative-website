import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import Careers from '../components/sections/Careers';

export const getServerSideProps = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/careers?populate=*`);
      const data = await response.json();
  
      return {
        props: {
          jobOpenings: data.data || [],
        },
      };
    } catch (error) {
      console.error("Error fetching job openings:", error);
      return {
        props: {
          jobOpenings: [],
        },
      };
    }
  };

export default function Home({ jobOpenings }) {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Careers" />
                <Careers jobOpenings={jobOpenings}/>
            </Layout>
        </>
    )
}
