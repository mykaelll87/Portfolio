import React,{Component} from 'react'
import "../css/SkewedContainer.css"
import proptype from 'prop-types'

export default class SkewedContainer extends Component{
    render(){
       return (
        <div id={this.props.id?this.props.id:''}
         className={`skewedWrapper ${this.props.direction?this.props.direction:'ltr'}Skew ${this.props.className?this.props.className:''}`}>
            <div 
                className="skewedDiv">
                    {this.props.children}
            </div>
        </div>
        )
    }
}

SkewedContainer.propTypes={
    id: proptype.string,
    direction: proptype.oneOf(["ltr", "rlt"]),
    className: proptype.string,
    children: proptype.node.isRequired
}