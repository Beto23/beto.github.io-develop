import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
                        {
                            this.props.items.map((item, key) => {
                                return(
                                    <li key={key}>
                                        <Link 
                                            onClick={() => this.setState({isOpen: false})}
                                            to={item.path}>{item.title}</Link>
                                    </li>
                                )
                            } )
                        }
                    </ul>
                </div>
            </header>
        )
    }

}

Header.propTypes = {
    items: PropTypes.array.isRequired
}

export default Header;
