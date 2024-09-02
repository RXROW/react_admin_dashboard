import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,   
  Category,
  StackingColumnSeries,
  Tooltip,
} from '@syncfusion/ej2-react-charts';
import { stackedPrimaryXAxis, stackedCustomSeries, stackedPrimaryYAxis } from '../../data/dummy';

function Stacked({ width, height }) {
  return (
    <ChartComponent 
      width={width} 
      height={height}
      id="stack-chart"   
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
    >
      <Inject services={[Legend, Tooltip, Category, StackingColumnSeries]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />  
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default Stacked;
