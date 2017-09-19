//Dependencies
import React, { Component } from 'react';

//components
import Header from './Header';

import items from '../data/menu';

class App extends Component {
    render() {
        const { children } = this.props;
        return(
           <div>
               <Header items={items} />
               {children}
           </div>
        )
    }
}

export default App;