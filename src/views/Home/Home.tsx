import * as React from 'react';
import { TweenLite } from 'gsap';

//styles
import './home.scss';

//images
import * as homeLg from '../../assets/images/home-lg.jpeg';
import * as homeLg2 from '../../assets/images/home-lg-2.jpeg';


//Components
import BackgroundMove from '../../scripts/components/BackgroundMove';
import Social from '../../components/BoxSocial/BoxSocial';

interface Props {
    isHidden : boolean
}

class Home extends React.Component<Props> {

    container: HTMLElement;

    componentDidMount() {
        let bg = new BackgroundMove(this.container, this.randomImage());
    }

    randomImage() : string {
        const num = Math.floor(Math.random() * 2); // 0...1
        switch (num) {
            case 0:
                return homeLg;
            case 1:
                return homeLg2;
        }
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
                <Social />>
            </section>
        )
    }

}

export default Home;