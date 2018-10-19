import React, { Component } from 'react';
import propTypes from "prop-types";
import {Switch, Route} from "react-router-dom";
import './css/App.css';
import 'animate.css';
import { WOW } from 'wowjs';
import Header from './components/header/Header';
import Footer from './components/Footer';
import {supportedLanguages} from './stores/translationStore';
import MainPage from './pages/MainPage';
import "particles.js";
import particleConfig from './particlesjs-config.json';

class App extends Component {
    constructor(p) {
        super(p);
        this.lang = supportedLanguages.indexOf(this.props.lang.toLowerCase()) >= 0 ?
            this.props.lang.toLowerCase() :
            supportedLanguages[0];
    }
    componentDidMount() {
        new WOW().init();
        //console.log(particleConfig)
        window.particlesJS("particlesJS", particleConfig);
    }
    render() {
        return (
            <div className="App">
                <Header language={this.lang} />
                {/*Add particle.js?*/}
                <div id="particlesJS"></div>
                <Switch>
                    <Route path="/portfolio"><p>portfolio</p></Route>
                    <Route path="/contact"><p>contact</p></Route>
                    <Route><MainPage/></Route>
                </Switch>
                {/*<div style={{ height: '75vh' }}></div>*/}
                <Footer/>
            </div>
        );
    }
}

App.propTypes = {
    lang: propTypes.string.isRequired
}

export default App;
