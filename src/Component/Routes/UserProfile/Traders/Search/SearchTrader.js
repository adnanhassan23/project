import React from 'react';
import { NavLink } from 'react-router-dom';
import search from "../../../../../Assets/img/Search.png"
import FollowedTraderProfile from '../../../../SubComponent/Shared/FollowedTraderProfile';
import Sidebar from '../../../../SubComponent/SideBar/Sidebar';
import Traders from "./Data";
import Footer from '../../../../SubComponent/Footer/Footer'

const SearchTraders = () => {
    return (
        <>
            <div className="container-fluid mt-3 Height85">
                <Sidebar />
                <div className="container-fluid" id="containerSelectorFocus" style={{ paddingLeft: "60px" }}>
                    <div className="GreyBack R25 p-3">
                        <div className="">
                            <p className="text-center ls-3" >TRADERS LIST</p>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-8 col-xl-9">
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-md-4 col-xl-3 mt-3">
                                        <p className="px-4 mb-0 fw-bold" >Keyword:</p>
                                        <input type="text"
                                            name="Key"
                                            className="py-2 px-4 customInput bg-white w-100"
                                            placeholder="Key" />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 col-xl-3 mt-3">
                                        <p className="px-4 mb-0 fw-bold" >Type:</p>
                                        <select className="py-2 px-4 customInput bg-white w-100">
                                            <option value="">Profit</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                            <option value="4">Option 1</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 col-xl-3 mt-3">
                                        <p className="px-4 mb-0 fw-bold" >Success Rate:</p>
                                        <select className="py-2 px-4 customInput bg-white w-100">
                                            <option value="">10-20%</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                            <option value="4">Option 1</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 col-xl-3 mt-3">
                                        <p className="px-4 mb-0 fw-bold" >Filter 1:</p>
                                        <select className="py-2 px-4 customInput bg-white w-100">
                                            <option value="">Filter</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                            <option value="4">Option 1</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 col-xl-3 mt-3">
                                <p className="px-4 mb-0 fw-bold txt-gallery">1</p>
                                <div className="d-flex">
                                    <p className="Cerulean my-auto mx-2">Reset Filters</p>
                                    <button type="button" className="btn-grad border-0 p-2 mx-2">Search <img src={search} alt="" className="ms-2 w-auto" /> </button>
                                    <p className="txt-gry my-auto mx-2">6777 Results</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            {Traders.map((each) => {
                                return (
                                    <NavLink className="col-12 col-sm-6 col-md-4 col-xl-3 p-2" to={`/Trader/${each.id}/Feed`}>
                                        <div>
                                            <FollowedTraderProfile key={each.id} trader={each} />
                                        </div>
                                    </NavLink>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
           
        </>
    );
}

export default SearchTraders;