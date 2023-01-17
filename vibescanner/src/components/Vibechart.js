import React from "react";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);


//SAMPLE DATA!!!!!
//ONCE THE FUNCTION IS COMPLETE WE WILL FILL IN WITH REAL DATA
export const data = {
    labels: ['politics', 'science', 'mental health', 'sex', 'gym', 'cars', 'makeup', 'drugs', 'rappers'],
    datasets: [
        {
            label: '% of recent feed videos',
            data: [2, 9, 3, 5, 2, 3, 6, 4, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
    ],
};


export function Display() {
    //get the data from the data source
    return <Radar data={data} />;

}