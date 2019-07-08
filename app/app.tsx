import * as React from "react";
import { render } from "react-dom";

import Home from "./views/Home/Home";

import "./styles/common.scss";

export default class App extends React.Component {

    public render() {
        return (
            <div>
                <Home />
            </div>
        );
    }
}

render((
    <App />
), document.getElementById("app"));

module.hot.accept();
