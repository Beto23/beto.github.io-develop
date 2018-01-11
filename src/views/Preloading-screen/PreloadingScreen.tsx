//Dependencies
import * as React from 'react';
import { TweenMax, TweenLite } from 'gsap';

//Styles
import './PreloadingScreen.scss';

class PreloadingScreen extends React.Component {
    container: any;
    
    componentWillLeave(callback: any) {
        const el = this.container;
        TweenLite.to(el, 2, {x:"-100%",ease: "Power3.easeInOut", onComplete: callback});
    }

    render() {
        return (
            <div className="full-screen" ref={c => this.container = c}>
                <div className="box-center">
                    <div className="box-glitch">
                        <span className="box-glitch-title">Welcome</span>
                    </div>
                    <span>Loading...</span>
                </div>
            </div>
        )
    }
}

export default PreloadingScreen;