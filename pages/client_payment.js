import React from "react";
import { Layer } from "../component/Layer/Layer";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.sass";
import Head from "next/head";
import {PageTitle} from "../component/PageTitle/PageTitle";
import alertStyles from "../styles/AlertPages.module.sass";

export async function getStaticProps() {
    return {
        props: {
            title: "Thanks For Purchase",
            canonical: "https://maketop.io/SuccessPurchase",
            description:
                "Thanks For Purchase and get a lot of high-quality services with fast delivery",
        },
    };
}

const Client_payment = (props) => {
  const router = useRouter();
  return (
      <div className={styles.background}>
          <Head>
              <title>Thanks For Purchase</title>
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
                          <PageTitle title={"Success Purchase"} />
                          <div className={alertStyles.alertContainer}>
                              <p className={alertStyles.alertTitle}>Thanks for the purchase</p>
                              <div className={alertStyles.alertBody}>
                                  <p className={alertStyles.enjoyTitle}>Enjoy it!</p>
                                  <p>
                                      We will fulfilling your order according to its description.
                                      <br />
                                      If there will be any problems, we will e-mail you.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </Layer>
              </div>
          </div>
      </div>
  );
};

export default Client_payment;
