import React from "react";
import alertStyles from "../styles/AlertPages.module.sass";
import { ButtonComponent } from "../component/ButtonComponent/ButtonComponent";
import { PageTitle } from "../component/PageTitle/PageTitle";
import { Layer } from "../component/Layer/Layer";
import styles from "../styles/Home.module.sass";
import Head from "next/head";

export async function getStaticProps() {
  return {
    props: {
      title: "Thanks For Shot - #1 Site For Your Social Media",
      canonical: "https://maketop.io/thanks-for-shot",
      description:
        "Thanks For Shot and get a lot of high-quality services with fast delivery",
    },
  };
}

const ThanksForShot = (props) => {
  return (
    <div className={styles.background}>
      <Head>
        <title>Thanks For Shot</title>
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
      <div
        style={{
          maxWidth: 1920,
          width: "100%",
          margin: "0 auto",
          overflowX: "hidden",
        }}
      >
        <div className={styles.container}>
          <Layer type="link">
            <div className={`container`}>
              <PageTitle title={"Instagram account"} />
              <div className={alertStyles.alertContainer}>
                <p className={alertStyles.alertTitle}>Thanks for a shot</p>
                <div className={alertStyles.alertBody}>
                  <p className={alertStyles.enjoyTitle}>Enjoy it!</p>
                  <p>
                    Soon you will get your 25 free Likes, come back tomorrow to
                    get new one :)
                    <br />
                    <br />
                    Create an account to pay easier, get more discounts and
                    advantages
                  </p>

                  {/*<div className={alertStyles.alertButtons}>*/}
                  {/*    <ButtonComponent type={"title"} text="Create now" style={{*/}
                  {/*        background: "transparent",*/}
                  {/*        border: " 2px solid rgba(16, 132, 255, 1)"*/}
                  {/*    }}/>*/}
                  {/*    <ButtonComponent type={"title"} text="Sing Up"/>*/}

                  {/*</div>*/}
                </div>
              </div>
            </div>
          </Layer>
        </div>
      </div>
    </div>
  );
};

export default ThanksForShot;
