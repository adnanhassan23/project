import React from 'react';
import $ from 'jquery';
import Button from '../../atoms/Button';
import edit from "../../../Assets/img/Pencil.png"


class AccountExchange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    editLink = (e) => {
        console.log(e)
        $(e + 'Ok').removeClass('d-none')
        $(e + 'Pen').addClass('d-none')
        $(e).prop("disabled", false);
    }
    handleOk = (e) => {
        $(e + 'Ok').addClass('d-none');
        $(e + 'Pen').removeClass('d-none');
        $(e).prop("disabled", true);
    }

    componentDidMount = () => {
        $("#twitter").prop("disabled", true);
        $("#ApiKey").prop("disabled", true);
    }

    render() {
        return (
            <>
                <div className="container-fluid LineBackground">
                    <div className="row">
                        <div className="col-12 col-md-8 col-lg-7 col-xl-6 mx-auto">
                            <form className="GreyBack Round p-3">
                                <p className="text-center my-3">Connect an Exchange Account</p>
                                <div className="Round bg-white p-5 m-2">
                                    <div className="row">
                                        <table className="formTable">
                                            <tr className="row mb-3">
                                                <td className="col-12 col-sm-5 col-md-12 col-lg-5 my-auto">
                                                    <label htmlFor="exchange" className="float-start float-sm-end float-md-start float-lg-end" >Choose your Exchange :</label></td>
                                                <td className="col-12 col-sm-7 col-md-12 col-lg-7 my-auto">
                                                    <div className="dropdown">
                                                        <button className="py-3 px-4 customInput w-75 text-start" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Choose Exchange
                                                        </button>
                                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                            <li className="py-2">Binance</li>
                                                            <li className="py-2">Huobi</li>
                                                            <li className="py-2">KuCoin</li>
                                                            <li className="py-2">Kraken</li>
                                                            <li className="py-2">Gate.io</li>
                                                            <li className="py-2">Coinbase</li>
                                                            <li className="py-2">FTX</li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="row mb-3">
                                                <td className="col-12 col-sm-5 col-md-12 col-lg-5 my-auto">
                                                    <label htmlFor="ApiKey" onClick={() => this.editLink("#ApiKey")} className="float-start float-sm-end float-md-start float-lg-end" >Api Key :</label></td>
                                                <td className="col-12 col-sm-7 col-md-12 col-lg-7 my-auto">
                                                    <div className="d-inline-flex customInput mw-100 w-75">
                                                        <input type="text"
                                                            className="bg-transparent py-3 ps-4 border-0 w-95"
                                                            id="ApiKey"
                                                            name="ApiKey"
                                                            placeholder="Type or paste your Api Key" />
                                                        <button type="button" className="btn" id="ApiKeyPen" onClick={() => this.editLink("#ApiKey")}> <span ><img src={edit} alt=""  ></img></span> </button>
                                                        <button type="button" className="btn d-none" id="ApiKeyOk" onClick={() => this.handleOk("#ApiKey")} > <span >OK</span> </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="row mb-3">
                                                <td className="col-12 col-sm-5 col-md-12 col-lg-5 my-auto">
                                                    <label htmlFor="SecretKey" onClick={() => this.editLink("#SecretKey")} className="float-start float-sm-end float-md-start float-lg-end" >Api Secret Key :</label></td>
                                                <td className="col-12 col-sm-7 col-md-12 col-lg-7 my-auto">
                                                    <div className="d-inline-flex customInput mw-100  w-75">
                                                        <input type="text"
                                                            className="bg-transparent py-3 ps-4 border-0 w-95"
                                                            id="SecretKey"
                                                            placeholder="Enter Username or Paste Link "
                                                            name="SecretKey" />
                                                        <button type="button" className="btn" id="SecretKeyPen" onClick={() => this.editLink("#SecretKey")}> <span ><img src={edit} alt=""  ></img></span> </button>
                                                        <button type="button" className="btn d-none" id="SecretKeyOk" onClick={() => this.handleOk("#SecretKey")} > <span >OK</span> </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                        <div className="mx-auto mt-4" style={{ width: "fit-content" }}>
                                            <Button value="Create" Link="/Login" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AccountExchange;