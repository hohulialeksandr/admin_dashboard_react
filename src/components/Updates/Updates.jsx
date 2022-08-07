import React from 'react';
import { UpdatesData } from '../../Data/Data';

import './Updates.css'

const Updates = () => {
    return (
        <div className="Updates">
            {UpdatesData.map(updates => {
                return (
                    <div className="update">
                        <img src={updates.img} alt="" />
                        <div className="noti">
                            <div style={{ marginBottom: '0.5rem' }}>
                                <span>{updates.name}</span>
                                <span>{updates.noti}</span>
                            </div>
                            <span>{updates.time}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Updates