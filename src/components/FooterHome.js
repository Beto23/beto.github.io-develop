import React, { Component } from 'react';

import 'stylesComponents/footerHome.scss';

class FooterHome extends Component {

    constructor() {
        super()
        this.state = {
            links: [
                {
                    icon: 'icon-github',
                    url: 'https://github.com/Beto23'
                },
                {
                    icon: 'icon-twitter',
                    url: 'https://twitter.com/'
                },
                {
                    icon: 'icon-facebook',
                    url: 'https://www.facebook.com/beto.cordobalugo'
                },
                {
                    icon: 'icon-linkedin',
                    url: 'https://www.linkedin.com/in/jose-alberto-cordoba-lugo-4031a911a/'
                },
            ]
        }
    }
    render() {
        return(
            <footer className="footerHome">
                <ul className="footerHome__links">
                    {
                        this.state.links.map(link => {
                            return(
                                <li className="footerHome__link">
                                    <a href={link.url} target="_blank">
                                        <i className={link.icon}></i>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </footer>
        )
    }
}

export default FooterHome;