import * as React from 'react';

import './MenuBurger.scss';

interface Props {
    handleClick: any;
}

export default class MenuBurger extends React.Component<Props> {
    menu: HTMLElement;
    state = {
        isOpen: false
    }

    handleClick = () => {
        let { isOpen } = this.state;
        // this.setState({isOpen: !this.state.isOpen})

        // if(isOpen){
        //     this.menu.className = this.menu.className.replace( ' opened', '' );
        //     this.menu.setAttribute( 'aria-expanded', 'false' );
        // } else {
        //     this.menu.className += ' opened';
        //     this.menu.setAttribute( 'aria-expanded', 'true' );
        // }
    }

    render() {
        return(
            <div 
                className="menu-toggle" 
                onClick={this.props.handleClick}
            >
                <div className="lines line1"></div>
                <div className="lines line2"></div>
                <div className="lines line3"></div>
            </div>
        )
    }

}
