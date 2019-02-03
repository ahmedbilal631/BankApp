import React, { Component } from 'react';
import './App.css';
import Header from './components/Header_09112018';
// import Content from './components/content_10112018.js';
// import Content from './components/content_10112018';
import NewAcc from './components/addAcc.js';
import dashBoard from './components/dashBoard.js';
import DisplayAcc from './components/displayAccList.js';
import SuccessPage from './components/successPage.js';
import DetailAcc from './components/detailAcc.js';
import DetailTrans from './components/detailTrans.js';
import Deposit from './components/depositPage.js';
import Withdraw from './components/withdrawPage.js';
import DisplayTrans from './components/displayTransList.js';
import Footer from './components/Footer_09112018';
import DisplayInfo from './components/appInfo.js';
import {BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends Component {

  render() {
    // let y = "This props";
    return (
      // <Content eshna={y}/>
      <BrowserRouter>
      <div>
        <Header />
        {/* <DetailAcc textdp="Chaiwala" /> */}
        <br />
        <Switch>
          <Route path="/newAcc" component={NewAcc} />
          <Route path="/successPage" component={SuccessPage} />
          <Route path="/accounts" component={DisplayAcc} />
          <Route path="/detailAcc" component={DetailAcc} />
          <Route path="/detailTrans" component={DetailTrans} />
          <Route path="/deposit" component={Deposit} />
          <Route path="/withdraw" component={Withdraw} />
          <Route path="/transactions" component={DisplayTrans} />
          <Route path="/appInfo" component={DisplayInfo} />
          <Route exact path="/" component={dashBoard} />
        </Switch>
        <Footer />                 
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
