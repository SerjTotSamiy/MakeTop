import "../styles/globals.sass";
import React, {createContext, useEffect, useState} from "react";
import {useRouter} from "next/router";
import useAxios from "../hooks/useAxios";
import Head from "next/head";
// import AppStore from "../stores/app.store";
import { toJS } from "mobx";
import { useStores } from "../stores";

export const MeContext = createContext();

const MyApp = ({Component, pageProps}) => {
    const axios = useAxios();
    const [allInfo, setAllInfo] = useState({});
    const [price, setPrice] = useState({});
    const [additionalPrice, setAdditionalPrice] = useState([]);
    const [comment, setComment] = useState([]);
    const {
        appStore,
        likesStore,
        followersStore
    } = useStores();

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
        appStore.requestPlans().then((data) => {
            console.log('data', toJS(data));
            likesStore.getData();
            followersStore.getData();
        });
        appStore.requestUser().then(() => console.log('user', toJS(appStore.user)))
    }, []);

    return (
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
            <Head>
                <title>MakeTop</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1"
                />
                <meta name="locale" property="og:locale" content="en_US"/>
                <meta name="type" property="og:type" content="website"/>
                <meta
                    name="facebook-domain-verification"
                    content="qyk8si5jqwk9m6240785cypx4jcij9"
                />
                <meta
                    name="google-site-verification"
                    content="oxb8vz7MsAwxDNG7gbs5_RfYolWa5a9UITEh9d1CQKE"
                />
                <meta name="site_name" property="og:site_name" content="Maketop.io"/>
                <meta name="twitter:site" content="@StormlikesN"/>
                <meta name="twitter:card" content="summary"/>

            </Head>
            <Component {...pageProps} />
            <link rel="shortcut icon" href="/favicon.ico"/>
        </MeContext.Provider>
    );
}

export default MyApp;
