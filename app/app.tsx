import * as React from "react";
import { render } from 'react-dom';

import './styles/common.scss'

interface IState {
    pageX: number,
    pageY: number
}

export default class App extends React.Component {

    state: IState = {
        pageX: 0,
        pageY: 0
    }

    cursorEl: HTMLElement;

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
        const { pageX, pageY } = this.state;
        return (
            <div>
                Hola React
                <div
                    className="b-cursor-custom"
                    style={{
                        left: pageX,
                        top: pageY
                    }}></div>
            </div>
        );
    }
}

render((
    <App />
), document.getElementById('app'))

module.hot.accept();