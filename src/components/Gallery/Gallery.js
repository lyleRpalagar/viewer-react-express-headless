/////////////////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Jaime Rosales 2016 - Forge Developer Partner Services
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////////////////

// Models

//Steampunk : dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6dmlld2VyLXJvY2tzLXJlYWN0L1NwTTNXNy5mM2Q

import React, { Component } from 'react';
import scrollTo from 'scroll-to';
import Helpers from '../Viewer/Viewer-helpers';
import './gallery.css';


const tilesData = [
  {
    img: 'images/P-08-001-A Fuel tank.sldprt.png',
    title: 'P-08-001-A Fuel tank.sldprt',
    key: '0001',
    urn:'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cGFsYWdhcl8xMjM0L1AtMDgtMDAxLUElMjBGdWVsJTIwdGFuay5zbGRwcnQ'
  },
  {
    img: 'images/Rotary Engine.jpeg',
    title: 'Rotary Engine.stp',
    key: '0002',
    urn:'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cGFsYWdhcl8xMjM0L1JvdGFyeSUyMEVuZ2luZS5zdHA'
  }
];


class Gallery extends Component {

  onTileSelect(tile, e) {
    e.preventDefault();

    // Scroll to top
    scrollTo(0, 0, {
      ease: 'inQuad',
      duration: 300
    });

    // Starts loading once it scrolls
    setTimeout(
      () => Helpers.launchViewer("viewerDiv", tile.urn, tile.key),
      300
    );
  }

   render() {
    return (
      <div className="forge-gallery">
        <div className="container">
          <div className="row">
            {tilesData.map((tile, index) =>
              (
                <div className="col-md-4 col-xs-6 tile" key={index}>
                  <a href="#" onClick={this.onTileSelect.bind(this, tile)}>
                    <img className="tile-avatar" src={tile.img} alt={tile.title} />
                  </a>
                  <div className="tile-title">{tile.title}</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    )
	}
}

export default Gallery;
