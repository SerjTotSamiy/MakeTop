import Head from "next/head.js";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ButtonComponent } from "../../../component/ButtonComponent/ButtonComponent.jsx";
import { Layer } from "../../../component/Layer/Layer.jsx";
import { PageTitle } from "../../../component/PageTitle/PageTitle.jsx";
import useAxios from "../../../hooks/useAxios.js";
import styles from "../../../styles/Home.module.sass";
import supportStyles from "../../../styles/Support.module.sass";

const ChatPage = (props) => {
  const [text, setText] = useState("");
  const router = useRouter();
  const { email, code } = router.query;
  const axios = useAxios();
  const onSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("email", email.toString());
    data.append("text", text.toString());
    data.append("code", code.toString());
    await axios.post(
      "https://private-anon-03c61f5a79-popreyv2aliases.apiary-mock.com/api/ticket_send.php",
      data
    );
    const response = await axios.post(
      "https://private-anon-03c61f5a79-popreyv2aliases.apiary-mock.com/api/ticket_messages.php",
      { code }
    );
  };
  return (
    <div className={styles.background}>
      <Head>
        <title>MakeTop | Support</title>
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
          <div className={styles.background} />
          <Layer type="link">
            <div className={`container`}>
              <PageTitle title={"Support Chat"} />
              <form onSubmit={(event) => onSubmit(event)}>
                <div className={supportStyles.support_container}>
                  <p className={supportStyles.support_title}>Support</p>
                  <div className={supportStyles.supportForm}>
                    <div>
                      <textarea
                        placeholder="Message"
                        rows={3}
                        style={{ width: "100%", marginBottom: "20px" }}
                        name="message"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                      />
                    </div>
                  </div>
                  <ButtonComponent
                    type={"title"}
                    text="Send"
                    typeInput="submit"
                  />
                </div>
              </form>
            </div>
          </Layer>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
