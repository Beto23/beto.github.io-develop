import * as React from "react";
import { render } from 'react-dom';

import CustomMouse from './components/CustomMouse/CustomMouse';

import './styles/common.scss'
export default class App extends React.Component {

    render() {
        return (
            <div>
                Hola React
                <CustomMouse />
            </div>
        );
    }
}

render((
    <App />
), document.getElementById('app'))

module.hot.accept();