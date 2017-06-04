import React, { Component } from 'react';

import 'stylesPages/home.scss';
import fondo from './../assets/images/pexels3.jpeg';
import name from './../assets/images/name.png';

import FooterHome from '../components/FooterHome';

class Home extends Component {

    render(){
        return(
            <div className="home" style={{backgroundImage: 'url(' + fondo + ')'}}>
                <div className="home-container">
                    <img className="home-container-img" src={name} alt=""/>
                    <p className="home-container-text">I'm a Front-End web developer
                        based in Saltillo Coahuila, Mexico.
                      I like to work with the latest tools and methodologies by keeping up
                        to date with current trends.
                    </p>
                    <FooterHome />
                </div>
            </div>
        )
    }

}

export default Home;