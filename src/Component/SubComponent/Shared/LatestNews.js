import React, { Component } from "react";
export default class LatestNews extends Component {
  render() {
    return (
      <div className="Grey R25 p-4 mt-4 Latest_News">
        <h6 className="text-center">LATEST NEWS</h6>
        {this.props.News.map((index) => {
          return (
            <div key={index.id} className="d-inline-flex p-3 mb-3 bg-white R25">
              <p className="Font12">
                <img src={index.img} align="left" alt="" className=" image me-2 w-35" ></img>
                <span className="">
                  {index.description}
                </span>
                <p className="pt-3">{index.wesbite} {" "} {index.time} minutes ago</p>

              </p>
            </div>
          )
        })}
      </div>
    );
  }
}
