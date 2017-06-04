import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//components
import Header from './components/Header';

//pages
import Home from './pages/Home';

import './app.scss';

class App extends Component {
    render() {
        return(
           <div>
               {/*<Header />*/}
               <Home />
           </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);