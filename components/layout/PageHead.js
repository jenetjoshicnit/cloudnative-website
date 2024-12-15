import Head from 'next/head';
import React from 'react';

const PageHead = () => {
    return (
        <>
            <Head>
                {/* <title>
                    {headTitle ? headTitle : "Cloud Native IT Solutions"}

                </title> */}
                {/* <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" /> */}
                <link rel="shortcut icon" href={`${process.env.NEXT_PUBLIC_API_URL}/uploads/favicon_04c5624f9d.png`} type="image/x-icon" />
                {/* <link
                    href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                /> */}
            </Head>
        </>
    );
};

export default PageHead;