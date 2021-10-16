import React from 'react';
import { Upload } from 'antd';

export default function UploadComponent(props) {

    return (
        <React.Fragment>
            <div className="action my-auto">
                <Upload className="mt-3 mb-3"
                    // accept=".mp4, .pdf"
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture"
                    maxCount={1}
                    onChange={props.Upload}>
                    {props.children}
                </Upload>
            </div>
        </React.Fragment>
    )
}