import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './materialize.css';
import './addAcc.css';


class Deposit extends Component {
    modifiedAcc(name, type, amount, accNo, date) {
        this.name = name;
        this.type = type;
        this.amount = Number(amount);
        this.accNo = Number(accNo);
        this.date = date;
    }
    transaction(accNo, name, nature, amount, leftCash, date) {
        this.accNo = Number(accNo);
        this.name = name;
        this.nature = nature;
        this.amount = amount;
        this.leftCash = leftCash;
        this.date = date;
        this.transId = Number(Math.round(Math.random() * 1000));
    }

    deposit = () => {
        
        //Date activity is here below
        let today = new Date();
        let dateis = today.getDate();
        let monthno = today.getMonth();
        let monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let monthis = monthName[monthno];
        let yearis = today.getFullYear();
        
        let transDate = dateis + "/" + monthis + "/" + yearis;
        console.log(transDate);
        //Date activity is above
        
        let getId = localStorage.getItem("accId");
        getId = Number(getId);
        let getAccInfo = localStorage.getItem("accounts");
        getAccInfo = JSON.parse(getAccInfo);
        //Dividing the orignal array for modifications
        let extractedAcc = getAccInfo.filter((value) => { return value.accNo === getId });
        let toStore = getAccInfo.filter((value) => { return value.accNo !== getId });
        // console.log(extractedAcc);
        // console.log(toStore);
        let dateKeeper = extractedAcc[0].date;
        let oldCash = extractedAcc[0].amount;
        oldCash = Number(oldCash);
        // console.log(oldCash);
        let depositCash = this.refs.depositamount.value;
        depositCash = Number(depositCash);
        // console.log(depositCash);
        let afterDeposit = oldCash + depositCash;
        extractedAcc[0].amount = afterDeposit;
        let toPush = new this.modifiedAcc(extractedAcc[0].name, extractedAcc[0].type, extractedAcc[0].amount, extractedAcc[0].accNo, dateKeeper);
        // console.log(toPush);
        toStore.push(toPush);
        // console.log(toStore);
        //Storing new array
        localStorage.setItem("accounts", JSON.stringify(toStore));
        //transaction controller record
        let newTransList = [];
        let newTrans = new this.transaction(extractedAcc[0].accNo, extractedAcc[0].name, "Credit", depositCash, afterDeposit, transDate);
        console.log(newTrans);
        //transaction storing
        let getTransList = localStorage.getItem("transactions");
        if (getTransList !== null) {
            getTransList = JSON.parse(getTransList);
            getTransList.push(newTrans);
            console.log(getTransList);
            localStorage.setItem("transactions", JSON.stringify(getTransList));
        }
        else {
            newTransList.push(newTrans);
            console.log('New list');
            console.log(newTransList);
            localStorage.setItem("transactions", JSON.stringify(newTransList));

        }
        console.log("Transaction done successfully!!");
    }

    render() {
        return (
            <div className="container  orange lighten-5 addAccBody">
                <div className="row addAccTop">
                    Enter Deposit Details Carefully
            </div>
                <br />

                <div className="formSection">
                    <div className="row">
                        <div className="input-field">
                            <input ref="depositamount" placeholder="1000" type="number" className="validate" />
                            <label className="active" htmlFor="depositamount"><b>Amount</b></label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field">
                            <input ref="details" placeholder="Self" type="text" className="validate" />
                            <label className="active" htmlFor="details"><b>Details (Optional)</b></label>
                        </div>
                    </div>
                    {/* Buttons section */}
                    <center>
                        <Link to="/successPage">
                            <button onClick={this.deposit} className="btn createBtn orange darken-4 waves-effect waves-light" name="action">Submit</button>
                        </Link>
                    </center>
                </div>

            </div>
        );
    }
}

export default Deposit;