import React, { useEffect, useState } from "react";
import Sticky from "wil-react-sticky";
import Sidebar from '../../SubComponent/SideBar/Sidebar';
import SideNavOption from './SideNav';
import $ from 'jquery';
import twitter from '../../../Assets/img/twitter.png'
import edit from '../../../Assets/img/Pencil.png'
import instagram from '../../../Assets/img/instagram.png'
import facebook from '../../../Assets/img/facebookLogo.png'
import youtube from '../../../Assets/img/youtube.png'
import trading from '../../../Assets/img/trading.png'
import linkedin from '../../../Assets/img/linkedin.png'
import telegram from '../../../Assets/img/telegram.png'
import plus from '../../../Assets/img/plus.png'

const Social = () => {
    const initialstate = {
        Twitter: "",
        Facebook: "",
        Trading: "",
        Telegram: "",
        Instagram: "",
        Youtube: "",
        Linkedin: "",
        newLink: "",
        Links: []
    }

    const [DetailData, setDetailData] = useState(initialstate);
    // eslint-disable-next-line
    const { Twitter, Facebook, Trading, Telegram, Instagram, Youtube, Linkedin, newLink, Links } = DetailData;

    useEffect(() => {
        $("#twitter").prop("disabled", true);
        $("#instagram").prop("disabled", true);
        $("#facebook").prop("disabled", true);
        $("#youtube").prop("disabled", true);
        $("#trading").prop("disabled", true);
        $("#linkedin").prop("disabled", true);
        $("#telegram").prop("disabled", true);
        $("#custom").prop("disabled", true);
    }, [])


    const onHandleChange = (event) => {
        const { name, value, type, checked } = event.target
        if (type === "checkbox") {
            setDetailData({
                ...DetailData,
                [name]: checked
            })
            var a = document.getElementsByClassName('chkbox')
            // eslint-disable-next-line
            var counter = 0;
            for (var count = 0; count < a.length; count++) {
                if (a[count].checked === true) {
                    counter++
                }

            }
        }
        else {
            setDetailData({
                ...DetailData,
                [name]: value
            })
        }
    }

    const editLink = (e) => {
        console.log(e)
        $(e + 'Ok').removeClass('d-none')
        $(e + 'Pen').addClass('d-none')
        $(e).prop("disabled", false);
    }
    const cancelLink = (e) => {
        $(e + 'Ok').addClass('d-none');
        $(e + 'Pen').removeClass('d-none');
        $(e).prop("disabled", true);
    }

    const AddNew = async () => {

        if (newLink !== "") {
            const random = Math.floor(100000 + Math.random() * 900000);
            const newService = await {
                socialLink_Id: random,
                newLink: newLink,
            }
            Links.push(newService)
            setDetailData({
                ...DetailData,
                newLink: "",
            })
            $("#" + random).prop("disabled", true);
        }
    }


    const onUpdateLink = (event) => {
        const id = event.target.id.replace("newLink", "");
        var array;
        // eslint-disable-next-line
        Links.map((service, index) => {
            // eslint-disable-next-line
            if (service.socialLink_Id == id) {
                array = Links;
                array[index].newLink = event.target.value
                setDetailData({
                    ...DetailData,
                    Links: array
                })
            }
        })
    }
    const RenderMap = Links.map((servicemap) => {
        return (
            <React.Fragment>
                <div className="col-12 col-md-6 col-lg-12 col-xl-6 mx-auto my-2">
                    <div className="row">
                        <div className="col-12 col-lg-3 mx-auto text-center text-lg-center text-xl-start">
                            <label className="my-auto">
                                <input type="checkbox" className="RoundChk" onChange={onHandleChange} />
                                <span className="py-auto Font1_5h">Llnk</span>
                            </label>
                        </div>
                        <div className="col-12 col-lg-9 mx-auto  text-center text-lg-center text-xl-start">
                            <div className="d-inline-flex bg-LightRed R25 ">
                                <input className="bg-LightRed border-0 px-5 py-3 R25"
                                    placeholder="Paste Link "
                                    value={servicemap.newLink}
                                    // eslint-disable-next-line
                                    id={servicemap.socialLink_Id}
                                    name="newLink"
                                    onChange={onUpdateLink}></input>
                                <button className="btn" id={servicemap.socialLink_Id + "Pen"} onClick={() => editLink("#" + servicemap.socialLink_Id)}> <span ><img src={edit} alt="" ></img></span> </button>
                                <button className="btn d-none" id={servicemap.socialLink_Id + "Ok"} onClick={() => cancelLink("#" + servicemap.socialLink_Id)} > <span style={{fontSize:"10px"}} >OK</span> </button>
                            </div>
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
                <div className="container" id="containerSelectorFocus" style={{ paddingLeft: "60px" }}>
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

                        <div className="col-lg-8 col-xl-9 GreyBack R25 p-3 p-lg-4 mt-3 mt-lg-0">
                            <h6 className="text-center p-3 Font20">Social</h6>
                            <div className="bg-white p-4 R25">
                                <div className="row">
                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6 mx-auto my-2">
                                        <div className="row">
                                            <div className="col-12 col-lg-3 mx-auto my-auto text-center text-lg-center text-xl-start">
                                                <label className=" d-inline-flex">
                                                    <input type="checkbox" className="RoundChk" onChange={onHandleChange} />
                                                    <span className="py-auto Font1_5h">Twitter</span>
                                                </label>
                                            </div>
                                            <div className=" col-12 col-lg-9 mx-auto text-center text-lg-center text-xl-start">
                                                <div className="d-inline-flex bg-LightRed R25">
                                                    <span className="my-auto" > <img src={twitter} alt="" className="w-75 "></img></span>
                                                    <input className="bg-LightRed border-0" id="twitter" placeholder="Enter Username or Paste Link "
                                                        name="Twitter" value={Twitter} onChange={onHandleChange}></input>
                                                    <button className="btn" id="twitterPen" onClick={() => editLink("#twitter")}> <span ><img src={edit} alt=""  ></img></span> </button>
                                                    <button className="btn d-none" id="twitterOk" onClick={() => cancelLink("#twitter")} > <span style={{fontSize:"10px"}} >OK</span> </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6 mx-auto my-2">
                                        <div className="row">
                                            <div className="col-12 col-lg-3 mx-auto text-center text-lg-center text-xl-start my-auto px-1">
                                                <label className="my-auto d-inline-flex">
                                                    <input type="checkbox" className="RoundChk" onChange={onHandleChange} />
                                                    <span className="Font1_5h">Instagrm</span>
                                                </label>
                                            </div>
                                            <div className="col-12 col-lg-9 mx-auto text-center text-lg-center text-xl-start">
                                                <div className="d-inline-flex bg-LightRed R25">
                                                    <span className="my-auto" > <img src={instagram} alt="" className="w-75 "></img></span>
                                                    <input className="bg-LightRed border-0" id="instagram" placeholder="Enter Username or Paste Link "
                                                        name="Instagram" value={Instagram} onChange={onHandleChange}></input>
                                                    <button className="btn" id="instagramPen" onClick={() => editLink("#instagram")}> <span ><img src={edit} alt="" ></img></span> </button>
                                                    <button className="btn d-none" id="instagramOk" onClick={() => cancelLink("#instagram")} > <span style={{fontSize:"10px"}} >OK</span> </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6 mx-auto my-2">
                                        <div className="row">
                                            <div className="col-12 col-lg-3 mx-auto text-center text-lg-center text-xl-start my-auto px-1">
                                                <label className="my-auto d-inline-flex">
                                                    <input type="checkbox" className="RoundChk" onChange={onHandleChange} />
                                                    <span className="py-auto Font1_5h">Facebook</span>
                                                </label>
                                            </div>
                                            <div className="col-12 col-lg-9 mx-auto  text-center text-lg-center text-xl-start">
                                                <div className="d-inline-flex bg-LightRed R25">
                                                    <span className="my-auto" > <img src={facebook} alt="" className="w-75 "></img></span>
                                                    <input className="bg-LightRed border-0" id="facebook" placeholder="Enter Username or Paste Link "
                                                        name="Facebook" value={Facebook} onChange={onHandleChange}></input>
                                                    <button className="btn" id="facebookPen" onClick={() => editLink("#facebook")}> <span ><img src={edit} alt="" ></img></span> </button>
                                                    <button className="btn d-none" id="facebookOk" onClick={() => cancelLink("#facebook")} > <span style={{fontSize:"10px"}}>OK</span> </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6 mx-auto my-2">
                                        <div className="row">
                                            <div className="col-12 col-lg-3 mx-auto text-center text-lg-center text-xl-start my-auto px-1">
                                                <label className="my-auto d-inline-flex">
                                                    <input type="checkbox" className="RoundChk" onChange={onHandleChange} />
                                                    <span className="py-auto Font1_5h">Youtube</span>
                                                </label>
                                            </div>
                                            <div className="col-12 col-lg-9 mx-auto  text-center text-lg-center text-xl-start">
                                                <div className="d-inline-flex bg-LightRed R25">
                                                    <span className="my-auto" > <img src={youtube} alt="" className="w-75 "></img></span>
                                                    <input className="bg-LightRed border-0" id="youtube" placeholder="Enter Username or Paste Link "
                                                        name="Youtube" value={Youtube} onChange={onHandleChange}></input>
                                                    <button className="btn" id="youtubePen" onClick={() => editLink("#youtube")}> <span ><img src={edit} alt="" ></img></span> </button>
                                                    <button className="btn d-none" id="youtubeOk" onClick={() => cancelLink("#youtube")} > <span style={{fontSize:"10px"}}>OK</span> </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6 mx-auto my-2">
                                        <div className="row">
                                            <div className="col-12 col-lg-3 mx-auto text-center text-lg-center text-xl-start my-auto px-1">
                                                <label className="my-auto d-inline-flex">
                                                    <input type="checkbox" className="RoundChk" onChange={onHandleChange} />
                                                    <span className="py-auto Font1_5h">Trading</span>
                                                </label>
                                            </div>
                                            <div className="col-12 col-lg-9 mx-auto  text-center text-lg-center text-xl-start">
                                                <div className="d-inline-flex bg-LightRed R25">
                                                    <span className="my-auto" > <img src={trading} alt="" className="w-75 "></img></span>
                                                    <input className="bg-LightRed border-0" id="trading" placeholder="Enter Username or Paste Link "
                                                        name="Trading" value={Trading} onChange={onHandleChange}></input>
                                                    <button className="btn" id="tradingPen" onClick={() => editLink("#trading")}> <span ><img src={edit} alt="" ></img></span> </button>
                                                    <button className="btn d-none" id="tradingOk" onClick={() => cancelLink("#trading")} > <span style={{fontSize:"10px"}}>OK</span> </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6 mx-auto my-2">
                                        <div className="row">
                                            <div className="col-12 col-lg-3 mx-auto text-center text-lg-center text-xl-start my-auto px-1">
                                                <label className="my-auto d-inline-flex">
                                                    <input type="checkbox" className="RoundChk" onChange={onHandleChange} />
                                                    <span className="py-auto Font1_5h">LinkedIn</span>
                                                </label>
                                            </div>
                                            <div className="col-12 col-lg-9 mx-auto  text-center text-lg-center text-xl-start">
                                                <div className="d-inline-flex bg-LightRed R25">
                                                    <span className="my-auto" > <img src={linkedin} alt="" className="w-75 "></img></span>
                                                    <input className="bg-LightRed border-0" id="linkedin" placeholder="Enter Username or Paste Link "
                                                        name="Linkedin" value={Linkedin} onChange={onHandleChange}></input>
                                                    <button className="btn" id="linkedinPen" onClick={() => editLink("#linkedin")}> <span ><img src={edit} alt="" ></img></span> </button>
                                                    <button className="btn d-none" id="linkedinOk" onClick={() => cancelLink("#linkedin")} > <span style={{fontSize:"10px"}}>OK</span> </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6 mx-auto my-2">
                                        <div className="row">
                                            <div className="col-12 col-lg-3 mx-auto text-center text-lg-center text-xl-start my-auto px-1">
                                                <label className="my-auto d-inline-flex">
                                                    <input type="checkbox" className="RoundChk" onChange={onHandleChange} />
                                                    <span className="py-auto Font1_5h">Telegram</span>
                                                </label>
                                            </div>
                                            <div className="col-12 col-lg-9 mx-auto  text-center text-lg-center text-xl-start">
                                                <div className="d-inline-flex bg-LightRed R25">
                                                    <span className="my-auto" > <img src={telegram} alt="" className="w-75 "></img></span>
                                                    <input className="bg-LightRed border-0" id="telegram" placeholder="Enter Username or Paste Link "
                                                        name="Telegram" value={Telegram} onChange={onHandleChange}></input>
                                                    <button className="btn" id="telegramPen" onClick={() => editLink("#telegram")}> <span ><img src={edit} alt="" ></img></span> </button>
                                                    <button className="btn d-none" id="telegramOk" onClick={() => cancelLink("#telegram")} > <span style={{fontSize:"10px"}}>OK</span> </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {RenderMap}
                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6 mx-auto my-2">
                                        <div className="row">
                                            <div className="col-12 col-lg-3 mx-auto text-center text-lg-center text-xl-start my-auto px-1">
                                                <label className="my-auto d-inline-flex" onClick={AddNew}>
                                                    <span className="my-auto d-grid"><img src={plus} alt="" className="w-50 m-auto"></img></span>
                                                    <span className="py-auto ps-2 Font1_5h">Add More</span>
                                                </label>
                                            </div>
                                            <div className="col-12 col-lg-9 mx-auto text-center text-lg-center text-xl-start">

                                                <div className="d-inline-flex bg-LightRed R25 w-100">
                                                    <input className="bg-LightRed border-0 w-100 R25 px-2" placeholder="Paste Link "
                                                        name="newLink" value={newLink} onChange={onHandleChange} id="custom"></input>
                                                    <button className="btn" id="customPen" onClick={() => editLink("#custom")}> <span ><img src={edit} alt="" ></img></span> </button>
                                                    <button className="btn d-none" id="customOk" onClick={() => cancelLink("#custom")} > <span style={{fontSize:"10px"}}>OK</span> </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-block mx-auto pt-5">
                                    <button className="d-block mx-auto border-0 Gradient text-white p-3 R25">
                                        CONNECT SELLECTED
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Social;
