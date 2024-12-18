/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://cnit-solutions.com/',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    exclude: [],
  };
  