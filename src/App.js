import React, { Component } from 'react';
import logo_img from './logo.svg';
import './App.css';
import data from '../data/test.json';


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo_img} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <h1>{data.trackers[0].image}</h1>
            </div>
        );
    }
}

export default App;
