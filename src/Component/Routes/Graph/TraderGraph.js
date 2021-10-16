import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";
import "./GraphCss.css"
import Sidebar from '../../SubComponent/SideBar/Sidebar';
import $ from "jquery"
import edit from "../../../Assets/img/Pencil.png"
import TradingViewChart from './TradingViewChart';
import Footer from '../../SubComponent/Footer/Footer'

const TraderGraph = () => {
    const initialstate = {
        Pair: "",
        ButtonValue: "Market",
        PositionSize: "",
        StopPrice: "",
        LimitPrice: ""
    }

    const [FormData, setFormData] = useState(initialstate);
    const { Pair, ButtonValue, PositionSize, StopPrice, LimitPrice } = FormData;

    const onHandleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...FormData,
            [name]: value,
        })
    }
    const [toggle, setToggle] = useState(true);

    const editLink = (e) => {
        console.log(e)
        $(e + 'Ok').removeClass('d-none')
        $(e + 'Pen').addClass('d-none')
        $(e).prop("disabled", false);
    }
    const handleOk = (e) => {
        $(e + 'Ok').addClass('d-none');
        $(e + 'Pen').removeClass('d-none');
        $(e).prop("disabled", true);
    }
    return (
        <React.Fragment>
            <div className="container-fluid mt-3 Height85">
                <Sidebar />
                <div className="" id="containerSelectorFocus" style={{ paddingLeft: "60px" }}>

                    <div className="row mx-0">
                        <div className="bg-LightRed col-lg-7 col-12 mx-auto R25 p-4 h-auto order-2 order-lg-1 mt-3 mt-lg-0">
                            <TradingViewChart />
                        </div>
                        <div className="col-lg-4 col-12 mx-auto h-75 px-0 order-1 order-lg-2">
                            <div className="bg-LightRed R25 form-col p-4 w-fitContent mx-auto">
                                <p className="text-center ls-3" >OPEN A POSITIONS</p>
                                <div className="col-10 m-5 mb-0">
                                    <form className="fs-xSmall">
                                        <div className="form-group row justify-content-center mt-2 mb-4">
                                            <label htmlFor="inputState" className="col-2 my-auto">
                                                Pair:
                                            </label>

                                            <div className="col-9">
                                                <select
                                                    className="form-select form-select-sm rounded-pill p-3 border-0 fs-xSmall"
                                                    aria-label="Default select example"
                                                    name="Pair" value={Pair} onChange={onHandleChange}
                                                >
                                                    <option value="">PAIR</option>
                                                    <option value="BTC">BTC/USDT</option>
                                                    <option value="ETH">ETH/USDT</option>
                                                    <option value="BNB">BNB/USDT</option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="row">
                                    <div className="col-12 text-center px-0 py-4">
                                        <ul className="Tags RadioToButton d-inline-flex px-0 w-100 fs-xSmall">
                                            <li className="mx-auto w-100 px-1 my-auto ">
                                                <input type="radio"
                                                    id="Market"
                                                    name="ButtonValue"
                                                    value="Market"
                                                    defaultChecked
                                                    onClick={onHandleChange} />
                                                <label className="w-100 p-2  text-center" htmlFor="Market">Market</label>
                                            </li>
                                            <li className="mx-auto w-100 px-1 my-auto">
                                                <input type="radio"
                                                    id="Limit"
                                                    name="ButtonValue"
                                                    value="Limit"
                                                    onClick={onHandleChange} />
                                                <label className="w-100 p-2  text-center" htmlFor="Limit">Limit</label>
                                            </li>
                                            <li className="mx-auto w-100 my-auto">
                                                <input type="radio"
                                                    id="Stop"
                                                    name="ButtonValue"
                                                    value="Stop"
                                                    onClick={onHandleChange} />
                                                <label className="w-100 p-2  text-center" htmlFor="Stop">Stop</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <form className="fs-xSmall"><div className="row my-4 align-items-center justify-content-start justify-content-sm-end justify-content-md-center">
                                    <label
                                        htmlFor="Position"
                                        className="col-4 col-form-label ml-auto text-end"
                                    >
                                        Position size:
                                    </label>
                                    <div className="col-8 p-0 bg-white R25">
                                        <div className="d-inline-flex mw-100 w-100">
                                            <input type="text"
                                                className="bg-transparent py-3 ps-4 border-0 w-95"
                                                id="ApiKey"
                                                name="ApiKey"
                                                placeholder="Type or paste your Api Key" />
                                            <button type="button" className="btn ms-auto" id="ApiKeyPen" onClick={() => editLink("#ApiKey")}> <span ><img src={edit} alt=""  ></img></span> </button>
                                            <button type="button" className="btn d-none" id="ApiKeyOk" onClick={() => handleOk("#ApiKey")} > <FontAwesomeIcon
                                                icon={faCheck}
                                            />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                    {ButtonValue === "Market" ? null :

                                        <React.Fragment>
                                            <div className="row my-4 align-items-center justify-content-start justify-content-sm-end justify-content-md-center">
                                                <label
                                                    htmlFor="Limit"
                                                    className="col-4 col-form-label ml-auto text-end align-middle"
                                                >
                                                    Limit Price
                                                </label>
                                                <div className="col-8 p-0 bg-white R25">
                                                    <div className="d-inline-flex mw-100 w-100">
                                                        <input type="text"
                                                            className="bg-transparent py-3 ps-4 border-0 w-95"
                                                            placeholder="38.634,00"
                                                            id="Limit"
                                                            name="LimitPrice"
                                                            value={LimitPrice}
                                                            onChange={onHandleChange} />
                                                        <span className="ms-auto my-auto me-2" >USDT</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    }
                                    {ButtonValue === "Stop" ? <>
                                        <div className="row my-4 align-items-center justify-content-start justify-content-sm-end justify-content-md-center">
                                            <label
                                                htmlFor="Stop"
                                                className="col-4 col-form-label ml-auto text-end align-middle"
                                            >
                                                Stop Price
                                            </label>
                                            <div className="col-8 p-0 bg-white R25">
                                                <div className="d-inline-flex mw-100 w-100">
                                                    <input type="text"
                                                        className="bg-transparent py-3 ps-4 border-0 w-95"
                                                        placeholder="38.634,00"
                                                        id="Stop"
                                                        name="StopPrice"
                                                        value={StopPrice}
                                                        onChange={onHandleChange} />
                                                    <span className="ms-auto my-auto me-2" >USDT</span>
                                                </div>
                                            </div>
                                        </div> </> : <></>}
                                </form>

                                <div className="row mt-5">
                                    <div className="col">
                                        <button
                                            type="button"
                                            className="btn gradientGreen text-white btn-md rounded-pill mx-auto d-block px-5 py-2 mb-3"
                                        >
                                            BUY
                                        </button>
                                    </div>
                                    <div className="col">
                                        <button
                                            type="button"
                                            className="btn gradientRed text-white btn-md rounded-pill mx-auto d-block px-5 py-2 mb-3"
                                        >
                                            SELL
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default TraderGraph;