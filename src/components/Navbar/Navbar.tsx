import * as React from 'react';
import { TweenLite, TweenMax } from 'gsap';

import './Navbar.scss';

interface Props {
    isOpen: any;
}

export default class NavBar extends React.Component<Props> {

    line: HTMLElement;
    menu: HTMLElement;

    componentWillReceiveProps(nextProps: Props){
        console.log(nextProps.isOpen);
        if(nextProps.isOpen){
            TweenLite.to(this.line, 1, {width:"100%", opacity: 1, ease: "Power3.easeInOut", onComplete: () => {
                TweenLite.to(this.menu, .6, {opacity: 1, y: "0%"})
                TweenLite.to(this.line, .6, {top: "auto", bottom:"0"})
            }});
        }
    }

    render() {
        return(
            <nav className="nav">
                <span
                    className="line-animated"
                    ref={ line => {this.line = line}}
                >
                </span>
                <div
                    className="menu"
                    ref={menu => {this.menu = menu}}
                >
                </div>
            </nav>
        )
    }

}
