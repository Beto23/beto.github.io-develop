import React, { Component } from 'react';

import 'stylesPages/home.scss';
import fondo from './../assets/images/pexels3.jpeg';
import welcomeLarge from './../assets/images/welcome3.png';
import welcomeDefault from '../assets/images/betocel.png';

import FooterHome from '../components/FooterHome';

class Home extends Component {

    render(){
        return(
            <section className="home" style={{backgroundImage: 'url(' + fondo + ')'}}>
                <article className="home-container">
                    <picture>
                        <source srcSet={welcomeLarge} media="(min-width: 670px)" />
                        <source srcSet={welcomeDefault}/>
                        <img className="home-container-img" src={welcomeLarge} alt=""/>
                    </picture>
                    {/*<img className="home-container-img" src={nameCel} alt=""/>*/}
                    <p className="home-container-text">I'm a Front-End web developer
                        based in Saltillo Coahuila, Mexico.
                        I like to work with the latest tools and methodologies by keeping up
                        to date with current trends.
                    </p>
                    <FooterHome />
                </article>
            </section>
        )
    }

}

export default Home;