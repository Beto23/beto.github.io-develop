import * as React from "react";
import { render } from "react-dom";

import CustomMouse from "./components/CustomMouse/CustomMouse";
// import ScreenLoader from "./components/LoaderScreen/LoaderScreen";
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
            <div>
                <CustomMouse />
                {/* {this.state.isLoad ? <ScreenLoader /> : null} */}
                <Home handleLoad={this.handleLoad} />
            </div>
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
