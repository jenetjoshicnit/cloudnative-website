import React, { useState, useEffect } from 'react';
import BlogSlider from '../slider/BlogSlider';

const BlogTwo = ({ alternate }) => {
    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?populate[blogSlider][populate]=*`);
                const result = await response.json();
                setBlogData(result.data[0]);
            } catch (error) {
                console.error("Error fetching blog data:", error);
            }
        };
        
        fetchBlogData();
    }, []);

    if (!blogData) {
        return <></>;
    }

    return (
        <section className="news-section-two">
            <div className="auto-container">
                <div className="row">
                    <div className="title-column col-xl-4 col-lg-4 col-md-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">{blogData.title}</span>
                                <h2>{blogData.subtitle}</h2>
                                <div className="text">{blogData.description}</div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-column col-xl-8 col-lg-8 col-md-12">
                        <div className="carousel-outer">
                            <BlogSlider blogSlider={blogData.blogSlider} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogTwo;
