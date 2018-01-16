import * as React from 'react';
import { TweenLite } from 'gsap';

import './home.scss';
// import * as fondo from './../assets/images/pexels3.jpeg';
// import * as welcomeLarge from './../assets/images/welcome3.png';
// import * as welcomeDefault from '../assets/images/betocel.png';

import BackgroundMove from '../../scripts/components/BackgroundMove';

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
                <div className="home__box-title">
                    <h1 className="home__title">Alberto</h1>
                    <span className="home__subtitle">Front-End Web Developer</span>
                </div>
            </section>
        )
    }

}

export default Home;