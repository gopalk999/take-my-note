
import React, { Component } from 'react';
import { Route , BrowserRouter } from 'react-router-dom';
import "react-dom"
import {  IonPage, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import "@ionic/react";

import './../index.css';

import Home from "./Home";
import Edit from "./Edit"    ;


class Root extends Component {

    render() {
        return (
            <ion-app>
                
                <BrowserRouter>
                
                    
                    <Route exact path="/" component={Home} />
                    <Route path="/edit" component={Edit} />
                
            </BrowserRouter>
            </ion-app>
        )

    }
}

export default Root; 