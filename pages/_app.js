import "../styles/globals.sass";
import React, { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import useAxios from "../hooks/useAxios";
import Head from "next/head";
export const MeContext = createContext();
import { heads } from "../shared/heads";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isSSR, setIsSSR] = useState(true);
  const axios = useAxios();
  const [allInfo, setAllInfo] = useState({});
  const [price, setPrice] = useState({});
  const [additionalPrice, setAdditionalPrice] = useState([]);
  const [comment, setComment] = useState([]);
  const [meta, setMeta] = useState("/");

  useEffect(() => {
    if (!router.pathname) return;

    console.log(router.pathname);
    setMeta(router.pathname);
  }, [router]);

  const getComment = async (service, type) => {
    try {
      const data = new FormData();
      data.append("system", service);
      data.append("service", type);
      const res = await axios.post("/review_list.php", data);

      if (res.status === 200) {
        setComment((prev) => res.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const getAllInfo = async () => {
    try {
      const res = await axios.post("/user_info.php");
      if (res.status === 200) {
        setAllInfo((prev) => res.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const getAdditionalPrice = async (service, type) => {
    try {
      const res = await axios.post("/additional_services.php");

      if (res.status === 200) {
        setAdditionalPrice((prev) =>
          Object.entries(res?.data?.data[service][type]["plans"])
        );
      }
    } catch (e) {
      console.log(e);
    }
  };
  const getPrice = async () => {
    try {
      const res = await axios.post("/get_plans.php");

      if (res.status === 200) {
        setPrice((prev) => res?.data?.data?.Instagram);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllInfo();
    getPrice();
  }, []);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      !isSSR && (
        <>
          <Head>
            <title>MakeTop</title>

            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=1"
            />
            <meta name="locale" property="og:locale" content="en_US" />
            <meta name="type" property="og:type" content="website" />
            <meta
              name="facebook-domain-verification"
              content="qyk8si5jqwk9m6240785cypx4jcij9"
            />
            <meta
              name="google-site-verification"
              content="oxb8vz7MsAwxDNG7gbs5_RfYolWa5a9UITEh9d1CQKE"
            />
            <meta
              name="site_name"
              property="og:site_name"
              content="Maketop.io"
            />
            <meta name="twitter:site" content="@StormlikesN" />
            <meta name="twitter:card" content="summary" />

            <meta
              name="title"
              property="og:title"
              content={heads[meta].title}
            />
            <meta
              name="description"
              property="og:description"
              content={heads[meta].description}
            />
            <meta
              name="twitter:description"
              content={heads[meta].description}
            />
            <meta
              name="url"
              property="og:url"
              content={heads[meta].canonical}
            />
            <link rel="canonical" href={heads[meta].canonical} />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="true"
            />
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
              rel="stylesheet"
            />
          </Head>
          <MeContext.Provider
            value={{
              allInfo,
              getAllInfo,
              price,
              getComment,
              comment,
              additionalPrice,
              getAdditionalPrice,
              setAdditionalPrice,
            }}
          >
            <Component {...pageProps} />
            <link rel="shortcut icon" href="/favicon.ico" />
          </MeContext.Provider>
        </>
      )
    );
  }
}
export default MyApp;
