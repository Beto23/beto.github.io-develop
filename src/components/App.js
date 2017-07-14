//Dependencies
import React, { Component } from 'react';

//components
import Header from './Header';

class App extends Component {
    render() {
        const { children } = this.props;
        return(
           <div>
               <Header />
               {children}
           </div>
        )
    }
}

export default App;