import React, { useState } from "react";
import styles from "../styles/Home.module.sass";
import blogStyles from "../styles/Blog.module.sass";
import { Layer } from "../component/Layer/Layer";
import { PageTitle } from "../component/PageTitle/PageTitle";
import BlogItem from "../component/BlogItem";
import PageItem from "../component/PageItem";
import { Icon } from "../component/Icon/Icon";
import Head from "next/head";
import { useRouter } from "next/router";

export async function getStaticProps() {
  return {
    props: {
      title: "Blog #1 About Your Social Media - MakeTop",
      canonical: "https://maketop.io/blog",
      description:
        "MakeTop Blog. There is a lot of useful information, hacks and tips about using social networks",
    },
  };
}

const Blog = (props) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [];
  for (let i = 1; i < 6; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.background}>
      <div
        style={{
          maxWidth: 1920,
          width: "100%",
          margin: "0 auto",
          overflowX: "hidden",
        }}
      >
        <Head>
          <title>MakeTop | Blog</title>
          <meta name="title" property="og:title" content={props.title} />
          <meta
            name="description"
            property="og:description"
            content={props.description}
          />
          <meta name="twitter:description" content={props.description} />
          <meta name="url" property="og:url" content={props.canonical} />
          <link rel="canonical" href={props.canonical} />
        </Head>
        <div className={styles.container}>
          <Layer type="link">
            <div className={`container`}>
              <PageTitle title={"Blog"} />
              <p className={blogStyles.title}>Blog</p>
              <div className={blogStyles.blogItems}>
                <BlogItem
                  onClick={() =>
                    router.push(
                      `/blog/blog1`,
                      "/blog/why-your-business-account-on-instagram-needs-a-professional-bio"
                    )
                  }
                  text="Why Your Business Account On
                                Instagram Needs A Professional Bio"
                  img="/blogInfoHead.png"
                />
                <BlogItem
                  onClick={() =>
                    router.push(
                      `/blog/blog2`,
                      "/blog/how-to-become-popular-on-social-media"
                    )
                  }
                  text="How to Become Popular on Social Media"
                  img="/blogMainPhoto2.jpg"
                />
                <BlogItem
                  onClick={() =>
                    router.push(
                      `/blog/blog3`,
                      "/blog/how-to-become-instagram-famous-in-3-easy-steps"
                    )
                  }
                  text="How To Become Instagram Famous In 3 Easy Steps"
                  img="/blogMainPhoto3.jpg"
                />
                <BlogItem
                  onClick={() =>
                    router.push(
                      `${router.pathname}/blog4`,
                      "/blog/the-most-popular-influencers-on-instagram-2022"
                    )
                  }
                  text="The Most Popular Influencers on Instagram 2022"
                  img="/blogInfoHead4.png"
                />
                <BlogItem
                  onClick={() =>
                    router.push(
                      `/blog/blog5`,
                      "/blog/20-of-instagram’s-highest-paid-stars-in-2022"
                    )
                  }
                  text="20 of Instagram’s Highest Paid Stars in 2022"
                  img="/blogInfoHead5.png"
                />
                <BlogItem
                  onClick={() =>
                    router.push(
                      `/blog/blog6`,
                      "/blog/20-of-the-most-viewed-youTube-videos-of-all-time-[updated daily]"
                    )
                  }
                  text="20 of the Most Viewed YouTube Videos of all Time [Updated Daily]"
                  img="/blogInfoHead6.png"
                />
                <BlogItem
                  onClick={() =>
                    router.push(
                      `/blog/blog7`,
                      "/blog/who-are-the-richest-stars-on-tikTok?"
                    )
                  }
                  text="Who Are the Richest Stars on TikTok?"
                  img="/blogMainPhoto7.jpg"
                />
              </div>
              <div className={blogStyles.loadMore}>
                <Icon
                  type="replay"
                  width="24px"
                  height="24px"
                  color="#3749FF"
                />
                <p>Load More</p>
              </div>
              <div className={blogStyles.pageButtons}>
                {pages.map((page, index) => {
                  return (
                    <PageItem
                      key={index}
                      page={page}
                      active={currentPage === page}
                      onClick={() => setCurrentPage(page)}
                    />
                  );
                })}
                <PageItem
                  page=">"
                  active={true}
                  onClick={() =>
                    setCurrentPage(
                      currentPage === pages.length ? 1 : currentPage + 1
                    )
                  }
                />
              </div>

              {/*<PaymentError/>*/}
              {/*    <ThanksForShot/>*/}
            </div>
          </Layer>
        </div>
      </div>
    </div>
  );
};

export default Blog;
