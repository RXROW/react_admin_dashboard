import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

function SparkLine({
  id,
  height,
  width,
  color,
  data,
  type,
  currentColor
}) {
  // List of valid types
  const validTypes = ['Line', 'Column', 'WinLoss', 'Pie', 'Area'];

  // Check if the type is valid
  if (!validTypes.includes(type)) {
    console.error(`Invalid type "${type}" passed to SparkLine component. Please use one of the following: ${validTypes.join(', ')}`);
    return null;
  }

  return (
<SparklineComponent
  id={id || "sparkline"}
  height={height}
  width={width}
  lineWidth={1}
  valueType="Numeric"
  fill={color}
  dataSource={data}
  xName="x"
  yName="y"
  type={type}
  border={{ color: currentColor, width: 2 }}
  tooltipSettings={{
    visible: true,
    // eslint-disable-next-line no-template-curly-in-string
    format: '${x} : ${y}',
    trackLineSettings: {
      visible: true,
    },
  }}
>
  <Inject services={[SparklineTooltip]} />
</SparklineComponent>
  );
}

export default SparkLine;

