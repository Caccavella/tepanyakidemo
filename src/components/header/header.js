import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false
        }
        this.clickFunction = this.clickFunction.bind(this);
        this.autoClose = this.autoClose.bind(this);
    }
    clickFunction() {
        this.setState({
            clicked: !this.state.clicked
        })
    }
    autoClose() {
        this.setState({
            clicked: false
        })
    }

    render() {
        return (
            <div>
                <header className="tophead">
                    <div className="name-logo">
                        <h1>Tepanyaki Grill</h1>
                    </div>
                    <div className="menuicon" onMouseEnter={this.clickFunction}>
                        <span className="line">___</span><br />
                        <span className="line">___</span><br />
                        <span className="line">___</span><br />
                    </div>
                    <div className="dropdownmenu" onMouseOut={this.autoClose}>
                        {this.state.clicked
                            ? <div className="smallnav">
                                <Link to="/" className="smalllink">Home</Link>
                                <Link to="/hibachi" className="smalllink">Hibachi Menu</Link>
                                <Link to="/sushi" className="smalllink">Sushi Menu</Link>
                                <Link to="/locations" className="smalllink">Locations</Link>
                                <Link to="/contact" className="smalllink">Contact</Link>
                            </div> : null}
                    </div>
                    <nav className="navigation">
                        <Link to="/">Home</Link>
                        <Link to="/hibachi">Hibachi Menu</Link>
                        <Link to="/sushi">Sushi Menu</Link>
                        <Link to="/locations">Locations</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header;