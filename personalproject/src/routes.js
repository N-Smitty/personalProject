import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import AboutBreed from './Components/About/AboutBreed';
import AboutStandards from './Components/About/AboutStandards';
import AboutUs from './Components/About/AboutUs';
import BreedingTools from './Components/BreedingTools/Progesterone';
import Contact from './Components/Contact/Contact';
import Gallery from './Components/Litters/Gallery';
import Available from './Components/Litters/Available';
import Litters from './Components/Litters/Pricing';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/Header' component={Header}/>
        <Route path='/AboutBreed' component={AboutBreed}/>
        <Route path='/AboutStandards' component={AboutStandards}/>
        <Route path='/AboutUs' component={AboutUs}/>
        <Route path='/Progesterone' component={BreedingTools}/>
        <Route path='/Contact' component={Contact}/>
        <Route path='/Pricing' component={Litters}/>
        <Route path='/Gallery' component={Gallery}/>
        <Route path='/Available' component={Available}/>
    </Switch>
)