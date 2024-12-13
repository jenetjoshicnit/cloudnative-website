import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const BlogInner = ({ blogs }) => {
  const blogTitle = "Blog";
  const blogDescription = "Explore our latest blogs covering technology, trends, and insights.";
  const blogImage = blogs?.[0]?.image?.url
                    ? `${process.env.NEXT_PUBLIC_API_URL}${blogs[0].image.url}`
                    : defaultImage
  const blogUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog`;
  return (
    <>
      <Head>
        <title>{blogTitle}</title>
        <meta name="description" content={blogDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content={blogTitle} />
        <meta property="og:description" content={blogDescription} />
        <meta property="og:image" content={blogImage} />
        <meta property="og:url" content={blogUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Cloud Native IT Solutions" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogTitle} />
        <meta name="twitter:description" content={blogDescription} />
        <meta name="twitter:image" content={blogImage} />
        <meta name="twitter:url" content={blogUrl} />
      </Head>

    <section className="news-section">
      <div className="auto-container">
        <div className="row">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div key={blog.id} className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay={`${index * 300}ms`}>
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href={blog.slug}>
                        <Image 
                          src={`${process.env.NEXT_PUBLIC_API_URL}${blog.image.url}`}
                          alt={blog.title || 'Blog Image'}
                          width={370}
                          height={334}
                        />
                      </Link>
                    </figure>
                    <span className="date">
                      <b>{new Date(blog.date).getDate()}</b> 
                      {new Date(blog.date).toLocaleString('en-US', { month: 'short' }).toUpperCase()}
                    </span>
                  </div>
                  <div className="content-box">
                    <ul className="post-info">
                      <li><i className="fa fa-user" /> by {blog.author}</li>
                      <li><i className="fa fa-tag" /> {blog.category}</li>
                    </ul>
                    <h4 className="title">
                      <Link href={blog.slug}>{blog.title}</Link>
                    </h4>
                  </div>
                  <div className="bottom-box">
                    <Link href={blog.readMoreLink} className="read-more">
                      Read More <i className="fa fa-long-arrow-alt-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No blogs available.</p>
          )}
        </div>
      </div>
    </section>
    </>
  );
};

export default BlogInner;

