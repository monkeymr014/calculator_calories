import React from "react";
import styles from "./CalcItems.module.scss"


const CalcItems = ({item}) => (
   <button className={styles.button}>{item}</button>
)

export default CalcItems;