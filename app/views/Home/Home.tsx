import "particles.js";
import * as React from "react";

import * as mountain from "../../assets/images/mountain.png";

import "../../styles/views/Home/Home.scss";

// block, element Modifier
export default class Home extends React.Component {

    public componentDidMount() {
        /* tslint:disable:no-string-literal */
        window["particlesJS"].load("particles-js", "particles.json", () => {
            console.log("callback - particles.js config loaded");
        });
        /* tslint:enable:no-string-literal */
    }

    public render() {
        return (
            <div className="home">
                <div id="particles-js" />
                <div className="home__greeting">
                    <h1 className="home__greeting__title">
                        <span>Hi,</span>
                        <span>I´m Beto,</span>
                        <span>Web Developer.</span>
                    </h1>
                </div>
                <div className="home__container-mountain">
                    <img src={mountain} className="home__background-mountain" />
                </div>
            </div>
        );
    }
}
