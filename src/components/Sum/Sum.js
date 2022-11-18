import React from "react";
import styles from "./Sum.module.scss"

const Sum = ({suma, items }) => (
<>
  <div className={styles.wrapper}>
    <h2>Kalkulator Kalori</h2>
    <p>Suma: {items}</p>
    <h2 className={styles.title} >{suma}</h2>
  </div>
  </>
);

export default Sum;