import * as React from 'react';
import { TweenLite } from 'gsap';
import * as $ from "jquery";

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
    isMousedown?: boolean;
}

class Home extends React.Component<Props> {

    container: HTMLElement;
    indicator: HTMLElement;

    state: State = {
        positionClipPath: '50%',
        isMousedown: false
    };

    componentDidMount() {
        let bg = new BackgroundMove(this.container, this.randomImage());
        this.setState({
            positionClipPath: '50%',
        });
    }
        
    handleDragElemet = (elmnt: HTMLElement) => {
        let pos1 = 0, pos2 = 0;
        if (document.getElementById(elmnt.id)) {
            document.getElementById(elmnt.id).onmousedown = (e:any) => {
                e = e || window.event;
                // get the mouse cursor position at startup:
                pos2 = e.clientX;
                document.onmouseup = () => {
                    /* stop moving when mouse button is released:*/
                    document.onmouseup = null;
                    document.onmousemove = null;
                };
                // call a function whenever the cursor moves:
                document.onmousemove = (e:any) => {
                    e = e || window.event;
                    // calculate the new cursor position:
                    pos1 = pos2 - e.clientX;
                    pos2 = e.clientX;
                    // set the element's new position:
                    //elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                    this.setState({
                        positionClipPath: `${elmnt.offsetLeft - pos1}px`
                    });
                };
            }
        }
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
        let { positionClipPath, isMousedown } = this.state;
        return(
            <section
                className="home"
                ref={c => this.container = c}>
                <div className="home__box-title">
                    <h1 className="home__title noselect">Alberto</h1>
                    <span className="home__subtitle noselect">Front-End Web Developer</span>
                </div>
                <div
                    className="clip-path"
                    style={{clipPath: `polygon(0 100%, 0 0, ${positionClipPath} 0, ${positionClipPath} 100%)`}}>
                    <div className="clip-path_box">
                    </div>
                </div>
                <span
                    ref={indicator => {this.indicator = indicator}}
                    className="indicator"
                    onClick={() => this.handleDragElemet(this.indicator)}
                    id="indicator"> 
                </span>
                <Social />
            </section>
        )
    }

}

export default Home;

//https://www.w3schools.com/howto/howto_js_draggable.asp