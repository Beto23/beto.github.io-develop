import React, { Component } from "react";
import ReactDOM from 'react-dom';


class Root extends Component {

    render() {
        return (
            <h1>Hi World</h1>
        );
    }
}

ReactDOM.render((
    <Root />
), document.getElementById("app"));

module.hot.accept();
