import React from 'react';
import Address from "./component/address/Address"
import Navigatioin from "./component/navigation/Navigation"
import Info from "./component/info/Info"
import New from "./component/new/New"
import Discount from "./component/discount/Discount"
import ComeOut from "./component/comeOut/ComeOut"
import Playment from "./component/playment/Playment"
import News from "./component/news/News"
import Connection from "./component/connection/Connection"
import Footer from "./component/footer/Footer"
import './reset.css';

function App() {
  return (
    <div className="App">
      <Address/>
      <Navigatioin/>
      <Info/>
      <New/>
      <Discount/>
      <ComeOut/>
      <Playment/>
      <News/>
      <Connection/>
      <Footer/>
    </div>
  );
}

export default App;
