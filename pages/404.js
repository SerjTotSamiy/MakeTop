import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.sass";
import { Layer } from "../component/Layer/Layer";
import { PageTitle } from "../component/PageTitle/PageTitle";
import alertStyles from "../styles/AlertPages.module.sass";
import { ButtonComponent } from "../component/ButtonComponent/ButtonComponent";
import Head from "next/head";

export async function getStaticProps() {
  return {
    props: {
      title: "404 - MakeTop",
      canonical: "https://maketop.io/404",
      description: "404 Page Not Found Error",
    },
  };
}

const ErrorPage = (props) => {
  const router = useRouter();
  useEffect(() => {
    router.push(router.route.split("/")[1].toLowerCase());
  }, [router]);

  return (
    <div className={styles.background}>
      <Head>
        <title>404</title>
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
              <PageTitle title={"Page not found"} />

              <div className={alertStyles.alertContainer}>
                <p className={alertStyles.alertTitle}>404</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 20,
                    flexWrap: "wrap",
                    maxWidth: 1400,
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className={alertStyles.alertBody}
                    style={{ maxWidth: 360 }}
                  >
                    <p
                      className={alertStyles.enjoyTitle}
                      style={{ color: "white", fontSize: 36 }}
                    >
                      Emily Smith
                    </p>
                    <ButtonComponent type={"title"} text="support@maketop.io" />
                    <p>
                      Request any information concerning our service and your
                      order
                    </p>
                  </div>
                  <div
                    className={alertStyles.alertBody}
                    style={{ maxWidth: 360 }}
                  >
                    <p
                      className={alertStyles.enjoyTitle}
                      style={{ color: "white", fontSize: 36 }}
                    >
                      Ann Brown
                    </p>
                    <ButtonComponent type={"title"} text="pr@maketop.io" />
                    <p>Please, use the email for media and PR</p>
                  </div>
                  <div
                    className={alertStyles.alertBody}
                    style={{ maxWidth: 360 }}
                  >
                    <p
                      className={alertStyles.enjoyTitle}
                      style={{ color: "white", fontSize: 36 }}
                    >
                      Jhon Mayer
                    </p>
                    <ButtonComponent
                      type={"title"}
                      text="partners@maketop.io"
                    />
                    <p>
                      Request any information concerning possible opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Layer>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
