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
  const router = useRouter();
  const axios = useAxios();
  const { email, code } = router.query;

  const [text, setText] = useState("");
  const [message, setMessage] = useState(null);
  const onSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("email", email.toString());
    data.append("text", text.toString());
    data.append("code", code.toString());
    const hh = await axios.post(
      "https://private-anon-03c61f5a79-popreyv2aliases.apiary-mock.com/api/ticket_send.php",
      data
    );
    setText("");
    if (hh) {
      onGet().then();
    }
  };
  const onGet = async () => {
    const response = await axios.post(
      "https://private-anon-03c61f5a79-popreyv2aliases.apiary-mock.com/api/ticket_messages.php",
      { code }
    );

    const fixedStr = response.data.replace(/\s/g, "").replaceAll("<br>", " ");
    const str = fixedStr.substring(0, fixedStr.length - 2);
    const msg = JSON.parse(str + "}");
    setMessage(Object.values(msg.data.list));
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
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  maxHeight: "300px",
                  overflowX: "auto",
                }}
              >
                {message &&
                  message.map((msg, index) => {
                    console.log(msg);
                    return (
                      <li
                        key={index}
                        style={{
                          listStyle: "none",
                          clear: "both",
                          display: "block",
                        }}
                      >
                        {msg.is_admin === 0 && (
                          <p
                            style={{
                              backgroundColor: "rgba(246, 245, 255, 1)",
                              border: "2px dashed #C9C2FD",
                              borderRadius: 10,
                              padding: 20,
                              borderTopLeftRadius: 0,
                              display: "inline-block",
                              marginBottom: "14px",
                            }}
                          >
                            {msg.text}
                          </p>
                        )}

                        {msg.is_admin === 1 && (
                          <p
                            style={{
                              backgroundColor: "rgba(246, 245, 255, 1)",
                              border: "2px dashed #C9C2FD",
                              borderRadius: 10,
                              padding: 20,
                              borderTopRightRadius: 0,
                              maxWidth: 700,
                              float: "right",
                              display: "inline-block",
                              marginBottom: "14px",
                            }}
                          >
                            {msg.text}
                          </p>
                        )}
                      </li>
                    );
                  })}
              </ul>
              <form onSubmit={(event) => onSubmit(event)}>
                <div className={supportStyles.support_container}>
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
