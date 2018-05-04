import * as React from "react";

interface IState {
    pageX: number,
    pageY: number
}

export default class CustomMouse extends React.Component {

    state: IState = {
        pageX: 0,
        pageY: 0
    }

    componentDidMount() {
        document.onmousemove = this.handleCustomCursor;
    }

    handleCustomCursor = (e: MouseEvent) => {
        this.setState({
            pageX: e.pageX,
            pageY: e.pageY
        });
    }

    render() {
        return (
            <div
                className="b-cursor-custom"
                style={{
                    left: this.state.pageX,
                    top: this.state.pageY
                }}>
            </div>
        );
    };
}