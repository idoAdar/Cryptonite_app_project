import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Home from '../Views/Home/Home';
import LiveReports from '../Views/Live_reports/Live_reports';
import Me from '../Views/Me/Me';
import Footer from '../Footer/Footer';
import Aux from '../_Aux/_Aux';

const Layout = () => {
    return (
        <Aux>
            <Header />
            <Navbar />
            <main>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/live-reports" component={LiveReports}/>
                    <Route path="/profile" component={Me}/>
                </Switch>
            </main>
            <Footer />
        </Aux>
    )
}

export default Layout;