import React, {Component} from 'react';
import SatSetting from "./SatSetting";
import SatelliteList from "./SatelliteList";
import {NEARBY_SATELLITE, SAT_API_KEY, SAT_BASE_URL, SATELLITE_POSITION_URL, STARLINK_CATEGORY} from "../constants";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            observerLat: 0,
            observerLong :0,
            observerAlt: 0,
            radius: 90,
            loadingSatellites: false
        }
    }


    showNearbySatellite = (setting) => {
        this.fetchSatellite(setting);
    }

    fetchSatellite = (setting) => {
        const {observerLat, observerLong, observerAlt, radius} = setting;
        const axios = require('axios');
        const url = `${NEARBY_SATELLITE}/${observerLat}/${observerLong}/${observerAlt}/${radius}/${STARLINK_CATEGORY}/&apiKey=${SAT_API_KEY}`;
        this.setState({
            loadingSatellites: true,
        })
        axios.get(url)
            .then(response => {
                this.setState({
                    satInfo: response.data,
                    loadingSatellites: false
                })
            })
            .catch(error => {
                this.setState({
                    loadingSatellites: false,
                })
                console.log('err in fetch satellite -> ', error);
            })
    }


    render() {
        return (
            <div className="main">
                <div className="left-side">
                    <SatSetting onShow={this.showNearbySatellite}/>
                    <SatelliteList satInfo={this.state.satInfo} loading={this.state.loadingSatellites}/>
                </div>
                <div className="right-side">
                    This is right
                </div>
            </div>
        );
    }
}

export default Main;