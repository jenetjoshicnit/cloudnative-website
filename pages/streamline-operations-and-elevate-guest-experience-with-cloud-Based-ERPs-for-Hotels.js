import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import BlogERP from '../components/sections/BlogERP';

export const getServerSideProps = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog-details?populate[blogDetails][populate]=*&populate[Posts][populate]=*&populate[SocialLinks][populate]`);
        const result = await response.json();

        const blogData = result.data ? result.data[0] : null;

        return {
            props: {
                blogData, 
            },
        };
    } catch (error) {
        console.error('Error fetching blog data:', error);
        return {
            props: {
                blogData: null,
            },
        };
    }
};

export default function Home({blogData}) {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="IBS ERP" />
                <BlogERP blogData={blogData}/>
            </Layout>
        </>
    )
}
