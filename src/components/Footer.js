import React, {Component} from 'react';
import SkewedContainer from '../components/SkewedContainer';
import Icon from './Icon';
import '../css/Footer.css';

export default class Footer extends Component{
    render(){
        return (
            <SkewedContainer className="bgAccent noBottom" id="Footer">
            <ul className="links">
                <li><a href="https://github.com/mykaelll87" target="_blank" rel="noopener noreferrer">
                    <Icon iconId="GH"/></a></li>
                <li><a href="https://www.linkedin.com/in/myka%C3%ABl-lemieux-lafontaine-909093169/" target="_blank" rel="noopener noreferrer">
                    <Icon iconId="LN"/></a></li>
            </ul>
            <p className="copyright">Copyright &copy;Mykaël Lemieux-Lafontaine 2018</p>
            </SkewedContainer>
        );
    }
}