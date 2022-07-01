import React, {useState} from "react";
import styles from "../styles/Home.module.sass";
import { PageTitle } from "../component/PageTitle/PageTitle";
import { Layer } from "../component/Layer/Layer";
import supportStyles from "../styles/Support.module.sass";
import { ButtonComponent } from "../component/ButtonComponent/ButtonComponent";
import questionsStyle from "../component/Questions/Questions.module.sass";
import Questions from "../component/Questions/Questions";
import { frequentQuestions } from "../shared/questions";
import Head from "next/head";
import useAxios from "../hooks/useAxios";
import success from '../public/support_success.svg'

export async function getStaticProps() {
  return {
    props: {
      title: "MakeTop Support",
      canonical: "https://likes.io/support",
      description: "MakeTop Support",
    },
  };
}

const Support = (props) => {
  const axios = useAxios();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isSupportSuccess, setIsSupportSuccess] = useState(false);

  const formHandler = ({target}) => {
    setErrorMessage('');
    const name = target.name;
    const value = target.value;

    setForm({
      ...form,
      [name]: value
    })
  }

  const sendTicket = () => {
    const isFormFilled = Object.entries(form).every(entry => entry[1] !== '');

    if (isFormFilled) {
      try {
        const data = new FormData();
        data.append("email", form.email);
        data.append("text", form.message);
        data.append("name", form.name);

        const res = axios.post(`/ticket_send.php`, data);

        res.then((e) => {
          if (e?.data?.result === "Ok") {
            setIsSupportSuccess(true);
            console.log('Everything is ok');
            // const users = JSON.parse(localStorage.getItem('users'));
            // const currentUser = {
            //   userName: userName,
            //   userEmail: userEmail,
            //   userData: e.data.data
            // };
            // const result = users ? addUserIntoArray(users, currentUser) : [currentUser];
            // localStorage.setItem('users', JSON.stringify(result));
            // setUserInfo((prev) => e?.data?.data);
            // setType((prev) => e?.data?.data?.plan?.types?.t1);
            setForm({
              name: '',
              email: '',
              message: ''
            });
          }
          setErrorMessage(e?.data?.text);
        });
      } catch (e) {
        console.log(e);
      } finally {

      }
    }
  }

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
              <PageTitle title={"Support"} />
              {!isSupportSuccess
                  ? <div className={supportStyles.support_container}>
                    <p className={supportStyles.support_title}>Support</p>
                    <div className={supportStyles.supportForm}>
                      <div className={supportStyles.firstFormRow}>
                        <div>
                          <p>Your name*</p>
                          <input placeholder="Name" name="name" value={form.name} onInput={formHandler} />
                        </div>
                        <div>
                          <p>Your email</p>
                          <input placeholder="Email" name="email" value={form.email} onInput={formHandler} />
                        </div>
                      </div>
                      <div>
                        <p>Your message</p>
                        <textarea placeholder="Message" name="message" value={form.message} onInput={formHandler} />
                      </div>
                    </div>
                    {errorMessage && <p style={{color: "red", textAlign: "center", marginTop: "20px"}}>{errorMessage}</p>}
                    <ButtonComponent type={"title"} text="Send" onClick={sendTicket} />
                    <p style={{ textAlign: "center" }}>
                      Request any information concerning our
                    </p>
                  </div>
                  : <div style={{textAlign: "center"}}>
                    <img src="/support_success.svg" style={{
                      height: "200px"
                    }} alt="success" />
                  </div>
              }

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
