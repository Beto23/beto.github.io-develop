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
                <svg className="menu-toggle" aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100">
                    <g className="svg-menu-toggle">
                        <path className="line line-1" d="M5 13h90v14H5z"/>
                        <path className="line line-2" d="M5 43h90v14H5z"/>
                        <path className="line line-3" d="M5 73h90v14H5z"/>
                    </g>
                </svg>
            </div>
        )
    }

}
