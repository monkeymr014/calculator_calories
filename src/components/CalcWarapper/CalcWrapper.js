import React from "react";
import CalcItems from "./CalcItems/CalcItems";
import Sum from "../Sum/Sum.js"
import styles from "./CalcWrapper.module.scss"

class CalcWrapper extends React.Component {

   state = {
      suma: '',
   }
   addNumber = (e) => {
      const item = e;
      if (e === '+') { 
         
      }
      else {
         this.setState({
            suma: (this.state.suma + item)
         })
      }
   }
   render() {
      return (
         <>
            <div className={styles.wrapper}>
               <p>{this.state.suma}</p>
               {
                  
                  this.props.items.map(item => (
                     <CalcItems addNumberFn={this.addNumber} {...item} />
                  ))
               }
               <Sum/>
            </div>
         </>
      )
   }
}

export default CalcWrapper;