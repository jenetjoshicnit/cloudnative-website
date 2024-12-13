import Link from "next/link";
import React, { useState } from "react";
import Layout from '../components/layout/Layout';
import BannerFour from "../components/sections/BannerFour";
// import BlogTwo from "../components/sections/BlogTwo";
// import ContactThree from "../components/sections/ContactThree";
// import CtaFive from "../components/sections/CtaFive";
// import CtaTwo from "../components/sections/CtaTwo";
// import Industries from "../components/sections/Industries";
// import ProjectFour from "../components/sections/ProjectFour";
// import ServiceFour from "../components/sections/ServiceFour";
// import TeamTwo from "../components/sections/TeamTwo";
// import WhyChooseThree from "../components/sections/WhyChooseThree";
// import WorkSection from "../components/sections/WorkSection";
// import BlogSlider from '../components/slider/BlogSlider';
// import IntroSlider4 from '../components/slider/IntroSlider4';
// import ProjectSlider from '../components/slider/ProjectSlider';

const Home4 = () => {

    return (
        <>
            <Layout HeaderStyle="four">
                <BannerFour />
                {/* <CtaTwo />
                <ServiceFour />
                <ProjectFour addClass={"style-two text-white"} />
                <WorkSection />
                <WhyChooseThree />
                <Industries />
                <TeamTwo />
                <BlogTwo />
                <ContactThree />
                <CtaFive /> */}

            </Layout>
        </>
    );
};

export default Home4;