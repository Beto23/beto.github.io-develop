import React, { Component } from 'react';

import emma from './../assets/images/ema.jpg';
import sky from '../assets/images/sky1.jpg';

class Home extends Component {

    constructor() {
        super()
        this.state = {
            image: sky
        }
    }

    render(){
        const { image } = this.state;
        return(
            <div>
                Welcome to Home
            </div>
        )
    }

}

export default Home;