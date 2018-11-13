import * as React from "react";
// import { TweenLite } from "gsap";
import "../../components/noiseBackground/noiseBackground.js";
import "../../styles/views/Home/Home.scss";

interface IProps {
    handleLoad: any;
}
export default class Home extends React.Component<IProps> {

    public render() {
        return (
            <div className="b-home">
                <h1 className="b-home__title-container">
                    <p>BE</p>
                    <p>TO</p>
                </h1>
                <canvas id="canvas" />
            </div>
        );
    }
}
