import React, {Component} from 'react';
import { InputNumber, Button} from 'antd';

class SatSetting extends Component {
    constructor() {
        super();
        this.state = {
            observerLat: 0,
            observerLong :0,
            observerAlt: 0,
            radius: 90
        }
    }


    onChangeLat = (value) => {
        this.setState({observerLat: value})
    }
    onChangeLong = (value) => {
        this.setState({observerLong: value})
    }
    onChangeAlt = (value) => {
        this.setState({observerAlt: value})
    }

    onChangeRadius = (value) => {
        this.setState({
            radius: value
        })
    }

    showSatellite = () => {
        this.props.onShow(this.state);
    }

    render() {
        return (
            <div className="sat-setting">
                <p className="setting-label">From Location</p>
                <div className="list-item">
                    <div className="list-long">
                        <label>Longitude: </label>
                        <InputNumber
                            min={-180}
                            max={180}
                            defaultValue={0}
                            onChange={this.onChangeLong} />
                    </div>
                    <div className="list-lat">
                        <label>Latitude: </label>
                        <InputNumber
                            min={-90}
                            max={90}
                            defaultValue={0}
                            onChange={this.onChangeLat} />
                    </div>
                    <div className="list-alt">
                        <label>Elevation(meter): </label>
                        <InputNumber
                            min={0}
                            max={90}
                            defaultValue={0}
                            onChange={this.onChangeAlt} />
                    </div>
                </div>

                <p className="setting-label">Restrictions</p>
                <div className="setting-list">
                    <div className="list-item">
                        <label>Search Radius </label>
                        <InputNumber
                            min={0}
                            max={90}
                            defaultValue={0}
                            style={{margin: "0 2px"}}
                            onChange={this.onChangeRadius}
                        />
                    </div>
                </div>

                <div className="show-nearby">
                    <Button
                        className="show-nearby-btn"
                        size="large"
                        onClick={this.showSatellite}
                    >
                        Find Nearby Satellites
                    </Button>
                </div>
            </div>
        );
    }
}

export default SatSetting;