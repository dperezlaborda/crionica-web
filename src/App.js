import './App.css';
import React from 'react';
import Menu from './components/Menu';
import Home from './sections/Home';
import News from './sections/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FaqContainer from './sections/FaqContainer';
import ObjectivesContainer from './sections/ObjectivesContainer';
import AchievContainer from './sections/AchievContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Menu />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/noticias" component={News} />
                    <Route exact path="/contacto" component={Contact} />
                    <Route exact path="/preguntas_frecuentes" component={FaqContainer} />
                    <Route exact path="/objetivos" component={ObjectivesContainer} />
                    <Route exact path="/logros" component={AchievContainer} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;