import * as React from 'react';

import './MenuBurger.scss';

export default class MenuBurger extends React.Component {
    menu: HTMLElement;
    state = {
        isOpen: false
    }

    handleClick = () => {
        let { isOpen } = this.state;
        this.setState({isOpen: !this.state.isOpen})

        if(isOpen){
            this.menu.className = this.menu.className.replace( ' opened', '' );
            this.menu.setAttribute( 'aria-expanded', 'false' );
        } else {
            this.menu.className += ' opened';
            this.menu.setAttribute( 'aria-expanded', 'true' );
        }
    }

    render() {
        return(
            <div 
                className="menu-toggle" 
                id="menu-toggle" 
                aria-expanded="false"
                ref={menu => { this.menu = menu}}
                onClick={this.handleClick}
            >
                <div className="lines line1"></div>
                <div className="lines line2"></div>
                <div className="lines line3"></div>
            </div>
        )
    }

}
