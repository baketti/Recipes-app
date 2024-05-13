import React,{ memo } from 'react';
import { useNutrientsGraph } from './index.hooks';
import { Paper } from '@mui/material';
import { NutrientsProps } from '../Nutrients';
import { PieChart } from '@mui/x-charts/PieChart';

type NutrientsGraphProps = NutrientsProps;

export const NutrientsGraph = memo(({ nutrients }:NutrientsGraphProps) => {
    const {
        data,
        series,
    } = useNutrientsGraph(nutrients);
    //TODO => COLLEGARE I DATI DALL'API RESPONSE
    return (
        <Paper sx={{p:2}}>
            <PieChart
            //può avere una prop margin 
            series={series}
            width={400}
            height={300}
            slotProps={{
                legend: { 
                    direction: 'column',
                    position: { 
                        vertical: 'middle', 
                        horizontal: 'right'
                    },
                },
            }}
            >  
            <text x="38%" y="50%" text-anchor="middle" fill="black" fontSize="20px" fontWeight="bold">
                Calories
            </text>
            <text x="38%" y="65%" text-anchor="middle" fill="black" fontSize="24px">
                111
            </text>
            </PieChart>
        </Paper>
    );
});

NutrientsGraph.displayName = "NutrientsGraph";
