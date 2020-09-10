import React, {Component} from 'react';
import SatSetting from "./SatSetting";
import SatelliteList from "./SatelliteList";

class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="left-side">
                    <SatSetting />
                    <SatelliteList />
                </div>
                <div className="right-side">
                    This is right
                </div>
            </div>
        );
    }
}

export default Main;