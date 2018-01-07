import * as React from 'react';

import 'stylesComponents/footerHome.scss';

interface Links {
    icon: string,
    url: string
}

interface State {
    links: Array<Links>
}

class FooterHome extends React.Component {
    state : State;

    constructor(props: any) {
        super(props)
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
                        this.state.links.map((link, key) => {
                            return(
                                <li key={key} className="footerHome__link">
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