import * as React from "react";
import { render } from 'react-dom';
import * as ReactTransitionGroup from 'react-addons-transition-group';

import Home from './views/Home';
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
        },5000)
    }

    render() {
        let { isLoader } = this.state;
        return (
            <div>
                <div className="full-page">
                    {<ReactTransitionGroup>
                        {isLoader === true ? <Loader></Loader> : null }
                    </ReactTransitionGroup>}
                    <Home isHidden={isLoader} />
                </div>
            </div>
        );
    }
}

render(<App />, document.getElementById('app')); 
