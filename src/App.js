import React, { Component } from 'react';
import './css/App.css';
import 'animate.css';
import { WOW } from 'wowjs';
import SkewedContainer from './components/SkewedContainer'
import Header from './components/Header';
import propTypes from "prop-types";

class App extends Component {
    constructor(p) {
        super(p);
        this.supportedTranslations = ["fr", "en"]
        console.log(this.props)
        this.lang = this.supportedTranslations.indexOf(this.props.lang.toLowerCase()) >= 0 ?
            this.props.lang.toLowerCase() :
            this.supportedTranslations[0];
    }
    componentDidMount() {
        new WOW().init();
    }
    render() {
        return (
            <div className="App">
                <Header language={this.lang} />
                <div style={{ height: '75vh' }}></div>
                <SkewedContainer className="bgAccent noBottom">
                    <p>Bon matin</p>
                </SkewedContainer>
            </div>
        );
    }
}

App.propTypes = {
    lang: propTypes.string.isRequired
}

export default App;
