import React from 'react';

const NotiMsg = (props) => {
    return (
        <>
            <div className="col-12 col-md-8 col-lg-6">
                <div className="d-flex justify-content-between">
                    <div>
                        <p className="mb-0 Font2v">{props.each.type}</p>
                        <p className="mb-0 text-grey Font2v">{props.item.Date}, {props.item.time}</p>
                    </div>
                    <p className="mb-0 Font2v">{props.each.price}</p>
                    <p className="mb-0 Font2v">{props.each.order}</p>
                    <p className="mb-0 text-blue Font2v">{props.each.OpenBy}</p>
                </div>
            </div>
        </>
    );
}

export default NotiMsg;