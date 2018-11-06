import React, {Component} from "react";
import PageHeader from "../components/PageHeader";
import "../css/Page.css";

export default class MainPage extends Component{
    render(){
        return (
            <div className="page">
                <PageHeader>
                    <p>Bon matin</p>
                </PageHeader>
            </div>
            
        );
    }
}