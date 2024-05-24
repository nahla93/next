"use client";
import React, { useEffect, useState } from 'react';
import style from '@/app/ui/Dashboard/Rechart3/Rechart3.module.css';
import {IPerson} from '@/app/types'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Enregistrer les composants nécessaires de Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// Définir une interface pour les options de la charte
interface ChartOptions {
    indexAxis: 'x' | 'y' | undefined;
    layout?: {
        padding?: number;
    };
    scales?: {
        x?: {
            grid?: {
                color?: string;
            };
        };
        y?: {
            grid?: {
                color?: string;
            };
        };
    };
    plugins?: {
        legend?: {
            display?: boolean;
        };
    };
    barThickness?: number;
    maxBarThickness?: number;
}

const Rechart3 = () => {
    //identifier les données de la charte 
    const [userStats, setUserStats] = useState({ totalUsers: 0 ,geneUsers:0, admUsers: 0, delivUsers: 0, techUsers:0 });

    useEffect(() => {
        const fetchUserStats = async () => {
            try {
                const response = await fetch('/api/User');
                const users:IPerson[] = await response.json();

                const totalUsers = users.length;
                const geneUsers = users.filter(user => user.tag === 'General ').length;
                const admUsers = users.filter(user => user.tag === 'Administrative').length;
                const delivUsers = users.filter(user => user.tag === 'Delivery  ').length;
                const techUsers = users.filter(user => user.tag === 'Technical ').length;

                setUserStats({ totalUsers, admUsers, geneUsers, delivUsers, techUsers });
            } catch (err) {
                console.error('Failed to fetch users', err);
            }
        };

        fetchUserStats();
    }, []);
    // Définir les données de la charte
    const data = {
        labels: ['General Tag', 'Administrative Tag', 'Technical Tags', 'Delivery Tag'],
        datasets: [
            {
                data: [userStats.geneUsers, userStats.admUsers, userStats.techUsers, userStats.delivUsers],
                backgroundColor: ['#c66b4e', '#425c54', '#c6684e', '#0088FE'], // Couleur des barres
                borderWidth: 1, // Largeur de la bordure
                borderRadius: 10,
            }
        ]
    };

    // Définir les options de la charte
    const options: ChartOptions = {
        indexAxis: 'y', // Définir l'axe des indices sur 'y'
        layout: {
            padding: 10 // Rembourrage autour de la charte
        },
        scales: {
            x: {
                grid: {
                    color: 'rgba(0, 0, 0, 0)', // Couleur transparente pour la grille de l'axe x
                }
            },
            y: {
                grid: {
                    color: 'rgba(0, 0, 0, 0)', // Couleur transparente pour la grille de l'axe y
                }
            }
        },
        plugins: {
            legend: {
                display: false // Désactiver l'affichage de la légende
            }
        },
        // Définir la largeur des barres
        barThickness: 10, // Épaisseur des barres
        maxBarThickness: 20, // Épaisseur maximale des barres
    };

    return (
        <div className={style.container}>
            <h2 className={style.title}> Distribution of Tags</h2>
            {/* Afficher la charte avec les données et options spécifiées */}
            <Bar data={data} options={options} />
        </div>
    );
};

export default Rechart3;


