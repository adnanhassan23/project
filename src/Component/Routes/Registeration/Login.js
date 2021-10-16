import React from 'react';
import Button from '../../atoms/Button';
import facebook from '../../../Assets/img/facebook.png'
import google from '../../../Assets/img/google.png'
import Auth from '../../Auth/Auth';
import Footer from '../../SubComponent/Footer/Footer';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            path: "/Dashboard",
            Username: "",
            password: ""
        }
    }
    componentDidMount = () => {

        if (window.history.state.state) {

            // Because we are passing props from both side from link and Redirect so redirect can be get from window.history

            this.setState({ path: window.history.state.state.from.pathname })
        }
    }
    onLogin = () => {
        if (this.state.Username.includes('User')) {
            Auth.login('User')
        }
        else if (this.state.Username.includes('Trader')) {
            Auth.login('Trader')
        }
        this.props.onChange()
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <>
                <div className="container-fluid LineBackground ContainerHeight">
                    <div className="maxWidth">
                        <div className="row">
                            <div className="col-12 col-md-8 col-lg-7 col-xl-6 mx-auto">
                                <form className="GreyBack Round p-3">
                                    <p className="text-center my-3">Log In</p>
                                    <div className="Round bg-white p-5 m-2">
                                        <div className="row">
                                            <div className="col-12 my-3">
                                                <input type="text"
                                                    placeholder="Username"
                                                    name="Username"
                                                    className="py-3 px-4 customInput w-100"
                                                    onChange={this.handleChange} />
                                            </div>
                                            <div className="col-12 my-3">
                                                <input type="password"
                                                    placeholder="Password"
                                                    name="password"
                                                    className="py-3 px-4 customInput w-100"
                                                    onChange={this.handleChange} />
                                            </div>
                                            <div className="d-flex px-5">
                                                <div className="form-check">
                                                    <input className="form-check-input lngTck" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Remember me
                                                    </label>
                                                </div>
                                                <p className="ms-auto" >Forget Password?</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-auto my-4" style={{ width: "fit-content" }}>
                                        {console.log(this.state.path)}
                                        <Button value="Log In" Link={this.state.path} function={this.onLogin} />
                                    </div>
                                    <div className="my-3">
                                        <p className="text-center">or log in via</p>
                                    </div>
                                    <div className="row my-3">
                                        <div className="col-6">
                                            <img src={facebook} className="ms-auto d-block" width="55%" alt="" />
                                        </div>
                                        <div className="col-6">
                                            <img src={google} className="me-auto d-block" width="55%" alt="" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Login;