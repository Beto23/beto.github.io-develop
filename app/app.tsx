import * as React from "react";
import { render } from 'react-dom';

import './styles/common.scss'

export default class App extends React.Component {

    render() {
        return (
            <div>
                Hola React
            </div>
        );
    }
}

render((
    <App />
), document.getElementById('app'))

module.hot.accept();