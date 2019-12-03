import React from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/App-reducer";
import Preloader from "./Components/Common/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }


    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }

        return <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>

            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/profile/:userId?" component={() => <ProfileContainer/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/login" render={() => <Login/>}/>
            </div>
        </div>
    }

};

const mapStateToProps = (state) => ({
    initialized:state.app.initialized
});
export default compose(
    withRouter,
    connect(mapStateToProps,{ initializeApp}))(App);
