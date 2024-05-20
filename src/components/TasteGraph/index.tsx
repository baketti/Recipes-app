import React,{ memo } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Taste } from '@/models/Recipe';
import { useTasteGraph } from './index.hooks';

const chartSetting = {
  xAxis: [
    {
      label: 'taste',
    },
  ],
  width: 400,
  height: 400,
};

type TasteGraphProps = {
  taste: Taste 
};

export const TasteGraph = memo(({taste}: TasteGraphProps) => {
  const {
    dataset
  } = useTasteGraph(taste);

  return  (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'key' }]}
      series={[{ dataKey: 'taste', label: 'Taste'}]}
      layout="horizontal"
      grid={{ vertical: true }}
      {...chartSetting}
      borderRadius={10}
      sx={{
        width:{xs:"100%", md:"50%"},
      }}
    />
  );
})

TasteGraph.displayName = 'TasteGraph';