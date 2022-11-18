import React from "react";
import CalcItems from "./CalcItems/CalcItems";
import Sum from "../Sum/Sum.js"
import styles from "./CalcWrapper.module.scss"

class CalcWrapper extends React.Component {

   state = {
      suma: '',
      item: 0
   }
   addNumber = (e) => {
      const item = e;
      if (e === '+') {
         this.setState((prevState) => ({
            item: parseInt(prevState.item) + parseInt(this.state.suma)
         }))
         this.setState({
            suma: ''
         })
         console.log(this.state.item)
      }
      else if (e === 'C') {
         this.setState((prevState) => ({
            suma: prevState.suma.slice(0, -1)
         }))
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
            />
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