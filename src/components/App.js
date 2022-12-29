import React, { Component } from "react";
import Pokemon from "./Pokemon";
import Header from "./Header";
import Search from "./Search";


class App extends Component {
    render(){
        return (
            <div className="container">
                <Header/>
                <Search/>
                <Pokemon/>
            </div>
        );
    }
}

export default App;