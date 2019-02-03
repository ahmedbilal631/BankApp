import React, { Component } from 'react';
import './materialize.css';
import './displayAccList.css';
import {Link} from 'react-router-dom'


class DisplayTrans extends Component {
    state = {
        viewList: '',
        checker: false,
    }
    componentWillMount() {
        let transList = localStorage.getItem("transactions");
        if (transList === null) {
            this.setState({
                viewList: "Nothing to display",
                checker: false,
            });
        }
        else {
            transList = JSON.parse(transList);
            this.setState({
                 viewList: transList,
                checker: true,
             });
            // this.displayList();
        }
    }
    format = () => {
        let transList = localStorage.getItem("transactions");
        if(transList !== null){
            localStorage.removeItem("transactions");
            console.log("Formated!");
        }
    }
    setId= (transId) => {
        console.log("setId Active" + transId);
        localStorage.setItem("accId", transId);
    }
    
    render() {
        return (
            <div className="displayBody orange lighten-5 container">
                <div className="displayButtons">
                    <Link to="/">
                    <button className="btn goBackBtn orange darken-4 waves-effect waves-light" type="submit" name="action">Go Back</button>
                    </Link>
                </div>
                <div className="displayTitle">
                    Transactions
        </div>

                <div className="displayList">
                <table>
                        <tbody>
                            <tr>
                                <th>Account#</th>
                                <th>Name</th>
                                <th>Nature</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                            {this.state.checker === false ? <th>No Transactions</th> : this.state.viewList.map((value, index) =>{
                                return (<tr key={index}>
                                <td><Link to={'/detailTrans'} onClick={() => this.setId(value.transId)}>{value.accNo}</Link></td>
                                <td>{value.name}</td>
                                <td>{value.nature}</td>
                                <td>{value.amount}</td>
                                <td>{value.date}</td>
                                </tr>)
                            })}

                        </tbody>
                    </table>
                    Display List is here
        </div>
                    <div>
                    <center>
                        <Link to="/successPage">
                            <button onClick={this.format} className="btn createBtn orange darken-4 waves-effect waves-light" name="action">Clear All</button>
                        </Link>
                    </center>
                    </div>
            </div>
        );
    }
}

export default DisplayTrans;