import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

const BlogERP = ({ blogData}) => {    
    if (!blogData) return <></>;

    const { blogDetails, Posts, SocialLinks } = blogData;

    const title = blogDetails[0]?.title || "Streamline Operations and elevate guest experience with cloud Based-ERPs for Hotels";
    const description = blogDetails[0]?.description || "Streamline Operations and elevate guest experience with cloud Based-ERPs for Hotels";
    const image = blogDetails[0]?.image?.url ? `${process.env.NEXT_PUBLIC_API_URL}${blogDetails[0].image.url}` : "https://admin.cnit-solutions.com/uploads/blog2_63b137c64b.png";
    const url = `${process.env.NEXT_PUBLIC_SITE_URL}/streamline-operations-and-elevate-guest-experience-with-cloud-Based-ERPs-for-Hotels`;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content="ERP" />
                <meta name="author" content={blogDetails[0]?.postedBy || "Admin"} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="og:url" content={url} />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Cloud Native IT Solutions" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
                <meta name="twitter:url" content={url} />
            </Head>

            <section className="blog-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="blog-details__left">
                                <div className="blog-details__img">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_API_URL}${blogDetails[0].image.url}`}
                                        alt={blogDetails[0].image.name}
                                        width={1024}
                                        height={683}
                                    />
                                    <div className="blog-details__date">
                                        <span className="day">{new Date(blogDetails[0].date).getDate()}</span>
                                        <span className="month">{new Date(blogDetails[0].date).toLocaleString('default', { month: 'short' })}</span>
                                    </div>
                                </div>
                                <div className="blog-details__content">
                                    <ul className="list-unstyled blog-details__meta">
                                        <li>
                                            <Link href="">
                                                <i className="fas fa-user-circle"></i> {blogDetails[0].postedBy}
                                            </Link>
                                        </li>
                                    </ul>
                                    <h3 className="blog-details__title font-weight-600">{blogDetails[0].title}</h3>
                                    <p className="blog-details__text-2">
                                        {blogDetails[0].description}
                                    </p>
                                    <h4>{blogDetails[0].subtitle1}</h4>
                                    <p className="blog-details__text-2">
                                        {blogDetails[0].description1[0].children[0].text}
                                    </p>
                                    <h4>{blogDetails[0].subtitle2}</h4>
                                    <p className="blog-details__text-2">
                                        {blogDetails[0].description2[0].children[0].text}
                                    </p>
                                    <h4>{blogDetails[0].subtitle3}</h4>
                                    <p className="blog-details__text-2">
                                        {blogDetails[0].description3[0].children[0].text}
                                    </p>
                                    <h4>{blogDetails[0].subtitle4}</h4>
                                    <p className="blog-details__text-2">
                                        {blogDetails[0].description4[0].children[0].text}
                                    </p>
                                </div>
                                <div className="blog-details__bottom">
                                    <div className="blog-details__social-list">
                                        {SocialLinks.map((link) => (
                                            <Link href={link.social_link} key={link.id}>
                                                <i className={link.IconClass}></i>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-5">
                          <div className="sidebar">
                            <div className="sidebar__single sidebar__post">
                              <h3 className="sidebar__title">{blogData.latestPost}</h3>
                              <ul className="sidebar__post-list list-unstyled">
                                {Posts.map((post) => (
                                  <li key={post.id}>
                                    <div className="sidebar__post-image">
                                      <Image
                                        src={`${process.env.NEXT_PUBLIC_API_URL}${post.postImage.url}`}
                                        alt={post.postTitle}
                                        width={370}
                                        height={334}
                                        className="img-fluid"
                                      />
                                    </div>
                                    <div className="sidebar__post-content">
                                      <h3>
                                        <span className="sidebar__post-content-meta">
                                          <i className="fas fa-user-circle"></i> {post.category}
                                        </span>
                                        <Link href={post.link}>{post.postTitle}</Link>
                                      </h3>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogERP;
