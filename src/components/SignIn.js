import React, {Component, Fragment} from "react";
import {Route, Switch, Link } from 'react-router-dom';


class SignIn extends Component{
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
                            <h2 className="text-center">Sign In</h2>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" placeholder="Enter Your Email"/>
                                 </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" placeholder="Enter Password"/>
                                </div>

                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                            <h5 className="mt-4">Don't have an Account? <Link className="btn btn-link" to="/">Sign Up</Link></h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SignIn
