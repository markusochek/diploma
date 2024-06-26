import React from 'react';
import {Head} from "./head/Head";
import {Body} from "./body/Body";
import {Foot} from "./foot/Foot";
import './App.css';

function App() {
  return (
    <div className = {"App"}>
        <Head />
        <Body />
        <Foot />
    </div>
  )
}

export default App;
