import React, { Component } from 'react';
import './../index.css';
import "@ionic/react";
import Header from "../components/Header";
// import Edit from "./Edit"

import { items } from "./Root"
import "@ionic/react-router"
import {IonPage , IonButton} from  "@ionic/react"
import { Link } from "react-router-dom";

// let items = [1,1,2,2,3,3]


class Home extends Component {
    render() {

        return (

            <IonPage>


                <Header atHome={true} />


                <ion-content fullscreen={true} scrollY={true} class="has-footer" overflow-scroll="false">
                    <ion-list>


                        {
                            items.map((el) => {

                                return (
                                    <ion-card key={el.toString()} >

                                        <ion-card-header>

                                            <Link to="/edit" >

                                                <ion-card-title >
                                                    {el}
                                                </ion-card-title>

                                            </Link>
                                        </ion-card-header>


                                        <ion-card-content>

                                        card no. = {el}

                                        <IonButton routerLink="/edit">
                                            edit
                                        </IonButton>

                                        </ion-card-content>
                                    </ion-card>

                                )


                            })

                        }

                    </ion-list>

                        <br/>
                        <br/>
                        <br/>
                        <br/>


                </ion-content>

            </IonPage>


        )
    }
}

export default Home;