import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//pages
import Home from './pages/Home';

class App extends Component {
    render() {
        return(
           <div>
               <Home />
           </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);