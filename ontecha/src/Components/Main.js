import React, { Component } from 'react';
import SideBar from './SideNav/SideNav';


export default class Main extends Component{
    render(){
        return (
            <div className="mainBlock">
                <SideBar></SideBar>
            </div>
        )
    }
}