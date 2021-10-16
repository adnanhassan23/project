import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
export default function PositionsTable(props) {
    const columns = [
        {
            title: 'Action',
            width: 55,
            render: (value) => {
                return (
                    <>
                        {value.ActionType == "BUY" ? <button className="Buy-Btn px-3 py-2" type="button" >BUY</button> : <button className="Sell-Btn px-3 py-2" type="button">Sell</button>}
                    </>
                )

            },
            key: 'ActionType',
            fixed: 'left',
        },
        {
            title: '',
            width: 75,
            render: (value) => {
                return (
                    <>
                        <p className="mb-0 Font12" >{value.Date} at {value.Time}</p>
                    </>
                )

            },
            key: 'Time',
        },
        {
            title: 'Pair',
            width: 75,
            render: (value) => {
                return (
                    <>
                        {value.Pair.first}/{value.Pair.scnd}
                    </>
                )
            },
            key: 'Pair',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: '1',
            width: 50,
        },
        {
            title: 'Change',
            width: 50,
            render: (value) => {
                return (
                    <>
                        {value.change.type == "Positive" ? <p className="Green">+{value.change.value}%</p>:<p className="Red" >-{value.change.value}%</p>}
                    </>
                )
            },
            key: 'change',
        },
        {
            title: 'PL',
            width: 60,
            render: (value) => {
                return (
                    <>
                        {value.PL.type == "Positive" ? <p className="Green">+{value.PL.value}%</p>:<p className="Red" >-{value.PL.value}%</p>}
                    </>
                )
            },
            key: 'PL',
        },
        {
            title: 'ROI',
            width: 60,
            render: (value) => {
                return (
                    <>
                        {value.ROI.type == "Positive" ? <p className="Green">+{value.ROI.value}%</p>:<p className="Red" >-{value.ROI.value}%</p>}
                    </>
                )
            },
            key: 'ROI',
        },
        {
            title: 'Position Size',
            width: 50,
            render: (value) =><p>{value.PositionSize}%</p>,
            key: 'Time',
        },
    ];

    const data = props.data;
    return (
        <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 1000 }} pagination={{ pageSize: 30 }}  />
    );
}