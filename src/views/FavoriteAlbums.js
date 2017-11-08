import React, { Component } from 'react';

//images & style
import fondo from '../assets/images/music.jpg';

import '../styles/pages/FavoriteAlbums.scss';
class FavoriteAlbums extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll(e) {
        // console.log(e);
    }

    render() {
        return (
            <section style={{background: '#f3f3f2'}}>
                <article className="intro" style={{backgroundImage: 'url(' + fondo + ')'}}>
                    <h2 className="intro-title">My Favorite Albums</h2>
                </article>
                <article className="album">
                <iframe src="https://open.spotify.com/embed/artist/7okwEbXzyT2VffBmyQBWLz" width="300" height="380" frameBorder="0" allowTransparency="true"></iframe>
                </article>
            </section>
        )
    }
}

export default FavoriteAlbums;