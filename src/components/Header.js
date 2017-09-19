import React, { Component } from 'react';
import '../styles/components/Header.scss';

class Header extends Component {

    constructor(){
        super();
        this.state = {
            isOpen: false
        }
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const { isOpen } = this.state;
        return(
            <header className="header">
                <button className="header-button" onClick={this.handleClick}>
                    <i className={(isOpen ? 'icon-close': 'icon-menu')}></i>
                </button>
                <div className={"header-container " + (isOpen ? 'header-container__show': '') }>
                    <ul style={isOpen ? {display: 'flex'} : {display: 'none'}}>
                        <li><a>Portafólio</a></li>
                    </ul>
                </div>
            </header>
        )
    }

}

export default Header;
