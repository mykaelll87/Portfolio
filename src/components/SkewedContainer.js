import React,{Component} from 'react'
import "../css/SkewedContainer.css"

export default class Allo extends Component{
    constructor(p){
        super(p);
        
    }
    render(){
       return (
        <div id={this.props.id?this.props.id:''} 
            className={`skewedDiv ${this.props.direction?this.props.direction:'ltr'}Skew ${this.props.className?this.props.className:''}`}>
                {this.props.children}
        </div>
        )
    }
}