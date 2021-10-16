import React, { useState, useEffect } from "react";
import Sticky from "wil-react-sticky";
import $ from 'jquery';
import edit from "../../../Assets/img/Pencil.png"
import eye from '../../../Assets/img/eye.png'
import Sidebar from '../../SubComponent/SideBar/Sidebar';
import SideNavOption from './SideNav';

const ConnectExchange = () => {
    const initialstate = {
        Type: "",
        API: "",
        Secret: "",
        services: []
    }

    const [DetailData, setDetailData] = useState(initialstate);
    const { Type, API, Secret, services } = DetailData;

    const onHandleChange = (event) => {
        const { name, value } = event.target
        setDetailData({
            ...DetailData,
            [name]: value
        })
    }

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

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
    useEffect(() => {
        $("#ApiKey").prop("disabled", true);
        $("#secretKey").prop("disabled", true);
    }, [])


    const ConnectService = () => {
        if (Type !== "" && API !== "" && Secret !== "") {
            const random = Math.floor(100000 + Math.random() * 900000);
            const newService = {
                serviceid: random,
                Type: Type,
                API: API,
                Secret: Secret
            }
            services.push(newService)
            setDetailData({
                ...DetailData,
                Type: "",
                API: "",
                Secret: ""
            })
        }
    }

    const onUpdateType = (event) => {
        const id = event.target.id.replace("Type", "");
        var array;
        // eslint-disable-next-line
        services.map((service, index) => {
            // eslint-disable-next-line
            if (service.serviceid == id) {
                array = services;
                array[index].Type = event.target.value
                setDetailData({
                    ...DetailData,
                    services: array
                })
            }
        })
    }

    const onUpdateAPI = (event) => {
        const id1 = event.target.id.replace("API", "");
        var array;
        // eslint-disable-next-line
        services.map((service, index) => {
            // eslint-disable-next-line
            if (service.serviceid == id1) {
                array = services;
                array[index].API = event.target.value
                setDetailData({
                    ...DetailData,
                    services: array
                })
            }
        })
    }

    const onUpdateSecret = (event) => {
        const id1 = event.target.id.replace("Secret", "");
        var array;
        // eslint-disable-next-line
        services.map((service, index) => {
            // eslint-disable-next-line
            if (service.serviceid == id1) {
                array = services;
                array[index].Secret = event.target.value
                setDetailData({
                    ...DetailData,
                    services: array
                })
            }
        })
    }

    const RenderMap = services.map((servicemap) => {
        return (
            <React.Fragment>
                <div className="bg-white py-4 R25 mt-3">
                    <div className="col-11 mx-auto">
                        <div className="row">
                            <td className="col-12 col-lg-6 mx-sm-auto mx-md-0 ">
                                <tr className="row mb-3">
                                    <td className="col-12 col-sm-5 col-md-12 col-lg-5 col-xl-5 my-auto ">
                                        <label htmlFor="ApiKey" className="float-start float-sm-end float-md-start float-lg-end" >Your Exchange:</label></td>
                                    <td className="col-12 col-xl-7 my-auto">
                                        <div className="d-inline-flex customInput mw-100 w-95">
                                             <input type="text"
                                                className="bg-transparent py-3 ps-4 border-0 w-95"
                                                name="API"
                                                disabled
                                                id={servicemap.serviceid + "Type"}
                                                value={servicemap.Type}/>
                                        </div>
                                    </td>
                                </tr>
                            </td>
                        </div>

                        <div className="row">
                            <td className="col-12 col-lg-6 mx-auto ">
                                <tr className="row mb-3">
                                    <td className="col-12 col-sm-5 col-md-12 col-lg-5 col-xl-5 my-auto">
                                        <label htmlFor="ApiKey" onClick={() => editLink("#ApiKey")} className="float-start float-sm-end float-md-start float-lg-end" >Api Key: </label></td>
                                    <td className="col-12 col-xl-7 my-auto">
                                        <div className="d-inline-flex customInput mw-100 w-95">
                                            <input type="text"
                                                className="bg-transparent py-3 ps-4 border-0 w-95"
                                                name="API"
                                                id={servicemap.serviceid + "API"}
                                                value={servicemap.API}
                                                // eslint-disable-next-line
                                                onChange={onUpdateAPI} id="APIKey"
                                                placeholder="Type or paste your Api Key" />
                                            <button type="button" className="btn" id="ApiKeyPen" onClick={() => editLink("#ApiKey")}> <span className="Font1vh Blue">MANAGE</span> </button>
                                            <button type="button" className="btn d-none" id="ApiKeyOk" onClick={() => handleOk("#ApiKey")} > <span className="Font1vh">OK</span> </button>
                                        </div>
                                    </td>
                                </tr>
                            </td>

                            <td className="col-12 col-lg-6 mx-auto ">
                                <tr className="row mb-3">
                                    <td className="col-12 col-sm-5 col-md-12 col-lg-5 col-xl-4 my-auto">
                                        <label htmlFor="secretKey" onClick={() => editLink("#secretKey")} className="float-start float-sm-end float-md-start float-lg-end" >API secret key:  </label></td>
                                    <td className="col-12 col-xl-8 my-auto">
                                        <div className="row">
                                            <div className="d-inline-flex customInput mw-100 col-10">
                                                <input
                                                    className="bg-transparent py-3 ps-4 border-0 w-95"
                                                    id={servicemap.serviceid + "Secret"}
                                                    value={servicemap.Secret}
                                                    // eslint-disable-next-line
                                                    onChange={onUpdateSecret} id="secretKey"
                                                    placeholder="Secret Key"
                                                    type={passwordShown ? "text" : "password"} />
                                                <button type="button" className="btn" id="secretKeyPen" onClick={() => editLink("#secretKey")}> <span className="Font1vh Blue">MANAGE</span> </button>
                                                <button type="button" className="btn d-none" id="secretKeyOk" onClick={() => handleOk("#secretKey")} > <span className="Font1vh" >OK</span> </button>
                                            </div>
                                            <i onClick={togglePasswordVisiblity} className="col-2 my-auto"> <button className="btn p-0" >{<img src={eye} alt=""></img>}</button></i>
                                        </div>
                                    </td>
                                </tr>
                            </td>
                        </div>
                        <div className="d-block mx-auto pt-5">
                            <button className="col-xl-2 d-block mx-auto border-0 bg-Grey White p-3 R25"
                                onClick={ConnectService}>
                                DISCONNECT
                            </button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    })

    return (
        <div>
            <div className="container-fluid mt-3 Height85">
                <Sidebar />
                <div className="container" id="containerSelectorFocus" style={{ paddingLeft: "60px" }} >
                    <div className="row">
                        <div className="col-lg-4 col-xl-3">
                            <Sticky
                                containerSelectorFocus="#containerSelectorFocus"
                                offsetTop={20}
                                stickyEnableRange={[992, Infinity]}
                            >
                                <div className="box ">
                                    <SideNavOption />
                                </div>
                            </Sticky>
                        </div>
                        <div className="col-lg-8 col-xl-9 GreyBack R25 p-3 p-lg-4 mt-3 mt-lg-0 formTable">
                            <h6 className="text-center p-3 Font20">Connect an Exchange</h6>
                            <div className="bg-white p-4 R25">
                                <div className="row">
                                    <td className="col-12 col-lg-6 mx-sm-auto mx-md-0 ">
                                        <tr className="row mb-3">
                                            <td className="col-12 col-sm-5 col-md-12 col-lg-5 col-xl-5 my-auto ">
                                                <label htmlFor="ApiKey" className="float-start float-sm-end float-md-start float-lg-end mx-sm-0" >Choose your Exchange:</label></td>
                                            <td className="col-12 col-xl-7 my-auto">
                                                <div className="d-inline-flex customInput mw-100 w-95">
                                                    <select name="Type" value={Type} onChange={onHandleChange}
                                                        className="col-12 p-3 R25 LightGrey border-0">
                                                        <option value="">Choose Exchange</option>
                                                        <option value="volvo">Volvo</option>
                                                        <option value="saab">Saab</option>
                                                        <option value="opel">Opel</option>
                                                        <option value="audi">Audi</option>
                                                    </select>
                                                </div>
                                            </td>
                                        </tr>
                                    </td>
                                </div>

                                <div className="row">
                                    <td className="col-12 col-lg-6 mx-auto ">
                                        <tr className="row mb-3">
                                            <td className="col-12 col-sm-5 col-md-12 col-lg-5 col-xl-5 my-auto">
                                                <label htmlFor="ApiKey" onClick={() => editLink("#ApiKey")} className="float-start float-sm-end float-md-start float-lg-end mx-sm-0" >Api Key: </label></td>
                                            <td className="col-12 col-xl-7 my-auto">
                                                <div className="d-inline-flex customInput mw-100 w-95">
                                                    <input type="text"
                                                        className="bg-transparent py-3 ps-4 border-0 w-95"
                                                        id="ApiKey"
                                                        name="API"
                                                        value={API}
                                                        onChange={onHandleChange}
                                                        placeholder="Type or paste your Api Key" />
                                                    <button type="button" className="btn" id="ApiKeyPen" onClick={() => editLink("#ApiKey")}> <span ><img src={edit} alt=""  ></img></span> </button>
                                                    <button type="button" className="btn d-none" id="ApiKeyOk" onClick={() => handleOk("#ApiKey")} > <span className="Font1v">OK</span> </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </td>

                                    <td className="col-12 col-lg-6 mx-auto ">
                                        <tr className="row mb-3">
                                            <td className="col-12 col-sm-5 col-md-12 col-lg-5 col-xl-4 my-auto">
                                                <label htmlFor="secretKey" onClick={() => editLink("#secretKey")} className="float-start float-sm-end float-md-start float-lg-end mx-sm-0" >API secret key:  </label></td>
                                            <td className="col-12 col-xl-8 my-auto">
                                                <div className="row">
                                                    <div className="d-inline-flex customInput mw-100 col-10">
                                                        <input
                                                            className="bg-transparent py-3 ps-4 border-0 mw-100 w-95"
                                                            id="secretKey"
                                                            name="Secret" value={Secret} onChange={onHandleChange}
                                                            placeholder="Secret Key"
                                                            type={passwordShown ? "text" : "password"} />
                                                        <button type="button" className="btn" id="secretKeyPen" onClick={() => editLink("#secretKey")}> <span ><img src={edit} alt=""  ></img></span> </button>
                                                        <button type="button" className="btn d-none" id="secretKeyOk" onClick={() => handleOk("#secretKey")} > <span className="Font1v" >OK</span> </button>
                                                    </div>
                                                    <i onClick={togglePasswordVisiblity} className="col-2 my-auto"> <button className="btn p-0" >{<img src={eye} alt=""></img>}</button></i>
                                                </div>
                                            </td>
                                        </tr>
                                    </td>
                                </div>

                                <div className="d-block mx-auto pt-5">
                                    <button className="col-xl-2 d-block mx-auto border-0 Gradient text-white  p-3 R25"
                                        onClick={ConnectService}>
                                        CONNECT
                                    </button>
                                </div>
                            </div>
                            <div className=" p-4 mt-4  " >
                                <h6 className="text-center p-3 Font20">API Management</h6>
                                {RenderMap}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default ConnectExchange;
