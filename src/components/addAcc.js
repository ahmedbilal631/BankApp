import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './materialize.css';
import './addAcc.css';


class NewAcc extends Component {

    account(name, type, amount, date) {
        this.name = name;
        this.type = type;
        this.amount = Number(amount);
        this.accNo =Math.round(Math.random() * 100000000000000);
        this.date = date;
    }
    generateAcc = () =>{
        //Getting the values from the form
        let name = this.refs.fullName.value;
        let type = this.refs.accType.value;
        let amount = this.refs.amount.value;
        if(name === '' || type === '' || amount === ''){
            alert("Fill form Please");
        }
        else
        {
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
            let accInfo =new this.account(name, type, amount, transDate);
            // alert(accInfo);
            console.log(accInfo);
            // Checking for the old storage data
            if(localStorage.getItem("accounts")===null){
                let accList = [];
                accList.push(accInfo);
                let toSaveAcc = JSON.stringify(accList);
                localStorage.setItem("accounts", toSaveAcc);
        
            }       
            else
            {
                let savedAccList=[]; 
                let newAccList=[];
                savedAccList=localStorage.getItem("accounts");
                newAccList=JSON.parse(savedAccList);
                newAccList.push(accInfo);
                let toSaveAcc=JSON.stringify(newAccList);
                localStorage.setItem("accounts", toSaveAcc);   
            }

            // alert("Form is filled");
            // alert(name + " " + id + " " + type + " " + amount);
        }

        // alert("Thank You Ishaq");
    }

    render() {


        return (
            <div className="container  orange lighten-5 addAccBody">
                <div className="row addAccTop">
                    Enter Account Details Below
            </div>
                <br />

                <div className="formSection">
                    {/* <form> */}
                        <div className="row">
                            <div className="input-field">
                                <input ref="fullName" placeholder="Enter full Name Here" type="text" className="validate" />
                                <label className="active" htmlFor="fullName"><b>Full Name</b></label>
                            </div>
                        </div>
                        <label><b>Account Type</b></label>
                        <select ref="accType" className="browser-default">
                            <option value="" >Choose your option</option>
                            <option value="Current">Current</option>
                            <option value="Saving">Saving</option>
                            <option value="Default">Default</option>
                        </select>
                        <br />
                        <div className="row">
                            <div className="input-field">
                                <input ref="amount" placeholder="1000" type="number" className="validate" />
                                <label className="active" htmlFor="amount"><b>Initial Deposit in Rs:</b></label>
                            </div>
                        </div>
                        {/* Buttons section */}
                        <Link to="/successPage">
                        <button onClick={this.generateAcc} className="btn createBtn orange darken-4 waves-effect waves-light" name="action">Create Account</button>
                    </Link>
                    {/* </form> */}
                </div>

            </div>
        );
    }
}

export default NewAcc;