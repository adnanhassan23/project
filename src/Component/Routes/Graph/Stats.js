import React from 'react';
import AdditionalInfo from './AdditionalInfo';
import ProgressBar from './ProgressBar';
import TestChart from './TestChart';
import "./Chart.css";

class Stats extends React.Component {
    constructor() {
        super();
        this.state = {
            Pnl: "",
            Copiers: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {

        return (
            <React.Fragment>
                <p className="text-center ls-3">Traders Stats</p>
                <div className="R25 bg-white col-11 mx-auto">
                    <div className="col-12 text-end px-0 py-4">
                        <ul className="Tags RadioToButton d-inline-flex px-0">
                            <li className="mx-auto w-100 px-1">
                                <p className="Font2v">Time Period:</p>
                            </li>
                            <li className="mx-auto w-100 px-1 my-auto">
                                <input type="radio"
                                    id="1D"
                                    name="Pnl"
                                    value="1D"
                                    onClick={this.handleChange} />
                                <label className="w-100 py-1 Font2v px-2 text-center" htmlFor="1D">1D</label>
                            </li>
                            <li className="mx-auto w-100 px-1 my-auto">
                                <input type="radio"
                                    id="1W"
                                    name="Pnl"
                                    value="1W"
                                    onClick={this.handleChange} />
                                <label className="w-100 py-1 Font2v px-2 text-center" htmlFor="1W">1W</label>
                            </li>
                            <li className="mx-auto w-100 my-auto">
                                <input type="radio"
                                    id="1M"
                                    name="Pnl"
                                    value="1M"
                                    onClick={this.handleChange} />
                                <label className="w-100 py-1 Font2v px-2 text-center" htmlFor="1M">1M</label>
                            </li>
                            <li className="mx-auto w-100 my-auto">
                                <input type="radio"
                                    id="All"
                                    name="Pnl"
                                    value="All"
                                    onClick={this.handleChange} />
                                <label className="w-100 py-1 Font2v px-2 text-center" htmlFor="All">All</label>
                            </li>
                        </ul>
                        <div className="">
                            <TestChart />
                        </div>
                    </div>
                </div>

                <div className="R25 bg-white pt-5 col-11 mx-auto mt-5 p-4">
                    <div className="col-12 text-end px-0">
                        <ul className="Tags RadioToButton d-inline-flex px-0">
                            <li className="mx-auto w-100 px-1">
                                <p className="Font2v">Time Period:</p>
                            </li>
                            <li className="mx-auto w-100 px-1 my-auto">
                                <input type="radio"
                                    id="1DCopier"
                                    name="Copiers"
                                    value="1DCopier"
                                    onClick={this.handleChange} />
                                <label className="w-100 py-1 Font2v px-2 text-center" htmlFor="1DCopier">1D</label>
                            </li>
                            <li className="mx-auto w-100 px-1 my-auto">
                                <input type="radio"
                                    id="1WCopier"
                                    name="Copiers"
                                    value="1WCopier"
                                    onClick={this.handleChange} />
                                <label className="w-100 py-1 Font2v px-2 text-center" htmlFor="1WCopier">1W</label>
                            </li>
                            <li className="mx-auto w-100 my-auto">
                                <input type="radio"
                                    id="1MCopier"
                                    name="Copiers"
                                    value="1MCopier"
                                    onClick={this.handleChange} />
                                <label className="w-100 py-1 Font2v px-2 text-center" htmlFor="1MCopier">1M</label>
                            </li>
                            <li className="mx-auto w-100 my-auto">
                                <input type="radio"
                                    id="AllCopier"
                                    name="Copiers"
                                    value="AllCopier"
                                    onClick={this.handleChange} />
                                <label className="w-100 py-1 Font2v px-2 text-center" htmlFor="AllCopier">All</label>
                            </li>
                        </ul>
                        <div className="">
                            <TestChart />
                        </div>
                    </div>
                </div>

                <p className="text-center ls-3 mt-5">Frequently Traded</p>
                <div className="R25 bg-white col-11 mx-auto p-4">
                    <ProgressBar />
                </div>

                <p className="text-center ls-3 mt-5">Additional Info</p>
                <div className="R25 bg-white col-11 mx-auto p-4">
                    <AdditionalInfo />
                </div>

            </React.Fragment>
        );
    }
}
export default Stats;