import React, { Component } from 'react';
import './materialize.css';
import './dashboard.css';
import { Link } from 'react-router-dom'

class Dashboard extends Component {
    constructor() {
        super();
        let retrieveAccData = localStorage.getItem("accounts");

        if (retrieveAccData !== null) {
            retrieveAccData = JSON.parse(retrieveAccData);
            let noOfAcc = retrieveAccData.length;
            this.x = noOfAcc;
            // let cashAvailable = 0;            
            // // for (let i = 0; i <= noOfAcc; i++) {
            // //     cashAvailable = cashAvailable + Number(retrieveAccData[i].amount);
            // // }

            // this.z = cashAvailable;

            // console.log(z);
            // console.log(retrieveData);
        }
        else {
            this.x = 0;
        }

        let retrieveTransData = localStorage.getItem("transactions");

        if (retrieveTransData !== null) {
            retrieveTransData = JSON.parse(retrieveTransData);
            let noOfTrans = retrieveTransData.length;
            this.y = noOfTrans;
            // console.log(noOfAcc);
            // console.log(retrieveData);
        }
        else {
            this.y = 0;
        }
    }

    render() {
        return (
            <div className="container outerBody">
                <div className="row">
                    <div className="accBox orange lighten-5 col s5">
                        <div className="accBoxTitle">Accounts</div>
                        <div className="detailsBox"><div className="noOfAcc">{this.x}
                            <br />
                            accounts
                                                
            </div></div>
            
                        
                            

                        <div className="btnBox">
                            <center>
                                <Link to="/newAcc">
                                    <button className="btn dbBtn orange darken-4 waves-effect waves-light" type="submit" name="action">Create New Account</button>
                                </Link>
                                <Link to="/accounts">
                                    <button className="btn dbBtn orange darken-4 waves-effect waves-light" type="submit" name="action">View All</button>
                                </Link>
                            </center>
                        </div>
                    </div>
                    <div className="col s2"></div>


                    <div className="transBox orange lighten-5 col s5">
                        <div className="transBoxTitle">Transactions</div>
                        <div className="detailsBox"><div className="noOfTrans">{this.y}
                            <br />
                            transactions
            </div></div>
                        <div className="btnBox">
                            <center>
                                <Link to="transactions">
                                    <button className="btn dbBtn orange darken-4 waves-effect waves-light" type="submit" name="action">View All</button>
                                </Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Dashboard;