import React from 'react';
import Sidebar from "../../SubComponent/SideBar/Sidebar"
import notificationsData from "./NotificationData"
import NotiMsg from './NotiMsg';


const EachDayNoti = notificationsData.map((item) => {
    return (
        <>
            <div className="noti">
                <p className="text-center text-grey ls-3 py-3 mb-0">{item.Day}, {item.Date}</p>
                {item.noti.map((each, index) => {
                    return (
                        <>
                            <div className={`px-5 py-3 ${index % 2 == 0 ? "bg-white-30" : "bg-white-50"}`}>
                                {each.notiType !== "msg" ?
                                    <NotiMsg each={each} item={item} /> :
                                    <>
                                        <p className="mb-0 Font2v opacity-100">{each.msg}</p>
                                        <p className="mb-0 text-grey Font2v opacity-100">{item.Date}, {item.time}</p>
                                    </>}
                            </div>
                        </>
                    )

                })}
            </div>
        </>
    )
}
)

const Notification = () => {
    return (
        <>
            <div className="container-fluid mt-3 Height85">
                <Sidebar />
                <div className="container height85">
                    <div className="py-3 bg-mercury Round">
                        <p className="text-center Font20 ls-3">Notification Center</p>
                        {EachDayNoti}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Notification;