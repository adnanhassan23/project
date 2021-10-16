import React from 'react';
import { Avatar } from 'antd';

const Signals = (props) => {
    return (
        <React.Fragment>
            <div className="Grey R25 p-4 mb-3">
                <p className="text-center">TRADING SIGNALS BY PRO TRADERS</p>
                {props.Signal.map((index) => {
                    return (
                        <div key={index.id} className="d-inline-flex pt-2 mx-auto">
                            <Avatar className="px-2 bg-transparent w-auto h-auto" icon={<img src={index.img} alt=""></img>} />
                        </div>
                    )
                })}

            </div>
        </React.Fragment>
    );
}

export default Signals;