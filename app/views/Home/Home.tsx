import { TweenLite } from "gsap";

import "particles.js";
import * as React from "react";

import * as mountain from "../../assets/images/mountain.png";

import "../../styles/views/Home/Home.scss";

// block, element Modifier

interface IProps {
    handleLoad: any;
}
export default class Home extends React.Component<IProps> {

    private container: HTMLElement;

    public componentDidMount() {
        this.cacheElemets();
        this.onLoadImage();
    }

    public render() {
        return (
            <div className="home">
                <div id="particles-js" />
                <div className="home__greeting">
                    <h1 className="home__greeting__title">
                        <span>Hi,</span>
                        <span>I´m <span>Beto</span>,</span>
                        <span><span>Web</span> Developer.</span>
                    </h1>
                </div>
                <div className="home__container-mountain">
                    <img src={mountain} className="home__background-mountain" />
                </div>
            </div>
        );
    }

    private cacheElemets(): void {
        this.container = document.getElementsByClassName("home")[0] as HTMLElement;
    }

    private init(): void {
        /* tslint:disable:no-string-literal */
        window["particlesJS"].load("particles-js", "particles.json", () => {
            console.log("callback - particles.js config loaded");
        });
        /* tslint:enable:no-string-literal */

        // TweenLite.to(this.container, 1, {x: 0, delay: 1});
        TweenLite.to(this.container, 1, {scale: 1, delay: 1.5});
    }

    private onLoadImage() {
        const img = new Image();
        img.onload = () => {
            this.props.handleLoad();
            this.init();
        };
        img.onerror = () => console.log("image error");
        img.src = mountain;
    }
}
