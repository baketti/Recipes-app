import React,{ memo } from 'react';
import { useNutrientsGraph } from './index.hooks';
import { Paper } from '@mui/material';
import { NutrientsProps } from '../Nutrients';
import { PieChart } from '@mui/x-charts/PieChart';

type NutrientsGraphProps = NutrientsProps;

export const NutrientsGraph = memo(({ nutrients }:NutrientsGraphProps) => {
    const {
        series,
        caloriesAmount,
        NutrientsLabels,
    } = useNutrientsGraph(nutrients);
    return (
        <Paper 
            sx={{
                p:2,
                width:{xs:"90%",md:"45%"},
                display:"flex",
                justifyContent:"center",
            }}
        >
            <PieChart
                series={series}
                width={300}
                height={300}
                slotProps={{
                    legend: { 
                        direction: 'column',
                        position: { 
                            vertical: 'middle', 
                            horizontal: 'right'
                        },
                        padding: -35,
                    },
                }}
            >  
                <text x="34%" y="40%" text-anchor="middle" fill="black" fontSize="20px" fontWeight="bold">
                    {NutrientsLabels.CALORIES}
                </text>
                <text x="34%" y="55%" text-anchor="middle" fill="black" fontSize="24px">
                    {caloriesAmount}
                </text>
            </PieChart>
        </Paper>
    );
});

NutrientsGraph.displayName = "NutrientsGraph";
