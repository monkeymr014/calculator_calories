import React, { Children } from "react";
import CalcItems from "./CalcItems/CalcItems";
import Sum from "../Sum/Sum.js"
import styles from "./CalcWrapper.module.scss"

class CalcWrapper extends React.Component {

   state = {
      suma: '',
      item: []
   }
   addNumber = (e) => {
      const item =  e ;
      if (e === '+') {
         
         this.setState(prevState => ({
            item: [...prevState.item +  this.state.suma]
         }))
      
         console.log(this.state.item)
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
            <Sum 
               suma={this.state.suma}
               items={this.state.item}
            ></Sum>
            <div className={styles.wrapper}>
               {
                  this.props.items.map(item => (
                     <CalcItems addNumberFn={this.addNumber} {...item} />
                  ))
               }
            </div>
         </>
      )
   }
}

export default CalcWrapper;