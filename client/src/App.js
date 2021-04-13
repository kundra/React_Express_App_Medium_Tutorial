import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import NewOrder from "./Forms/NewOrder";
import StockAddition from "./Forms/StockAddition";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: "",
            value: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.fullName);
        event.preventDefault();
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Murphy Sales & Stock Tracker</h1>
                </header>
                <p className="App-intro">{this.state.apiResponse}</p>

                <BrowserRouter>
                    <Switch>
                        <Route path="/newOrder">
                            <NewOrder/>
                        </Route>
                        <Route path="/stockAddition">
                            <StockAddition/>
                        </Route>
                    </Switch>
                </BrowserRouter>

            </div>
        );
    }
}

export default App;
