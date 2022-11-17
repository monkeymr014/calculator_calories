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
        <h1>Kalkulator</h1>
        <CalcWrapper items={this.state.items}/>
      </>
    )
  }
};

export default App;