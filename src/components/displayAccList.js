import React, { Component } from 'react';
import './materialize.css';
import './displayAccList.css';
import { Link } from 'react-router-dom'

class DisplayAcc extends Component {
    state = {
        viewList: '',
        checker: false,
    }
    componentWillMount() {
        let accList = localStorage.getItem("accounts");
        if (accList === null) {
            this.setState({
                viewList: "Nothing to display",
                checker: false,
            });
        }
        else {
            accList = JSON.parse(accList);
            this.setState({
                 viewList: accList,
                checker: true,
             });
            // this.displayList();
        }
    }
    format = () => {
        let accList = localStorage.getItem("accounts");
        if(accList !== null){
            localStorage.removeItem("accounts");
            
            console.log("Formated!");
        }
        else
        {
            alert("You Have no Account!!");
        }
    }
    setId= (accId) => {
        console.log("setId Active" + accId);
        localStorage.setItem("accId", accId);
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
                    Accounts
        </div>

                <div className="displayList">

                    <table>
                        <tbody>
                            <tr>
                                <th>Account#</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Amount</th>
                            </tr>
                            {this.state.checker === false ? <h5>no accounts</h5> : this.state.viewList.map((value, index) =>{
                                return (<tr key={index}>
                                <td><Link to={'/detailAcc'} onClick={() => this.setId(value.accNo)}>{value.accNo}</Link></td>
                                <td>{value.name}</td>
                                <td>{value.type}</td>
                                <td>{value.amount}</td>
                                </tr>)
                            })}

                        </tbody>
                    </table>
                    Display List is here
        </div>
                <div className="displayBottom">
                    <center>
                        <Link to="/newAcc">
                            <button className="btn newAccBtn orange darken-4 waves-effect waves-light" type="button" name="action">Create a New Account</button>
                        </Link>
                        <Link to="/successPage">
                            <button onClick={this.format} className="btn cleanbtn orange darken-4 waves-effect waves-light" name="action">Clear All</button>
                        </Link>
                    </center>
                </div>
            </div>
        );
    }
}

export default DisplayAcc;