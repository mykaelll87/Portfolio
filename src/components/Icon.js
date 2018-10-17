import React, {Component} from 'react';
import { icons } from '../stores/iconStore';
import propTypes from 'prop-types';
import '../css/Icon.css';
export default class Icon extends Component{
    constructor(p){
        super(p);
        this.iconInfo = icons[this.props.iconId];
        console.log(icons);
    }
    render(){
        return(
            <div className="icon" title={this.iconInfo.title}>{this.iconInfo.iconSVG}</div>
        )
    }
}

Icon.propTypes={
    iconId: propTypes.string.isRequired
}