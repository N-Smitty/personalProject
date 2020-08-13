import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import AboutBreed from './Components/About/AboutBreed';
import AboutStandards from './Components/About/AboutStandards';
import AboutUs from './Components/About/AboutUs';
import BreedingTools from './Components/BreedingTools/Progesterone';
import Results from './Components/BreedingTools/results';
import Contact from './Components/Contact/Contact';
import Gallery from './Components/Litters/Gallery';
import Stud from './Components/BreedingTools/Stud';
import Litters from './Components/Litters/Pricing';
import Auth from './Components/Auth/Auth';
import View1 from './Components/BreedingTools/view1';
import View2 from './Components/BreedingTools/view2';
import View3 from './Components/BreedingTools/view3';
import View4 from './Components/BreedingTools/view4';


export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/AboutBreed' component={AboutBreed}/>
        <Route path='/AboutStandards' component={AboutStandards}/>
        <Route path='/AboutUs' component={AboutUs}/>
        <Route path='/Progesterone' component={BreedingTools}/>
        <Route path='/Results' component={Results}/>
        <Route path='/Contact' component={Contact}/>
        <Route path='/Pricing' component={Litters}/>
        <Route path='/Gallery' component={Gallery}/>
        <Route path='/Stud' component={Stud}/>
        <Route path='/Auth' component={Auth}/>
        <Route path='/view1' component={View1}/>
        <Route path='/view2' component={View2}/>
        <Route path='/view3' component={View3}/>
        <Route path='/view4' component={View4}/>
    </Switch>
)
