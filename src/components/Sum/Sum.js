import React from "react";
import styles from "./Sum.module.scss"

const Sum = ({suma, items }) => (

<>
  <div className={styles.wrapper}>
    <p>suma {items}</p>
    <h2 className={styles.title} >{suma}</h2>
  </div>
  </>
);

export default Sum;