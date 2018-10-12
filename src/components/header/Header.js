import React, {Component} from 'react'
import SkewedContainer from '../SkewedContainer'
import proptype from 'prop-types'
import {translations} from '../../stores/translationStore';
import HeaderLink from './HeaderLink';
import '../../css/Header.css';
export default class Header extends Component{
    constructor(p){
        super(p);
        this.text = translations[this.props.language].header;
    }
    render(){
        return (
            <SkewedContainer id="AppHeader" className="noTop" direction="ltr">
                <div id="AppHeaderWrapper">
                    <div className="siteTitle wow fadeInLeft">
                    <h1>Mykael Lemieux-Lafontaine</h1>
                    <h2>{this.text.jobTitle}</h2>
                </div>
                <ul className="pageList wow fadeInRight">
                    {this.text.pages.map((element, i) => 
                        <HeaderLink key={"Page"+i} info={element}/>)}
                </ul>
                </div>
                
            </SkewedContainer>
        )
    }
}

Header.propTypes = {
    language: proptype.string.isRequired
}