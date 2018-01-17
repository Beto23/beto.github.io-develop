//Dependencies
import * as React from 'react';
import { TweenMax, TweenLite } from 'gsap';

//Styles
import './PreloadingScreen.scss';

import * as glitch from '../../assets/sounds/glitch.mp3';

class PreloadingScreen extends React.Component {
    container: any;
    audio: any;
    audioInterval : any;
    
    componentWillLeave(callback: any) {
        const el = this.container;
        TweenLite.to(el, 2, {x:"-100%", opacity: 0.7,ease: "Power3.easeInOut", onComplete: callback});
        clearInterval(this.audioInterval);
    }

    componentDidMount() {
        const el = this.container;
        TweenLite.fromTo(el,1,{opacity: 0, backgroundColor: "white"}, {opacity: 1,backgroundColor: "white", ease:"Power3.easeInOut", onComplete: this.handleAudio})
    }

    handleAudio = () : void => {
        this.audio =  document.getElementById('glitch');
        this.audio.play();
        this.audio.volume = .8;
        this.audioInterval = setInterval(() => {
            if (this.audio.volume > 0) {
                try {
                    this.audio.volume = parseFloat(this.audio.volume.toFixed(1)) -.155;
                } catch (error) {
                    null;
                }
            }
        }, 1000)
    }

    render() {
        return (
            <div className="full-screen" ref={c => this.container = c}>
                <audio id="glitch">
                    <source src={glitch} />
                </audio>
                <div className="box-center">
                    <div className="box-glitch">
                        <span className="box-glitch-title">Welcome</span>
                    </div>
                    <div className="box-subtitle">
                        <span className="box-subtitle-line"></span>
                        <span>Loading...</span>
                        <span className="box-subtitle-line"></span>                        
                    </div>
                </div>
            </div>
        )
    }
}

export default PreloadingScreen;