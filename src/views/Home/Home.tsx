import * as React from 'react';
import { TweenMax } from 'gsap';

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

interface State {
    positionClipPath: string;
}

class Home extends React.Component<Props> {

    container: HTMLElement;
    indicator: HTMLElement;

    state: State = {
        positionClipPath: '50%',
    };

    componentDidMount() {
        // let bg = new BackgroundMove(this.container, this.randomImage());
        this.handleAnimation();
        this.setState({
            positionClipPath: '50%',
        });
    }

    handleAnimation() : void {
        let title = document.getElementsByClassName('home__title');
        let subTitle = document.getElementsByClassName('home__subtitle');

        TweenMax.staggerTo(title, 1.5,{ opacity: 1, ease : 'Cubic.easeIn'}, 0, animationSubtitle);

        function animationSubtitle() {
            TweenMax.staggerFromTo(subTitle, 1.5, {y:"60px", opacity: 0}, {y:"0%", opacity: 1, esae: 'Cubic.easeIn'}, 0);
        }
    }

    handleDragElemet = (e: any, elmnt: HTMLElement) : void => {
        let pos1 = 0, pos2 = 0;
            e = e || window.event;
            // get the mouse cursor position at startup:
            pos2 = e.clientX;
            this.handleonMouseup();
            // call a function whenever the cursor moves:
            this.handleMouseMove(elmnt, pos1, pos2);
    }

    handleMouseMove = (elmnt: HTMLElement, pos1: number, pos2: number) : void => {
        document.onmousemove = (e:any) => {
            e = e || window.event;
            // calculate the new cursor position:
            pos1 = pos2 - e.clientX;
            pos2 = e.clientX;
            // set the element's new position:
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            this.setState({
                positionClipPath: `${elmnt.offsetLeft - pos1}px`
            });
        };
    }

    handleonMouseup() : void {
        document.onmouseup = () => {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
        };
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

    // componentWillReceiveProps(nextProps: Props) {
    //     const el = this.container;
    //     if(nextProps.isHidden === false) {
    //         TweenLite.to(el, 2, {x:"0%",opacity: 1, ease: "Power3.easeInOut"});
    //     }
    // }

    render(){
        let { isHidden } = this.props;
        let { positionClipPath } = this.state;
        
        let Styles = {
            clipPath: `polygon(0 100%, 0 0, ${this.state.positionClipPath} 0, ${this.state.positionClipPath} 100%)`,
            WebkitClipPath: `polygon(0 100%, 0 0, ${this.state.positionClipPath} 0, ${this.state.positionClipPath} 100%)`
        }
        
        return(
            <section
                className="home"
                ref={c => this.container = c}>
                <div className="home__box-title noselect">
                    <h1 className="home__title home__title--animate noselect">Alberto</h1>
                    <span className="home__subtitle noselect">Front-End Web Developer</span>
                </div>
                <div
                    className="clip-path"
                    style={Styles}>
                    <div className="home__box-title noselect">
                        <h1 className="home__title noselect">Alberto</h1>
                        <span className="home__subtitle noselect">Front-End Web Developer</span>
                    </div>
                </div>
                <span
                    ref={indicator => {this.indicator = indicator}}
                    className="indicator"
                    onMouseDown={(e) => this.handleDragElemet(e, this.indicator)}
                    id="indicator"> 
                </span>
                <Social />
            </section>
        )
    }

}

export default Home;
