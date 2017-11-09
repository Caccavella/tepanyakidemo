import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HibachiMenu from './components/hibachimenu/hibachi-menu';
import Home from './components/home/home';
import SushiMenu from './components/sushi-menu/sushi-menu';
import Contact from './components/contact/contact';
import Locations from './components/locations/locations';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/hibachi' component={HibachiMenu}/>
        <Route path='/sushi' component={SushiMenu}/>
        <Route path='/locations'  component={Locations}/>
        <Route path='/contact' component={Contact}/>
        <Route render={() => {
        return(<div>I'm sorry, the page you're looking for cannot be found.
        </div>)}} />
    </Switch>
)