//Dependencies
import * as React from 'react';

//Styles
import './PreloadingScreen.scss';

class PreloadingScreen extends React.Component {

    render() {
        return(
            <div className="full-screen">
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