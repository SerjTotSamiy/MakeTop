import React from "react";
import styles from "../styles/Home.module.sass";
import { PageTitle } from "../component/PageTitle/PageTitle";
import { Layer } from "../component/Layer/Layer";
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
              <PageTitle title={"Privacy Policy"} />
              <div className={supportStyles.support_container}>
                <p className={supportStyles.support_title}>Terms and conditions: Rules, refund, and privacy</p>
                <div className={supportStyles.support_text}>
                  {" "}
                  <div>
                    <p className={supportStyles.textTitle}>1. Definition</p>
                    <p>
                      <b>Maketop</b> - service at the address maketop.io operated by Qloyd OчU registration code 16257994.
                      <b>Address</b>: Harju maakond, Tallinn, Kesklinna linnaosa, Roseni tn 13, 10111, Estonia, in accordance
                      with laws of Estonia. <br/><b>Warranty</b> - The option of financial compensation for damaged or missing products.
                      <br/>By <b>service</b>, we mean a website. <b>Buyer</b> - a physical or corporate person who requires our services.
                      <br/><b>Ordering</b> - Providing appropriate data and payment. <br/><b>The usage data</b> is information automatically
                      accumulated by the Service's infrastructure (e.g. the duration of a page visit). <br/><b>You</b> mean the person
                      gaining access or making use of the Services and/or the company that the individual is accessing
                      or using the Services on behalf of, as applicable.
                    </p>
                  </div>
                  <div>
                    <p className={supportStyles.textTitle}>2. General rules</p>
                    <ul>
                      <li>You must notify our team in case of any kind of technical error.
                        Free Instagram Followers can only be allowed once to try out our services.</li>
                      <li>Once you have uploaded the profile photo, submitted the accurate information,
                        your profile is unlocked for everyone, you can proceed with the order.</li>
                      <li>If a user declares a dispute with Paypal, his/her account will be blacklisted,
                        as well as suspended.</li>
                      <li>There will be an announcement if there are some changes to our terms.</li>
                    </ul>
                  </div>
                  <div>
                    <p className={supportStyles.textTitle}>
                      3. Using private data sources
                    </p>
                    <p>
                      <br/><b>Attention</b>: We may disclose certain information in connection with the Service to these third-party vendors.
                      <br/><b>Interest</b>: With this new feature, we will continue to give you the same great features and benefits of the Service.
                      <br/><b>Desire</b>: We will continue to work with these third party vendors for your protection.
                      <br/><b>Action</b>: We will never share any of your personal information other than what is strictly required for the service,
                      and all third-party vendors must adhere to our strict privacy policies.
                    </p>
                  </div>
                  <div>
                    <p className={supportStyles.textTitle}>
                      4. Refund
                    </p>
                    <ul>
                      <li>Any order that cannot be fulfilled because we have been unable to contact you
                        or because of an inaccurate profile, we will refund your payment.
                      </li>
                      <li>If you provide inaccurate information that caused the situation that the purchase
                        was delivered to the wrong person, we will not issue a refund.</li>
                      <li>You might be eligible for a full refund for products paid for the day before
                        shipment if you did not get it promptly.</li>
                      <li>You can ask for a refund once within one day of the date of purchase,
                        as long as it's within the warranty period.</li>
                      <li>We don't provide refunds if you order from more than one service unless
                        it's a product that we can give to another customer.</li>
                      <li>Warranty, as well as available data, can be found in the item description.</li>
                    </ul>
                  </div>
                  <div>
                    <p className={supportStyles.textTitle}>
                      5. Terms of delivery
                    </p>
                    <ul>
                      <li>As soon as the transaction is successful, the service will start processing.</li>
                      <li>Your service will not begin if payment has been delayed or canceled.</li>
                      <li>If the service specifies a 24-hour turnaround time, the process starts as soon
                        as payment has gone through. You will receive an order to the mail you specify and then make payment.</li>
                      <li>Please contact us using the form or email at contact@maketop.io if you have not received the service.</li>
                    </ul>
                  </div>
                  <div>
                    <p className={supportStyles.textTitle}>
                      6. Responsibility
                    </p>
                    <ul>
                      <li>It is possible to have your order processed once your account is authenticated
                        to the public, and you upload a profile photo.</li>
                      <li>The service may not look or work quite as expected when we try to use it.
                        This is because each person needs a different level of service.</li>
                      <li>The customer's responsibility is to make sure that the necessary steps are taken after receiving the order.</li>
                      <li>We cannot ensure an accurate performance description if order quantity is greater than the maximum limit.</li>
                      <li>Mailing address of the cardholder: Harju maakond, Tallinn, Kesklinna linnaosa, Roseni tn 13, 10111, Estonia.</li>
                    </ul>
                  </div>
                  <div>
                    <p className={supportStyles.textTitle}>
                      7. Privacy policy
                    </p>
                    <ul>
                      <li>We guarantee that the email address will never be shared with third parties.</li>
                      <li>We reserve the right to email you notifications. These will only be sent
                        to the address provided when creating a ticket or order.</li>
                      <li>All your data is strictly secured, guaranteeing that no third parties
                        will ever know who you are. Your anonymity is fully insured at all times without fail.</li>
                      <li>To protect the users' private data, we only allow direct account access to active customers
                        who have already confirmed phone/email ownership and hold encryption keys securely.
                        Your information will never be given to a third party.</li>
                      <li>Third parties can't tap payments due to the encryption you're using.</li>
                      <li>In rare cases where your card fails or doesn't work, we'll let you know
                        as soon as possible by e-mail and on our website so that you don't lose your money.</li>
                      <li>We use encryption and SSL to protect your privacy. Your card data is not stored or transmitted,
                        and the only exception is through our payment gateways. We don't keep any of your details,
                        such as card information.</li>
                    </ul>
                  </div>
                  <div>
                    <p className={supportStyles.textTitle}>
                      Changes to this Privacy Policy
                    </p>
                    <p>
                      You can always check here for the latest version of our Privacy Policy.
                      We will notify you by email before any changes to this Privacy Policy.
                      Additionally, we will post a notice on our Service and update the "Last Updated"
                      date in this Privacy Policy before the change occurs.
                      We ask that you check this Privacy Policy from time to time for changes.
                      Changes will happen as soon as the new updates are added to this page.
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
