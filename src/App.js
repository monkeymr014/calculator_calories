import React from "react";
import './index.css'
import CalcWrapper from "./components/CalcWarapper/CalcWrapper";

const numberItems = [
  {
    item: 1,
  },
  {
    item: 2,
  },
  {
    item: 3,
  },
  {
    item: 4,
  },
  {
    item: 5,
  },
  {
    item: 6,
  },
  {
    item: 7,
  },
  {
    item: 8,
  },
  {
    item: 9,
  },
  {
    item: 'C',
  },
  {
    item: '+',
  },
]



class App extends React.Component {

  state =  {
    items: [...numberItems]
  }
  render() {
    return (
      <>
        <div className="wrapper">
        <CalcWrapper   items={this.state.items}/>
        </div>
      </>
    )
  }
};

export default App;