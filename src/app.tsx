import * as React from "react";
import { render } from 'react-dom';
import * as ReactTransitionGroup from 'react-addons-transition-group';

import Home from './views/Home/Home';
import Loader from './views/Preloading-screen/PreloadingScreen';

import './app.scss';

interface State {
    isLoader: boolean;
}

export default class App extends React.Component {

    state : State = { isLoader: true }

    componentDidMount() {
        this.loader();
    }

    loader = () : void => {
        setTimeout(() => {
            this.setState({
                isLoader: false
            });
        },6000)
    }

    render() {
        let { isLoader } = this.state;
        return (
            <div>
                <Home isHidden={false} />
            </div>
        );
    }
}

render(<App />, document.getElementById('app')); 
