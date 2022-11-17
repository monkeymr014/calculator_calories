import React from "react";
import CalcItems from "./CalcItems/CalcItems";
import styles from "./CalcWrapper.module.scss"

class CalcWrapper extends React.Component {

   state = {
      suma: '',

   }
   addNumber = (e) => {
      const item = e;

      this.setState({
         suma: (this.state.suma + item)
      })
      console.log(this.state.suma)
   }

   render() {
      return (
         <>
            <div className={styles.wrapper}>
               {
                  this.props.items.map(item => (
                     <CalcItems addNumberFn={this.addNumber}  {...item} />
                  ))
               }
            </div>
            <p>{this.state.suma}</p>
         </>
      )
   }
}

export default CalcWrapper;