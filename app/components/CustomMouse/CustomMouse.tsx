import * as $ from "jquery";
import * as React from "react";

interface IState {
    pageX: number;
    pageY: number;
}

export default class CustomMouse extends React.Component {

    public state: IState = {
        pageX: 0,
        pageY: 0,
    };

    public componentDidMount() {
        document.onmousemove = this.handleCustomCursor;
        const customMouse: HTMLElement = document.getElementsByClassName("b-cursor-custom")[0] as HTMLElement;

        $("body").hover(() => {
            console.log("enter");
            customMouse.style.opacity = "1";
        }, () => {
            console.log("out");
            customMouse.style.opacity = "0";
        });
    }

    public render() {
        return (
            <div
                className="b-cursor-custom"
                style={{left: this.state.pageX, top: this.state.pageY}}
            />
        );
    }

    private handleCustomCursor = (e: MouseEvent) => {
        this.setState({
            pageX: e.pageX,
            pageY: e.pageY,
        });
    }

}
