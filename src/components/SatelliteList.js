import React, {Component} from 'react';
import {List, Button, Checkbox, Avatar, Spin} from 'antd';
import Satellite from "../assets/images/satellite.svg";

class SatelliteList extends Component {
    onChange = () => {}
    render() {
        const satList = this.props.satInfo ? this.props.satInfo.above : [];
        return (
            <div className="sat-list-box">
                <Button className="sat-list-btn"
                        size="large">Track on the map</Button>
                <hr/>
                {
                    this.props.loading ?
                        <Spin tip={"Loading Satellites..."}/> :
                        <List
                            className="sat-list"
                            itemLayout="horizontal"
                            size="small"
                            dataSource={satList}
                            renderItem={item => (
                                <List.Item actions={[<Checkbox dataInfo={item} onChange={this.onChange}/>]}>
                                    <List.Item.Meta
                                        avatar={
                                            <Avatar size={40} src={Satellite} />
                                        }
                                        title={<p>{item.satname}</p>}
                                        description={`Launch Date: ${item.launchDate}`}
                                    />
                                </List.Item>
                            )}
                        />
                }
            </div>
        );
    }
}

export default SatelliteList;