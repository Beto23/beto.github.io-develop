import * as React from 'react';

import './BoxSocial.scss';

interface Links {
    icon: string,
    url: string
}

interface State {
    links: Array<Links>
}

class BoxSocial extends React.Component {
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
                    icon: 'icon-linkedin',
                    url: 'https://www.linkedin.com/in/jose-alberto-cordoba-lugo-4031a911a/'
                },
                {
                    icon: 'icon-codepen',
                    url: 'https://codepen.io/jbeto23/'
                },
                {
                    icon: 'icon-twitter',
                    url: 'https://twitter.com/BetoCL23'
                },
            ]
        }
    }
    render() {
        return(
            <div className="box-social">
                <ul className="box-social__links">
                    {
                        this.state.links.map((link, key) => {
                            return(
                                <li key={key} className="box-social__link">
                                    <a href={link.url} target="_blank">
                                        <i className={link.icon}></i>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default BoxSocial;