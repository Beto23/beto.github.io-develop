import * as React from "react";
import { render } from "react-dom";

import Home from "./views/Home/Home";

import "./styles/common.scss";

interface IState {
    isLoad: boolean;
}
export default class App extends React.Component {

    public state: IState = {
        isLoad: true,
    };

    public render() {
        return (
            <Home handleLoad={this.handleLoad} />
        );
    }

    private handleLoad = () => {
        setTimeout(() => {
            this.setState({
                isLoad: false,
            });
        }, 800);
    }
}

render((
    <App />
), document.getElementById("app"));

module.hot.accept();
