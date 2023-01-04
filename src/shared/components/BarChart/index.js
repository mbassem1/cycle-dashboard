import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Chart, Series, Tooltip, Label, Connector, Export, Title } from 'devextreme-react/chart';

import { areas } from './data.js';
import { ThemeContext } from 'context/theme/index.js';
import { LocaleContext } from 'context/locale/index.js';
import { DrawerContext } from 'context/drawer/index.js';

const BarChart = ({ 
  dataSource = areas,
  yAxisvalue = 'area',
  xAxisValue = 'country',
  name = 'Area of Countries',
  color = 'green',
  onPointClick = () => {},
  onCustomizeText = () => {},
  withTooltip,
  withExport,
  barWidth,
  title,
  ...props
}) => {
  const { drawerVisible } = useContext(DrawerContext);
  const { useDarkTheme } = useContext(ThemeContext);
  const { translate, isRtl } = useContext(LocaleContext);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef) {
      setTimeout(() => {
        chartRef.current.instance.render({animate: true})
      }, [300]);
    }
  }, [chartRef, drawerVisible, isRtl]);

  const pointClickHandler = e => {
    onPointClick(e.target);
  };

  const customizeTextHandler = pointInfo => {
    return onCustomizeText(pointInfo);
  };
  return (
    <Chart ref={chartRef} id="chart" dataSource={dataSource} {...props} onPointClick={pointClickHandler} rtlEnabled={isRtl}>
      <Title text={translate(title)} font={useDarkTheme ? { color: '#FFF' } : { color: '#000' }} />
      <Series
        valueField={yAxisvalue}
        argumentField={xAxisValue}
        name={name}
        type="bar"
        color={useDarkTheme ? '#FFF ' : color}
        barWidth={barWidth}
      >
        <Label visible={true} customizeText={customizeTextHandler}>
          <Connector visible={true} width={1} />
        </Label>
      </Series>
      <Export enabled={withExport} />
      <Tooltip enabled={withTooltip} />
    </Chart>
  );
};

export default BarChart;

BarChart.propTypes = {
  dataSource: PropTypes.array.isRequired,
  yAxisvalue: PropTypes.string.isRequired,
  xAxisValue: PropTypes.string.isRequired,
  name: PropTypes.string,
  color: PropTypes.string,
  onPointClick: PropTypes.func,
  onCustomizeText: PropTypes.func,
  withTooltip: PropTypes.bool,
  withExport: PropTypes.bool,
  title: PropTypes.shape({
    EN: PropTypes.string,
    AR: PropTypes.string,
  }).isRequired,
};
