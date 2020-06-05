
import React, { Component } from 'react';
import { Route  } from 'react-router-dom';
import "react-dom"
import {  IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import "@ionic/react";

import './../index.css';

import Home from "./Home";
import Edit from "./Edit"    ;


class Root extends Component {

    render() {
        return (
            <ion-app>
                
                <IonReactRouter>
                    <IonRouterOutlet>
                         
                <switch>

                    <Route exact path="/" component={Home} />
                    <Route path="/edit" component={Edit} />
                    
                    </IonRouterOutlet>
                </switch>
                
            </IonReactRouter>
            </ion-app>
        )

    }
}

export default Root; 