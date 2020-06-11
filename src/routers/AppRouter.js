import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import Bottom from '../components/Bottom'
import Characters from '../components/Characters'
import Gears from '../components/Gears'
import Skills from '../components/Skills'
import Gacha from '../components/Gacha'
import Simulator from '../components/Simulator'
import Notices from '../components/Notice'
import DataProvider from '../components/DataProvider'

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path='/' component={Notices} />
                    <Route path='/Characters' component={Characters} />
                    <Route path='/Gears' component={Gears} />
                    <Route path='/Skills' component={Skills} />
                    <Route path='/Gacha' component={Gacha} />
                    <Route path='/Simulator' component={Simulator} />
                    <Route path='/DataProvider' component={DataProvider} />
                </Switch>
                <Bottom />
            </BrowserRouter>
        </div>
    )
}

export default AppRouter