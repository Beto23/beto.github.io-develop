import * as React from 'react';
import { TweenLite } from 'gsap';

import 'stylesPages/home.scss';
import * as fondo from './../assets/images/pexels3.jpeg';
import * as welcomeLarge from './../assets/images/welcome3.png';
import * as welcomeDefault from '../assets/images/betocel.png';

import FooterHome from '../components/FooterHome';

import BackgroundMove from '../scripts/components/BackgroundMove';

interface Props {
    isHidden : boolean
}

class Home extends React.Component<Props> {

    container: HTMLElement;

    componentDidMount() {
        const bgUrl  = 'https://static.pexels.com/photos/735810/pexels-photo-735810.jpeg'
        let bg = new BackgroundMove(this.container, bgUrl);
    }

    componentWillReceiveProps(nextProps: Props) {
        const el = this.container;
        if(nextProps.isHidden === false) {
            TweenLite.to(el, 2, {x:"0%",opacity: 1, ease: "Power3.easeInOut"});
        }
    }

    render(){
        let { isHidden } = this.props;
        return(
            <section
                className="home"
                ref={c => this.container = c}>
                <article className="home-container">
                    <picture>
                        <source srcSet={welcomeLarge} media="(min-width: 670px)" />
                        <source srcSet={welcomeDefault}/>
                        <img className="home-container-img" src={welcomeLarge} alt=""/>
                    </picture>
                    <p className="home-container-text">I'm a Front-End web developer
                        based in Saltillo Coahuila, Mexico.
                        I like to work with the latest tools and methodologies by keeping up
                        to date with current trends.
                    </p>
                    {<FooterHome />}
                </article>
            </section>
        )
    }

}

export default Home;