import React from 'react'
import {Switch,Route} from 'react-router-dom'
import AboutMe from './AboutMe'
import Contact from './Contact'
import HomePage from './HomePage'
import Projects from './Projects'
import Resume from './Resume'

function Main() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route  path="/aboutme" component={AboutMe}/>
            <Route  path="/contact" component={Contact}/>
            <Route  path="/projects" component={Projects}/>
            <Route  path="/resume" component={Resume}/>
        </Switch>
    )
}

export default Main
