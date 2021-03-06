import React, { Component } from 'react';
import './materialize.css';
import './detailAcc.css';
import { Link } from 'react-router-dom'

class DetailAcc extends Component {
    state = {
        viewAccDetail: '',
        // viewName: '',
        // viewAccType: '',
        // viewAmount: '',
    }
    componentWillMount() {
        let getId = localStorage.getItem("accId");
        getId = Number(getId);
        let getList = localStorage.getItem("accounts");
        getList = JSON.parse(getList);
        let extractedAcc = getList.filter((value) => { return value.accNo === getId });
        console.log(extractedAcc);
        this.setState({
            viewAccDetail: extractedAcc,
        });

    }
    delete = () => {
        let getId = localStorage.getItem("accId");
        getId = Number(getId);
        let getList = localStorage.getItem("accounts");
        getList = JSON.parse(getList);
        let extractedAcc = getList.filter((value) => { return value.accNo !== getId });
        localStorage.setItem("accounts", JSON.stringify(extractedAcc));
        console.log(extractedAcc);
    }
    render() {
        return (
            <div className="displayBody orange lighten-5 container">
                <div className="displayButtons">
                    <Link to="/">
                        <button className="btn goBackBtn orange darken-4 waves-effect waves-light" type="button" name="action">Go Back</button>
                    </Link>
                </div>
                <div className="displayTitle">
                    Account Details
        </div>
                <div className="displayList">
                    <table>
                        <tbody>
                            <tr>
                            <th className="tbhd">Title</th>
                            <th className="tbhd">Details</th>
                            </tr>   
                            {
                            this.state.viewAccDetail.map((value, index) => {
                                return(
                                    <tr key={value.accNo} >
                                    <td>Account # </td>
                                    <td>{value.accNo}</td>
                                    </tr>
                                )
                            })
                        }
                        {
                            this.state.viewAccDetail.map((value, index) => {
                                return(
                                    <tr key={value.name} >
                                    <td>Name </td>
                                    <td>{value.name}</td>
                                    </tr>
                                )
                            })
                        }
                        {
                            this.state.viewAccDetail.map((value, index) => {
                                return(
                                    <tr key={value.type} >
                                    <td>Account Type </td>
                                    <td>{value.type}</td>
                                    </tr>
                                )
                            })
                        }
                        {
                            this.state.viewAccDetail.map((value, index) => {
                                return(
                                    <tr key={value.amount} >
                                    <td>Total-Cash</td>
                                    <td>{value.amount}</td>
                                    </tr>
                                )
                            })
                        }
                         {
                            this.state.viewAccDetail.map((value, index) => {
                                return(
                                    <tr key={value.date} >
                                    <td>Date</td>
                                    <td>{value.date}</td>
                                    </tr>
                                )
                            })
                        }

                            </tbody>
                        </table>
                    
                </div>
                <br />
                <div className="displayBottom">
                    <center>
                        <Link to="/deposit">
                            <button className="btn detailAccBtn orange darken-4 waves-effect waves-light" type="button" name="action">Deposit</button>
                        </Link>
                        <Link to="/withdraw">
                            <button className="btn detailAccBtn orange darken-4 waves-effect waves-light" type="button" name="action">Withdraw</button>
                        </Link>
                        <Link to="/successPage">
                            <button onClick={this.delete} className="btn detailAccBtn orange darken-4 waves-effect waves-light" type="button" name="action">Delete</button>
                        </Link>
                    </center>
                </div>
            </div>
        );
    }
}

export default DetailAcc;