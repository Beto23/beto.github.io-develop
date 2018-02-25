import * as React from "react";
import { render } from 'react-dom';
import * as ReactTransitionGroup from 'react-addons-transition-group';

import Home from './views/Home/Home';
import Loader from './views/Preloading-screen/PreloadingScreen';

import './app.scss';

interface State {
    isLoader: boolean;
    defaultTitle: string;
    titleBlur: string;
}

export default class App extends React.Component {

    state : State = {
        isLoader: true,
        defaultTitle: 'Beto23',
        titleBlur: `I miss you :(`
    }

    componentDidMount() {
        this.handleDocumentTitle();
        this.loader();
    }

    handleDocumentTitle = () => {
        window.addEventListener("blur", () => {
            document.title = this.state.titleBlur
        });
        window.addEventListener("focus", () => {
            document.title = this.state.defaultTitle
        });
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
