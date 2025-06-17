import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ContactInner from "../components/sections/ContactInner";
import MapOne from "../components/sections/MapOne";
import Head from 'next/head';
import TimeSlotBooking from '../components/sections/TimeSlotBooking';

export default function Home() {

    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Contact Us" />
                {/* <TimeSlotBooking /> */}
                <ContactInner />
                 <TimeSlotBooking /> 
                <MapOne />
            </Layout>
        </>
    )
}
