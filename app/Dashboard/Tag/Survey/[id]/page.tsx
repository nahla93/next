"use client"
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import style from "@/app/ui/Dashboard/Tag/Survey/SurveyDetail/surveyDetail.module.css"
import { ISurvey } from '@/app/types';
import { useRouter } from 'next/navigation';

const DetailSurvey = () => {
    const [survey, setSurvey] = useState<{survey:ISurvey}>();

    const router = useRouter ();
    const _id = location.pathname.split("/")[4];
    useEffect(() => {
      const fetchSurvey = async () => {
        
        try {
          const response = await fetch(`/api/Survey/${_id}`, {
            cache: "no-store",
          });
  
          if (response.ok) {
            const suveyData = await response.json();
            setSurvey(suveyData);
            
          } else {
            console.error('Failed to fetch survey:', response.status);
          }
        } catch (error) {
          console.error('Error fetching survey:', error);
        }
      };
  
      
      if (_id) {
        fetchSurvey();
      }
    }, [_id]);
  const data = [
    { name: 'Question A', Yes: 40, No: 24 },
    { name: 'Question B', Yes: 30, No: 33 },
    { name: 'Question C', Yes: 20, No: 43 },
    { name: 'Question D', Yes: 27, No: 39 },
    { name: 'Question E', Yes: 40, No: 23 },
    { name: 'Question F', Yes: 50, No: 13 },
  ];

  return (
    <div className={style.container}>
      <h1 className={style.title}> {survey?.survey.title}</h1>
      <div className={style.body}>
        <h3 className={style.h3}> Questions</h3>
        <ul className={style.ul}>
          <li className={style.question}> {survey?.survey.question}</li>

        </ul>
      </div>
      <div>
        <h3 className={style.h3}>Result</h3>
        <div className={style.chart}>
          <ResponsiveContainer width="80%" height={300}>
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Yes" stackId="a" fill="#8884d8" />
              <Bar dataKey="No" stackId="a" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default DetailSurvey;
