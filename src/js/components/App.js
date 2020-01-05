import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import SearchPage from './SearchPage';
import AboutPage from './AboutPage';
import Error from './Error';

const App = () => (
    <Router>
        <div className="app">
            <header className="header">
                <div className="header__section">
                    <h1 className="header__title">ホテル検索サービス</h1>
                    <ul className="header__navi">
                        <li><Link to="/" className="header__link">ホテル検索</Link></li>
                        <li><Link to="/about" className="header__link">使い方</Link></li>
                    </ul>
                </div>
            </header>
            <div className="header--dummy"></div>
            <main className="main">
                <Switch>
                    <Route exact path="/" component={SearchPage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route component={Error} />
                </Switch>
            </main>
        </div>
    </Router>
    
);

export default App;