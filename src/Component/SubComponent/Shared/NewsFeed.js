import React, { Component } from "react";
import { Avatar } from 'antd';
import { LinkOutlined, HeartOutlined, UploadOutlined, RetweetOutlined, CommentOutlined } from '@ant-design/icons';
export default class NewsFeed extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Grey R25 p-4">
          {this.props.Feed.map((index) => {
            return (
              <React.Fragment>
                <div key={index.id} className="bg-white p-2 R25 mt-3">

                  <div className="d-inline-flex pt-2 mx-auto">
                    <Avatar size="small" icon={<img src={index.img} alt=""></img>} />
                    <p className="my-auto Font12 ps-2">{index.name} <br></br> {index.followers} follower(s)</p>
                  </div>
                  <div className="col-11 mx-auto pt-3 ">
                    <h6>{index.desc}</h6>
                    <div className="shadow-sm rounded p-2">
                      <img src={index.feed} alt="" className="w-100"></img>
                      <p className="Font12 m-0 p-0">{index.title}</p>
                      <p className="Font12 m-0 p-0">{index.detail}</p>
                      <div className="d-inline-flex">
                        <LinkOutlined /> <p className="m-0">{index.link}</p>
                      </div>
                    </div>
                    <div className="d-inline-flex pt-3 shadow-sm rounded col-12">
                      <span className="fs-xSmall ">{index.time}</span>
                      <span className="ps-2 fs-xSmall">{index.date}</span>
                      <span className="ps-2 fs-xSmall">{index.type}</span>
                    </div>
                    <div className="d-inline-flex pt-3 shadow-sm rounded col-12">
                      <span className="fs-xSmall ">{index.retweets} Retweets</span>
                      <span className="ps-2 fs-xSmall">{index.quote} Quote Tweets</span>
                      <span className="ps-2 fs-xSmall">{index.likes} Likes</span>
                    </div>
                    <div className="d-inline-flex py-3 col-12">
                      <div className="col-3 mx-auto">
                        <CommentOutlined />
                      </div>
                      <div className="col-3 mx-auto">
                        <RetweetOutlined />
                      </div>
                      <div className="col-3 mx-auto">
                        <HeartOutlined />
                      </div>
                      <div className="col-3 mx-auto">
                        <UploadOutlined />
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )
          })}
        </div>
      </React.Fragment>
    );
  }
}
