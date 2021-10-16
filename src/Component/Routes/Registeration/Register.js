import React from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Button from '../../atoms/Button';
import facebook from '../../../Assets/img/facebook.png'
import google from '../../../Assets/img/google.png'
import Footer from '../../SubComponent/Footer/Footer'


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            AccountType: "Trader",
            firstName: "",
            phone: ""
        }
    }
    updatePhone = (value) => {

        this.setState({
            phone: value
        })
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value });
    }

    render() {
        return (
            <>
                <div className="container-fluid LineBackground ContainerHeight">
                    <div className="maxWidth">
                        <div className="row">
                            <div className="col-12 col-md-8 col-lg-7 col-xl-6 mx-auto">
                                <form className="GreyBack Round p-3">
                                    <p className="text-center">Create your Account</p>
                                    <div className="col-12 px-0">
                                        <div className="d-block mx-auto ">
                                            <ul className="RadioToButton d-inline-flex w-100 px-4">
                                                <li className="w-50 mx-auto py-auto px-0 px-lg-3">
                                                    <input
                                                        type="radio"
                                                        id="Traders Account"
                                                        name="AccountType"
                                                        value="Trader"
                                                        defaultChecked={this.state.AccountType == "Trader" ? true : false}
                                                        onClick={this.handleChange}
                                                    />
                                                    <label htmlFor="Traders Account" className="py-2 Bold HalfScreen h-100 my-auto d-block text- mx-auto bg-Grey">Traders Account</label>
                                                </li>
                                                <li className="w-50 mx-auto py-auto px-0 px-lg-3">
                                                    <input
                                                        type="radio"
                                                        id="Users Account"
                                                        name="AccountType"
                                                        value="Users"
                                                        defaultChecked={this.state.AccountType == "Users" ? true : false}
                                                        onClick={this.handleChange}
                                                    />
                                                    <label htmlFor="Users Account" className="py-2 Bold HalfScreen h-100 my-auto d-block text- mx-auto bg-Grey">Users Account</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="Round bg-white p-5 m-2">
                                        <div className="row">
                                            <div className="col-12 col-sm-6 col-md-12 col-lg-6 mb-3">
                                                <input type="text"
                                                    placeholder="First Name"
                                                    name="firstName"
                                                    className="py-2 px-4 customInput w-100"
                                                    value={this.state.firstName}
                                                    onChange={this.handleChange} />
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-12 col-lg-6 mb-3">
                                                <input type="text"
                                                    placeholder="Last Name"
                                                    name="lastName"
                                                    className="py-2 px-4 customInput w-100" />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <input type="text" placeholder="Username" name="Username" className="py-2 px-4 customInput w-100" />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <input type="email" placeholder="e-Mail" name="e-mail" className="py-2 px-4 customInput w-100" />
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-12 col-lg-6 mb-3">
                                                <input type="password" placeholder="Password" name="password" className="py-2 px-4 customInput w-100" />
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-12 col-lg-6 mb-3">
                                                <input type="password" placeholder="Enter Password again" name="Retype" className="py-2 px-4 customInput w-100" />
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-12 col-lg-6 mb-3">
                                                <PhoneInput
                                                    value={this.state.phone}
                                                    placeholder="Enter phone"
                                                    inputProps={{
                                                        // name: 'phone',
                                                        required: true,
                                                    }}
                                                    containerclassName="w-100"
                                                    country={'kw'}
                                                    onChange={phone => this.setState({ phone })}
                                                />
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-12 col-lg-6 mb-3">
                                                <select className="form-control customInput../" name="country">
                                                    <option value="">Country</option>
                                                    <option value="Pakistan">Pakistan</option>
                                                    <option value="Dubai">Dubai</option>
                                                    <option value="America">America</option>
                                                    <option value="England">England</option>
                                                </select>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <input type="text" placeholder="Do you have a REFERRAL CODE? Paste it here!" name="code" className="form-control Dark Round" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-center">By signing up, you agree to our Terms & Conditions and Privacy Policy</p>
                                    <div className="mx-auto my-3" style={{ width: "fit-content" }}>
                                        <Button value="Create" Link="/AccountExchange" />
                                    </div>
                                    <div className="my-3">
                                        <p className="text-center">or sign up via</p>
                                    </div>
                                    <div className="row">
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

export default Register;