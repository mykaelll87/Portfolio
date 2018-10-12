import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import proptype from 'prop-types'
import '../../css/Header.css';
class HeaderLink extends Component{
    render(){
        return (
            <li><Link to={this.props.info.link}>{this.props.info.text}</Link></li>
        );
    }
}

HeaderLink.propTypes = {
    info: proptype.shape({
        text:proptype.string,
        link:proptype.string
    })
}
export default HeaderLink