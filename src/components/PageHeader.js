import React,{ Component } from "react";
import propTypes from "prop-types";
import "../css/PageHeader.css";

export default class PageHeader extends Component{
    render(){
        return(
            <div className="pageHeaderWrapper">
                <div className="pageHeader wow fadeInUp">
                    {this.props.children}
                </div>
            </div>
            
        );
    }
}

PageHeader.propTypes = {
    
}