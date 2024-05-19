"use client"
import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import style from './Rechart2.module.css';

const data = [
  { name: 'Positive', value: 40, fill: '#425c54' },
  { name: 'Negative', value: 30, fill: '#c99c33' },
];

const COLORS = ['#0088FE', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;

interface RenderLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}

export default class Rechart2 extends PureComponent {
  renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }: RenderLabelProps) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="middle">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  render() {
    return (
      <div className={style.container}>
        <div className={style.title}>
          <h2>Feedback Breakdown</h2>
        </div>
        
        <div className={style.chart}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={150} height={100}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={this.renderCustomizedLabel}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        
      </div>
    );
  }
}
