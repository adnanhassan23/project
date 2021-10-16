import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './SubComponent/Header/Header.js';
import Home from './Routes/Home';
import Register from './Routes/Registeration/Register'
import Login from "./Routes/Registeration/Login.js"
import Dashboard from "./Routes/UserProfile/Dashboard/Dashboard"
import AccountExchange from "./Routes/Registeration/AccountExchange.js"
import { ProtectedRoute } from "./ProtectedRoutes"
import Auth from './Auth/Auth.js';
import Notification from './Routes/Notification/Notification.js';
import TraderFollowed from './Routes/UserProfile/Profile/Trader_Followed/TraderFollowed.js';
import Positions from './Routes/UserProfile/Profile/Positions/Positions.js';
import SearchTraders from './Routes/UserProfile/Traders/Search/SearchTrader.js';
import TraderProfile from './Routes/UserProfile/Traders/TraderProfile/Feed/TraderProfile.js';
import TraderPositions from './Routes/UserProfile/Traders/TraderProfile/TraderPositon/TraderPositions.js';
import TraderDashboard from './Routes/TraderProfile/Dashboard/Dashboard.js';
import ProfileSetting from './Routes/Setting/Profile.js';
import Security from './Routes/Setting/Security.js';
import ConnectExchange from './Routes/Setting/ConnectExchng.js';
import Social from './Routes/Setting/Social.js';
import Account from './Routes/TraderProfile/TraderAccount/Account.js';
import TraderGraph from './Routes/Graph/TraderGraph.js';
import UserGraph from './Routes/Graph/UserGraph.js';
import Stats from './Routes/Graph/Stats.js';
import TraderStats from './Routes/UserProfile/Traders/TraderProfile/TraderStats/TraderStats.js';


class MainComponent extends Component {

    constructor() {
        super();
        this.state = {
            isAuthenticated: false
        };
    }
    onChange = () => {
        this.setState({ isAuthenticated: Auth.isAuthenticated() })
    }

    // Solving Top bar on the top as refresh
    componentDidMount = () => {
        this.onChange()
    }

    render() {
        const HomePage = () => {
            return (
                <Home />
            )
        }

        return (
            // <div className="main-wrapper">
            <>
                <Header isAuthenticated={this.state.isAuthenticated} />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/Register' component={Register} />
                    <Route exact path='/Login' render={props => (<Login onChange={this.onChange} />)} />
                    <Route exact path='/AccountExchange' component={AccountExchange} />
                    <ProtectedRoute exact path='/Notifications' component={Notification} />
                    <ProtectedRoute exact path='/Dashboard' component={localStorage.getItem('type') == 'User' ? Dashboard : TraderDashboard} />
                    <ProtectedRoute path='/Account/traders_followed' component={localStorage.getItem('type') == 'User' ? TraderFollowed : Account} />
                    <ProtectedRoute path='/Account/Positions' component={Positions} />
                    <ProtectedRoute path='/Account/Feed' component={Account} />
                    <ProtectedRoute path='/Traders/Search' component={SearchTraders} />
                    <ProtectedRoute path='/Trader/:id/Feed' component={TraderProfile} />
                    <ProtectedRoute path={["/Trader/:id/Position", "/Account/Position"]} component={TraderPositions} />
                    <ProtectedRoute path={["/Trader/:id/stats", "/Account/stats"]} component={TraderStats} />
                    <ProtectedRoute path='/Account_Setting/Profile' component={ProfileSetting} />
                    <ProtectedRoute path='/Account_Setting/Security' component={Security} />
                    <ProtectedRoute path='/Account_Setting/Connect_Exchange' component={ConnectExchange} />
                    <ProtectedRoute path='/Account_Setting/Social_Links' component={Social} />
                    {/* <ProtectedRoute path='/Account/stat' component={} /> */}
                    <ProtectedRoute path='/charts' component={localStorage.getItem('type') == 'User' ? UserGraph : TraderGraph} />
                    <Redirect to="/home" />
                </Switch>
                
            </>
            // </div>
        );
    }
}

export default MainComponent;