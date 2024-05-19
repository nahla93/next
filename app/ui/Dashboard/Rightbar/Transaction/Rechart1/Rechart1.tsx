"use client";
import React from 'react';
import style from '@/app/ui/Dashboard/Rightbar/Transaction/Rechart1/Rechart1.module.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Enregistrez les composants nécessaires de Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// Définissez une interface pour les options de la charte
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

const Rechart1 = () => {
    // Définissez les données de la charte
    const data = {
        labels: ['Blocked', 'Active', 'Total'],
        datasets: [
            {
                data: [5.756, 25.200, 30.956],
                backgroundColor: ['#c99c33', '#425c54'], // Couleur des barres
                borderWidth: 1, // Largeur de la bordure
                borderRadius: 10,
            }
        ]
    };

    // Définissez les options de la charte
    const options: ChartOptions = {
        indexAxis: 'y', // Définissez l'axe des indices sur 'y'
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
            <h2 className={style.title}> User Status</h2>
            {/* Affichez la charte avec les données et options spécifiées */}
            <Bar data={data} options={options} />
        </div>
    );
};

export default Rechart1;


