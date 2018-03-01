import * as React from 'react';

import './Header.scss';

import Icon from '../MenuBurger/MenuBurger';
import Nav from '../Navbar/Navbar';

interface State {
    isOpenMenu: boolean;
}

export default class Header extends React.Component {

    state : State = {
        isOpenMenu: false
    }

    handleClick = () => {
        this.setState((prevState: State) => ({
            isOpenMenu: !prevState.isOpenMenu
        }));
    }

    render() {
        return(
            <header className="header">
                    <Icon handleClick={this.handleClick} />
                    <Nav isOpen={this.state.isOpenMenu}/>
            </header>
        )
    }

}
