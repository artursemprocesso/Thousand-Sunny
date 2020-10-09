import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomeScreen from './containers/Home'
import HolidaysScreen from './containers/Holidays'

import Test from './containers/Test'

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={()=> <HomeScreen/>}/>
                <Route path={["/holidays/:local","/holidays"]} exact render={props=> <HolidaysScreen data={props}/>}/>
                <Route path={["/test"]} exact render={props=> <Test data={props}/>}/>
            </Switch>
        </BrowserRouter>
    )
}
