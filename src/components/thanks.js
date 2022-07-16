import React, {Component, Fragment} from "react";
import {Route, Switch, Link } from 'react-router-dom';


class Thanks extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div className="container p-5">
                <div className="row form-box">
                    <div className="col-xl-6">
                        <div className="shadow p-3 mb-5 bg-body rounded">
                            <h2 className="text-center text-success">Thank You!!</h2>
                            <h4 className="text-center text-primary"><a className="btn btn-link" onClick={()=>{this.props.history.goBack()}}>Go back</a></h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Thanks
