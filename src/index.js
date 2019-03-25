import "./config";

import FeatureLayer from "esri/layers/FeatureLayer";
import Extent from "esri/geometry/Extent";
import WebMap from "esri/WebMap";

import React from "react";
import ReactDOM from "react-dom";

import {Header} from "./components/header";
import {WebMapComponent} from "./components/webmapview";

import "./css/main.scss";

const addDOMNode = () => {
    const appNode = document.createElement("div");
    appNode.id = "app";
    document.body.appendChild(appNode);
    return appNode;
}

const onComponentLoad = (view) => {
    view.center = [-112, 38];  // Sets the center point of the view at a specified lon/lat
    view.zoom = 5;  // Sets the zoom LOD to 13
// Set the extent on the view
    view.extent = new Extent({
        xmin: -9177882,
        ymin: 4246761,
        xmax: -9176720,
        ymax: 4247967,
        spatialReference: {
            wkid: 102100
        }
    });
    view.scale = 24000;
};

/*const featureLayer = new FeatureLayer({
    id: "states",
    portalItem: {
        id: "b234a118ab6b4c91908a1cf677941702"
    },
    outFields: ["NAME", "STATE_NAME", "VACANT", "HSE_UNITS"],
    title: "U.S. counties"
});*/

const webmap = new WebMap({
    portalItem: {
        id: "15fa6c0f93704219a09f1c527616afdb"
    },
});

/**
 * React portion of application
 */
ReactDOM.render(
    <div className="main">
        <Header appName="Webpack App"/>
        <WebMapComponent
            webmap={webmap}
            onload={onComponentLoad}/>
    </div>,
    addDOMNode()
);
