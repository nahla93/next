"use client";
import React from 'react'
import styles from'./Chart.module.css';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
  {
    name: 'Q1',
    YES: 40,
    NO: 260,
  },
  {
    name: 'Q2',
    YES: 100,
    NO: 200,
  },
  {name: 'Q3',
  YES: 200,
  NO: 100,
},
{
  name: 'Q4',
  YES: 260,
  NO: 40,
},
{
  name: 'Q5',
  YES: 80,
  NO: 220,
}
]
const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}> Survey1</h2>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={400}
          height={200}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
          <XAxis dataKey="name" axisLine={{ strokeOpacity: 0 }} />
          <YAxis axisLine={{ strokeOpacity: 0 }} />
          <Tooltip contentStyle={{backgroundColor:"#425c54", border:"none"}} />
          <Legend />
          <Area type="monotone" dataKey="YES" stroke="#425c5a"  fill="#dde0df"/>
          <Area type="monotone" dataKey="NO" stroke="#c89b31"  fill="#f9efdf"/>

        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart;