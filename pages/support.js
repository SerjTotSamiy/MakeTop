import React from "react";
import styles from "../styles/Home.module.sass";
import { PageTitle } from "../component/PageTitle/PageTitle";
import { Layer } from "../component/Layer/Layer";
import supportStyles from "../styles/Support.module.sass";
import { ButtonComponent } from "../component/ButtonComponent/ButtonComponent";
import questionsStyle from "../component/Questions/Questions.module.sass";
import Questions from "../component/Questions/Questions";
import { frequentQuestions } from "../shared/questions";
import Head from "next/head";
const Support = () => {
  return (
    <div className={styles.background}>
      <Head>
        <title>MakeTop | Support</title>
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
          <div className={styles.background} />
          <Layer type="link">
            <div className={`container`}>
              <PageTitle title={"Support"} />
              <div className={supportStyles.support_container}>
                <p className={supportStyles.support_title}>Support</p>
                <div className={supportStyles.supportForm}>
                  <div className={supportStyles.firstFormRow}>
                    <div>
                      <p>Your name*</p>
                      <input placeholder="Name" />
                    </div>
                    <div>
                      <p>Your email</p>
                      <input placeholder="Email" />
                    </div>
                  </div>
                  <div>
                    <p>Your message</p>
                    <textarea placeholder="Message" />
                  </div>
                </div>
                <ButtonComponent type={"title"} text="Send" />
                <p style={{ textAlign: "center" }}>
                  Request any information concerning our
                </p>
              </div>
              <div className={questionsStyle.questions}>
                <p className={questionsStyle.questions_title}>
                  FREQUENTLY ASKED QUESTIONS
                </p>
                <span className={questionsStyle.questions_text}>
                  Do you have questions about our service? Here are our most
                  frequently asked questions:
                </span>
                <Questions questions={frequentQuestions} />
              </div>
            </div>
          </Layer>
        </div>
      </div>
    </div>
  );
};

export default Support;
