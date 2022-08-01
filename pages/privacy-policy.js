import React from "react";
import Link from 'next/link';
import styles from "../styles/Home.module.sass";
import {PageTitle} from "../component/PageTitle/PageTitle";
import {Layer} from "../component/Layer/Layer";
import supportStyles from "../styles/Support.module.sass";
import Head from "next/head";

export async function getStaticProps() {
    return {
        props: {
            title: "MakeTop Privacy Policy",
            canonical: "https://likes.io/privacy-policy",
            description: "MakeTop Privacy Policy",
        },
    };
}

const PrivacyPolicy = (props) => {
    return (
        <div className={styles.background}>
            <Head>
                <title>MakeTop | Privacy Policy</title>
                <meta name="title" property="og:title" content={props.title}/>
                <meta
                    name="description"
                    property="og:description"
                    content={props.description}
                />
                <meta name="twitter:description" content={props.description}/>
                <meta name="url" property="og:url" content={props.canonical}/>
                <link rel="canonical" href={props.canonical}/>
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
                            <PageTitle title={"Privacy Policy"}/>
                            <div className={supportStyles.support_container}>
                                <p className={supportStyles.support_title}>Privacy Policy</p>
                                <div className={supportStyles.support_text}>
                                    {" "}
                                    <p>
                                        By reading this document you submit an agreement between https://maketop.io/
                                        further called Maketop or We and you (further called Customer) on the rules and
                                        conditions listed in this Privacy Policy. If you have some doubts whether to agree
                                        with any statement or word written in this text, please, leave this website and do
                                        not make any purchase on it.
                                        <br />
                                        This document was developed to enclose the main principles of the user’s data use by maketop.io.
                                    </p>


                                    <div>
                                        <p className={supportStyles.textTitle}>
                                            1. Main operations with the Customer’s personal
                                            information that are held by Maketop
                                        </p>
                                        <div>
                                            Likeware collects personal information from the Customer to make the process of purchase
                                            convenient and simple. We do not provide third parties with the information indicated
                                            on the website{" "}<Link href="/"><a target="_blank">https://maketop.io/</a></Link>{" "}
                                            by the Customer including email and contact information listed in the order
                                            the Customer places on the website.
                                            <br />
                                            The website collects the following data from the Customer:
                                            <ul style={{ margin: 0 }}>
                                                <li>Email address for notifications and account access</li>
                                                <li>Personal information to submit an order on the website</li>
                                                <li>Payment data that is necessary to provide payments for purchased services from maketop</li>
                                                <li>Cookies and user data collected by Google Analytics services</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <p className={supportStyles.textTitle}>
                                            2. Main principles Maketop adheres to when operating with the Customer’s data
                                        </p>
                                        <ul>
                                            <li>We provide notifications mailing to the Customer’s email indicated when
                                                registering on the website or submitting an order.</li>
                                            <li>We collect personal information to tailor our services to the Customer’s needs.</li>
                                            <li>We provide anonymity and confidentiality to any user who makes an order/purchase on the website.</li>
                                            <li>
                                                We strictly protect all the data that is required for the account
                                                access of the Customer. These data are not available to third parties
                                                in any case.
                                            </li>
                                            <li>
                                                We provide protection for the Customer’s payment data at the highest level.
                                                In case of any problem occurring with the Customer’s payment card data or information,
                                                Maketop is obliged to immediately inform the Customer via the website’s pages or via
                                                email about the problem to prevent money leakage.
                                            </li>
                                            <li>We collect user’s data for specified purposes listed below.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className={supportStyles.textTitle}>
                                            3. What purposes do We follow by collecting personal data and user information?
                                        </p>
                                        <ul>
                                            <li>
                                                To collect the Customer’s information for further promotions
                                                and notifications about the services and products Maketop offers.
                                            </li>
                                            <li>To detect and prevent potentially violated and illegal activities of the website’s users.</li>
                                            <li>
                                                To analyze and evaluate the services that Maketop
                                                offers including the website’s statistics and analytics
                                                provided by Google Analytics services.
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className={supportStyles.textTitle}>
                                            4. Google Analytics’ use of the Customer’s data
                                        </p>
                                        <p>
                                            Our website uses Google Analytics services provided by Google,
                                            Inc. These services use a special type of user’s data – so-called
                                            ‘cookies’ that are text-format pieces of data located on the Customer’s
                                            computer for further analyses on how the Customer uses the website.
                                            This information is saved and stored on the servers of Google, Inc.
                                            These data are not associated with any other data used by Google.
                                            <br />
                                            You can customize cookies or refuse to provide them to Google Analytics using the following link:
                                            {" "}<Link href="https://tools.google.com/dlpage/gaoptout?hl=en-GB"><a target="_blank">
                                            https://tools.google.com/dlpage/gaoptout?hl=en-GB</a></Link>
                                        </p>
                                    </div>
                                    <div>
                                        <p className={supportStyles.textTitle}>
                                            5. Technologies that we use for the Customer’s data protection
                                        </p>
                                        <p>
                                            Maketop guarantees the safety and confidentiality
                                            of the personal data of the Customer by implementing
                                            double encryption technology on the website.
                                            The website uses SSL encryption that ensures the confidentiality
                                            of your information in the transmission of data. In no case,
                                            we do collect store, or transfer data from your card.
                                            The payment operations are carried out entirely through
                                            the secure server of our payment gateways. Qloyd OU will
                                            not sell, purchase, provide, exchange or in any other manner
                                            disclose Account or Transaction data, or personal information
                                            of or about a Cardholder to anyone, except, it’s Acquirer,
                                            Card networks/associations or in response to valid government demands.
                                        </p>
                                    </div>
                                    <div>
                                        <p className={supportStyles.textTitle}>
                                            6. Do you have any questions about this Privacy Policy document?
                                        </p>
                                        <p>
                                            Maketop  will be glad to answer them. Please, provide
                                            us with feedback via email:
                                            {" "}<Link href="mailto:contact@maketop.io">contact@maketop.io</Link>
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

export default PrivacyPolicy;
