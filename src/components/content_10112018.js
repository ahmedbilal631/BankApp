import React, { Component } from 'react';
import './content10112018.css';
import NewAcc from './addAcc.js';
import DisplayAcc from './displayAccList.js';
import DisplayTrans from './displayTransList.js';
import Dashboard from './dashBoard.js';
import {BrowserRouter, Switch, Route } from 'react-router-dom'

class Content extends Component {
    constructor(){
        super();
        this.state = {name: "AHMED"};
    }
    render() {
        let x = "javaScript Here";
        
        setTimeout(()=> {
            this.setState({name: "Bilal"});
        }, 1000)
        return (
            <BrowserRouter>
            <div>
            <div>Content Activated</div>
            <div>{x}</div>
            <div>{this.props.eshna}</div>
            <div>{this.state.name}</div>

            {/* <Dashboard /> */}
            {/* <NewAcc /> */}
            {/* <DisplayAcc /> */}
            {/* <DisplayTrans /> */}
            </div>
            </BrowserRouter>
        );
    }
}

export default Content;
