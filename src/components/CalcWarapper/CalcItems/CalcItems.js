import React from "react";
import styles from "./CalcItems.module.scss"

const CalcItems = ({ item, addNumberFn }) =>
(
   <button
      onClick={() => {
         addNumberFn(item)
      }}
      className={styles.button}>
      {item}
   </button>
)


export default CalcItems;