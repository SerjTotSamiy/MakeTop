import React, { useEffect, useState } from "react";
import styles from "./Questions.module.sass";
import { Icon } from "../Icon/Icon";
import Collapsible from "react-collapsible";

const Questions = ({ questions }) => {
  const [activePost, setActivePost] = useState([]);
  const deleteActivePost = (index) => {
    const newPost = activePost.filter((post) => post !== index);
    setActivePost(newPost);
  };

  const CollapseButton = (props) => (
    <Collapsible
      className={styles.accordion}
      openedClassName={styles.accordion}
      trigger={
        <>
          {props.question}
          <Icon
            type="expandmore"
            className={styles.question_icon}
            width="30px"
            height="30px"
          />
        </>
      }
      triggerTagName="button"
      triggerClassName={styles.question}
      triggerOpenedClassName={`${styles.question} ${styles.active}`}
      contentInnerClassName={styles.answer_wrapper}
    >
      <p className={styles.answer}>{props.answer}</p>
    </Collapsible>
  );

  return (
    <div className={styles.question_container}>
      <div className={styles.question_group}>
        {questions
          .filter((item, index) => index < questions.length / 2)
          .map((item) => (
            <CollapseButton
              key={item.index}
              question={item.question}
              answer={item.answer}
            />
          ))}
      </div>
      <div className={styles.question_group}>
        {questions
          .filter((item, index) => index >= questions.length / 2)
          .map((item) => (
            <CollapseButton
              key={item.index}
              question={item.question}
              answer={item.answer}
            />
          ))}
      </div>
    </div>
  );
};

export default Questions;
