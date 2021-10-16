import React, { useState } from 'react';
import { Picker } from "emoji-mart";
import TextareaAutosize from 'react-textarea-autosize';
import { Avatar } from 'antd';
import { Player } from "video-react";
import "emoji-mart/css/emoji-mart.css";
import "../../../../node_modules/video-react/dist/video-react.css";
import Camera from "../../../Assets/img/Camera.png"
import Video from "../../../Assets/img/Video.png"
import Emoji from "../../../Assets/img/Emoji.png"
import UploadComponent from './UploadComponent';


const PostFeed = (props) => {

    const [showEmojis, setShowEmojis] = useState(false);
    const [input, setInput] = useState("Write Here");
    const [profile_photo, setProfile_photo] = useState("");
    const [videoSrc, seVideoSrc] = useState("");

    const PhotoUpload = (info) => {
        let fileList = [...info.fileList];
        fileList.forEach(function (file, index) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setProfile_photo(e.target.result)
                seVideoSrc("");
            };
            reader.readAsDataURL(file.originFileObj);
        });
    }

    const VideoUpload = (e) => {
        var url = URL.createObjectURL(e.file.originFileObj);
        seVideoSrc(url);
        setProfile_photo("")
    };


    const addEmoji = (e) => {
        let sym = e.unified.split("-");
        let codesArray = [];
        sym.forEach((el) => codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        setInput(input + emoji);
    };

    return (
        <>
            <div className="Grey R25 p-4 mb-3">

                <div className=" d-flex">
                    <div>
                        <Avatar size="large" icon={<img src={props.Profile.img} alt=""></img>} />
                    </div>

                    <TextareaAutosize
                        className="bg-transparent w-100 border-0 resizeNone"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        minRows={3}
                        maxRows={8} />
                </div>
                {profile_photo && (<img className="PostImg mb-3" src={profile_photo} alt="" />)}
                {videoSrc && (
                    <Player
                        playsInline
                        src={videoSrc}
                        fluid={false}
                        width={480}
                        height={272}
                        className="mx-auto mb-3"
                    />
                )}
                <div className="d-flex my-auto">
                    <UploadComponent Upload={PhotoUpload}>
                        <img src={Camera} alt="Camera" className="w-auto" />
                    </UploadComponent>
                    <UploadComponent Upload={VideoUpload} >
                        <img src={Video} alt="Video" className="w-auto mx-3" />
                    </UploadComponent>
                    <button className="button p-0 my-auto" onClick={() => setShowEmojis(!showEmojis)}><img src={Emoji} alt="Emoji" className="w-auto" /></button>
                    <button className="d-block ms-auto border-0 Gradient text-white px-4 py-1 R25">
                        Post
                    </button>
                </div>
                {showEmojis && (
                    <div className="position-absolute" style={{ zIndex: 9 }}>
                        <Picker onSelect={addEmoji}
                            showSkinTones={false}
                            showPreview={false} />
                    </div>
                )}

            </div>
        </>
    );
}

export default PostFeed;

