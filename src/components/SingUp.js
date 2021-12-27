import React, {Component, Fragment} from "react";
import './../App.css';
import {Header} from "./Header";
import {Link} from "react-router-dom";

class SignUp extends Component{
    constructor(props){
        super(props)
        debugger
        this.state = {
           fullName: '',
           email: '',
           phone: '',
           password: '' ,
           fullNameError: '',
           emailError: '',
           phoneError: '',
           passwordError: '' ,
        }

    }
    handleOnchange =(e)=>{
        const {name, value} = e.target
        this.setState({[name]:value})
    }
    validate() {
        if(!this.state.fullName && !this.state.email.includes('@') && !this.state.phone && this.state.password.length < 4){
           this.setState({fullNameError: 'This Field can not be blank', emailError: 'Invalid Email', phoneError: 'This field is required', passwordError: 'Password length should be more than 4'})
        } else if (!this.state.fullName){
            this.setState({fullNameError: 'This Field can not be blank'})
        } else if(!this.state.email.includes('@')){
            this.setState({emailError: 'Invalid Email'})
        }else if(!this.state.phone) {
            this.setState({phoneError: 'This field is required'})
        }else if(this.state.password.length < 4){
            this.setState({passwordError: 'Password length should be more than 4'})
        }else {
            return true
        }
    }
    submitData =(e)=>{
        e.preventDefault()
        if(this.validate()){
            this.props.history.push('/thank-you')
            this.setState({fullName: '', email: '', phone: '', password: '' ,})
        }
    }
    render(){
        const {fullName, email, phone, password, fullNameError, emailError, phoneError, passwordError} = this.state
        return(
        <div className="container p-5">
            <div className="row form-box">
            <div className="col-xl-6">
                <div className="shadow p-3 mb-5 bg-body rounded">
                     <h2 className="text-center">Sign up</h2>

                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input type="text" value={fullName} name="fullName" className="form-control" placeholder="Enter Full Name"
                            onChange={this.handleOnchange}
                            />
                            <p className="text-danger">{fullNameError && fullNameError}</p>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" value={email} name="email" className="form-control" placeholder="Enter Your Email"
                                   onChange={this.handleOnchange}
                            />
                            <p className="text-danger">{emailError && emailError}</p>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Enter Phone</label>
                            <input type="text" value={phone} name="phone" className="form-control" placeholder="Enter Phone"
                                   onChange={this.handleOnchange}
                            />
                            <p className="text-danger">{phoneError && phoneError}</p>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" value={password} name="password" className="form-control" placeholder="Enter Password"
                                   onChange={this.handleOnchange}
                            />
                        </div>
                         <p className="text-danger">{passwordError && passwordError}</p>
                        <button className="btn btn-primary" onClick={this.submitData}>Submit</button>
                    <h5 className="mt-4">Already have an Account? <Link className="btn btn-link" to="/sign-in">Sign In</Link></h5>
                </div>
            </div>
            </div>
        </div>
        )
    }
}
export default SignUp
