import * as React from "react";
import { render } from 'react-dom';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
        return (
            <div>
                {this.state.isLoader ? <Loader></Loader> : <Home /> }
            </div>
            // <ReactCSSTransitionGroup
            //     transitionName="example"
            //     transitionAppear={true}
            //     transitionAppearTimeout={5000}
            //     transitionEnter={false}
            //     transitionLeave={false}>
            //     {/* <h1>Fading at Initial Mount</h1> */}
            //     <Home />
            // </ReactCSSTransitionGroup>
        );
    }
}

render(<App />, document.getElementById('app')); 
