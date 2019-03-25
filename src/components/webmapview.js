import MapView from "esri/views/MapView";
import ScaleBar from "esri/widgets/ScaleBar";
import Locate from "esri/widgets/Locate";
import Fullscreen from "esri/widgets/Fullscreen";
import Search from "esri/widgets/Search";
import Compass from "esri/widgets/Compass";
import Home from "esri/widgets/Home";
import CoordinateConversion from "esri/widgets/CoordinateConversion";
import Graphic from "esri/Graphic";
import BasemapGallery from "esri/widgets/BasemapGallery";
import Expand from "esri/widgets/Expand";
import React from "react";


export class WebMapComponent extends React.Component {
    componentDidMount() {
        const view = new MapView({
            map: this.props.webmap,
            container: this.mapDiv
        });

        this.props.onload(view);


        view.ui.add(new Fullscreen({
            view: view,
            element: this.mapDiv
        }), "top-right");
        //this.props.onload(view);

        var ccWidget = new CoordinateConversion({
            view: view
        });
        view.ui.add(ccWidget, "bottom-left");


        var scalebar = new ScaleBar({
            view: view
        });
        view.ui.add(scalebar, "bottom-left");
        var locateWidget = new Locate({
            view: view,   // Attaches the Locate button to the view
            graphic: new Graphic({
                symbol: {type: "simple-marker"}  // overwrites the default symbol used for the
                // graphic placed at the location of the user when found
            })
        });

        view.ui.add(locateWidget, "bottom-right");
        var searchWidget = new Search({
            view: view
        });
// Adds the search widget below other elements in
// the top left corner of the view
        view.ui.add(searchWidget, {
            position: "top-right",
            index: 2
        });

        var basemapGallery = new BasemapGallery({
            view: view,
        });

        var bgExpand = new Expand({
            view: view,
            content: basemapGallery
        });

        view.ui.add(bgExpand, "top-right");



        var compass = new Compass({
            view: view
        });

        // adds the compass to the top left corner of the MapView
        view.ui.add(compass, "top-left");

        var homeBtn = new Home({
            view: view
        });

        // Add the home button to the top left corner of the view
        view.ui.add(homeBtn, "top-left");
    }

    render() {
        return (
            <div className="webmap"
                 ref={
                     element => this.mapDiv = element
                 }>
            </div>
        );
    }
}
