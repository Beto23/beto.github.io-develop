import * as React from "react";

import "../../styles/views/Home/Home.scss";

export default class Home extends React.Component {

    public render() {
        return (
            <div className="b-home">
                <div className="b-home__content-first" />
                <div className="b-home__content-second" />
            </div>
        );
    }
}
