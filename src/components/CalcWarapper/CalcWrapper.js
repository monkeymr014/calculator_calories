import React from "react";
import CalcItems from "./CalcItems/CalcItems";
import styles from "./CalcWrapper.module.scss"

const CalcWrapper = (props) => (
   <div className={styles.wrapper}>
      {
         props.items.map(item => (
            <CalcItems {...item} />
         ))
      }
   </div>
)

export default CalcWrapper;