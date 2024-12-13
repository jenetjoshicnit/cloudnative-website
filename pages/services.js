import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceInner from "../components/sections/ServiceInner";

export const getServerSideProps = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sliders?populate[services][populate]=*`);
        const result = await response.json();
        const data = result.data?.[0];

        return {
            props: {
                data,
            },
        };
    } catch (error) {
        console.error("Error fetching services data:", error);
        return {
            props: {
                data: null,
            },
        };
    }
};

export default function Home({ data }) {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Our Services" />
                <ServiceInner data={data} />
            </Layout>
        </>
    )
}
