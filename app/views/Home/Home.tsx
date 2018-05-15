import "particles.js";
import * as React from "react";

import "../../styles/views/Home/Home.scss";

// block, element Modifier

interface IProps {
    handleLoad: any;
}
export default class Home extends React.Component<IProps> {

    public render() {
        return (
            <div className="home">
                <div className="home__greeting">
                    <div className="home__greeting-container">
                        <h1 className="home__greeting__title">
                            <span className="say-hello" />
                            <span>I´m</span>
                            <span>José <br/> Alberto</span>
                        </h1>
                        <h2 className="home__greeting__subtitle">Front-End Web Developer</h2>
                    </div>
                </div>
                <div className="home__background-container">
                    <div className="home__background-image" />
                </div>
            </div>
        );
    }

}
