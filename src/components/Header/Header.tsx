import * as React from 'react';

import './Header.scss';

import Menu from '../MenuBurger/MenuBurger';

export default class Header extends React.Component {

    render() {
        return(
            <header className="header">
                <div className="header-icon">
                    <Menu />
                </div>
            </header>
        )
    }

}
