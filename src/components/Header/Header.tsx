import * as React from 'react';

import './Header.scss';

import Icon from '../MenuBurger/MenuBurger';

export default class Header extends React.Component {

    render() {
        return(
            <header className="header">
                    <Icon />
            </header>
        )
    }

}
