import React, {Component, Fragment} from "react";
import './../App.css';
import {Header} from "./Header";
import {Link} from "react-router-dom";

class SignIn extends Component{
    constructor(props){
        super(props)
        debugger
        this.state = {
            email: '',
            password: '' ,
            emailError: '',
            passwordError: '' ,
        }

    }
    handleOnchange =(e)=>{
        const {name, value} = e.target
        this.setState({[name]:value})
    }
    validate() {
        if(!this.state.email.includes('@') && this.state.password.length < 4){
            this.setState({emailError: 'Invalid Email', passwordError: 'Password length should be more than 4'})
        } else if(!this.state.email.includes('@')){
            this.setState({emailError: 'Invalid Email'})
        } else if(this.state.password.length < 4){
            this.setState({passwordError: 'Password length should be more than 4'})
        }else {
            return true
        }
    }
    submitData =(e)=>{
        e.preventDefault()
        if(this.validate()){
            this.props.history.push('/thank-you')
            this.setState({email: '',password: '' ,})
        }
    }
    render(){
        const {email,  password, emailError, passwordError} = this.state
        return(
            <div className="container p-5">
                <div className="row form-box">
                    <div className="col-xl-6">
                        <div className="shadow p-3 mb-5 bg-body rounded">
                            <h2 className="text-center">Sign In</h2>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" value={email} name="email" className="form-control" placeholder="Enter Your Email"
                                       onChange={this.handleOnchange}
                                />
                                <p className="text-danger">{emailError && emailError}</p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" value={password} name="password" className="form-control" placeholder="Enter Password"
                                       onChange={this.handleOnchange}
                                />
                            </div>
                            <p className="text-danger">{passwordError && passwordError}</p>
                            <button className="btn btn-primary" onClick={this.submitData}>Submit</button>
                            <h5 className="mt-4">Do not have an Account? <Link className="btn btn-link" to="/sign-in">Sign Up</Link></h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SignIn
