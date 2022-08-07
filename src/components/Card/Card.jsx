import React, { useState } from 'react';

import './Card.css'

import { motion, AnimateSharedLayout } from 'framer-motion';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { UilTimes } from '@iconscout/react-unicons';

import Chart from 'react-apexcharts'

const Card = (props) => {
    const [expanded, setExpended] = useState(false);


    return (
        <AnimateSharedLayout>
            {
                expanded ?
                    <ExpandedCard param={props} setExpended={() => setExpended(false)} />
                    :
                    <CompactCard param={props} setExpended={() => setExpended(true)} />
            }
        </AnimateSharedLayout>
    )
}

function CompactCard({ param, setExpended }) {
    console.log(param.color.backGround)
    const Png = param.png;

    return (
        <motion.div className="CompactCard"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow
            }}
            onClick={setExpended}
            layoutId='expandableCard'
        >
            <div className="radialBar">
                <CircularProgressbar
                    value={param.barValue}
                    text={`${param.barValue}%`}
                />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png />
                <span>${param.value}</span>
                <span>Last 24 hours</span>

            </div>
        </motion.div>
    )
}

function ExpandedCard({ param, setExpended }) {
    const data = {
        options: {
            chart: {
                type: 'area',
                height: 'auto',
            },
            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.35,
            },
            fill: {
                color: ['#fff'],
                type: 'gradient',
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                color: ['white']
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                }
            },
            grid: {
                show: true
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    '2022-01-01T00:00:00.000Z',
                    '2022-01-01T01:00:00.000Z',
                    '2022-01-01T02:00:00.000Z',
                    '2022-01-01T03:00:00.000Z',
                    '2022-01-01T04:00:00.000Z',
                    '2022-01-01T05:00:00.000Z',
                    '2022-01-01T06:00:00.000Z'
                ]
            }
        }
    }
    return (
        <motion.div className="ExpandedCard"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow
            }}
            layoutId='expandableCard'
        >
            <div style={{alignSelf: "flex-end", cursor: 'pointer', color: 'white'}}>
                <UilTimes onClick={setExpended} />
            </div>
            <span>{param.title}</span>
            <div className="chartContainer">
                <Chart series={param.series} type='area' options={data.options} />
            </div>
            <span>Last 24 hours</span>
        </motion.div>
    )
}

export default Card