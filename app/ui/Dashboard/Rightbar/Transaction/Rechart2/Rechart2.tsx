"use client";
import React, { PureComponent, useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import style from './Rechart2.module.css';
import {IFeedback} from '@/app/types';
const COLORS = ['#0088FE', '#FFBB28']; // Couleurs pour les deux types de feedbacks
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

const Rechart2 = () => {
  const [feedbackData, setFeedbackData] = useState([
    { name: 'Positive', value: 0, fill: '#425c54' },
    { name: 'Negative', value: 0, fill: '#c99c33' },
  ]);

  useEffect(() => {
    const fetchFeedbackData = async () => {
      try {
        const response = await fetch('/api/Feedback');
        const feedbacks: IFeedback[] = await response.json();

        const positiveFeedbacks = feedbacks.filter(feedback => feedback.type === 'positive').length;
        const negativeFeedbacks = feedbacks.filter(feedback => feedback.type === 'negative').length;

        setFeedbackData([
          { name: 'Positive', value: positiveFeedbacks, fill: '#425c54' },
          { name: 'Negative', value: negativeFeedbacks, fill: '#c99c33' },
        ]);
      } catch (err) {
        console.error('Failed to fetch feedback data', err);
      }
    };

    fetchFeedbackData();
  }, []);


  const renderCustomizedLabel = ({
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

  return (
    <div className={style.container}>
      <div className={style.title}>
        <h2>Feedback Breakdown</h2>
      </div>
      
      <div className={style.chart}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={150} height={100}>
            <Pie
              data={feedbackData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={renderCustomizedLabel}
            >
              {feedbackData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Rechart2;
