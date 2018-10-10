import React, {Component} from 'react'
import SkewedContainer from '../components/SkewedContainer'
import proptype from 'prop-types'
import '../css/Header.css';
export default class Header extends Component{
    render(){
        return (
            <SkewedContainer id="AppHeader" className="noTop" direction="ltr">
                <div className="siteTitle wow fadeInLeft">
                    <h1>PortFolio</h1>
                    <h2>Mykael Lemieux-Lafontaine</h2>
                </div>
                <ul className="pageList wow fadeInRight">
                    <li>Bon matin</li>
                    <li>Bon milieu d'après midi</li>
                </ul>
            </SkewedContainer>
        )
    }
}

Header.propTypes = {
    language: proptype.string.isRequired
}