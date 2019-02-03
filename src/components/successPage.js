import React, { Component } from 'react';
import './materialize.css';
import './displayAccList.css';
import {Link} from 'react-router-dom'

class SuccessPage extends Component {
    render() {
        return (
            <div className="displayBody orange lighten-5 container">
                <div className="displayButtons">
                {/* <Link to="/">
                    <button className="btn goBackBtn orange darken-4 waves-effect waves-light" type="button" name="action">Go Back</button>
                    </Link> */}
                </div>
                <div className="displayTitle">
                    Successfully Performed
        </div>
        <br />
                <div className="displayBottom">
                    <center>
                        <Link to="/">
                        <button className="btn newAccBtn orange darken-4 waves-effect waves-light" type="button" name="action">DashBoard</button>
                        </Link>
                    </center>
                </div>
            </div>
        );
    }
}

export default SuccessPage;