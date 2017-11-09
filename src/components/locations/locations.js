import React, { Component } from 'react';
import './locations.css';

class Locations extends Component {
    render() {
        return (
            <div className="locationswrapper">
                <div className="locationsectioncontainer">
                <h1>Locations:</h1>
                <div className="locationsection">
                <div className="info">Lehi</div>
                <div className="info">72 North 850 E</div>
                <div className="info">Lehi, UT 84043-9576</div>
                <div className="bottom">(801) 653-2988</div>
                <div className="locationimage"></div>
                </div>
                <div className="locationsection">
                <div className="info">West Jordan</div>
                <div className="info">7233 South Plaza Center Drive</div>
                <div className="info">West Jordan, UT 84084-1760</div>
                <div className="bottom">(801) 282-9700</div>
                <div className="locationimage2"></div>
                </div>
                <div className="locationsection">
                <div className="info">Clearfield</div>
                <div className="info">1386 Legend Hills Drive</div>
                <div className="info">Clearfield, UT 84015-1585</div>
                <div className="bottom">(801) 775-8813</div>
                <div className="locationimage3"></div>
                </div>
                </div>
            </div>
        )
    }
}

export default Locations;