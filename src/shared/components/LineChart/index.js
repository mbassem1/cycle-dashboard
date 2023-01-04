import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  Export,
  Margin,
  Title,
  Tooltip,
  Grid,
  Font,
} from 'devextreme-react/chart';
import { ThemeContext } from 'context/theme/index.js';
import { LocaleContext } from 'context/locale';
import { DrawerContext } from 'context/drawer/index.js';
import { energySources, countriesInfo } from './data';

const LineChart = ({
  palette = 'Violet',
  yAxisData = energySources,
  xAxisData = countriesInfo,
  argumentField = '',
  title,
  withExport = false,
  withTooltip = false,
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

  return (
    <React.Fragment>
      <Chart ref={chartRef} palette={palette} dataSource={xAxisData} rtlEnabled={isRtl} {...props}>
        <CommonSeriesSettings argumentField="country" />
        {yAxisData.map(item => (
          <Series key={item.value} valueField={item.value} name={item.name} />
        ))}
        <Margin bottom={20} />
        <ArgumentAxis valueMarginsEnabled={false} discreteAxisDivisionMode="crossLabels">
          <Grid visible={true} />
        </ArgumentAxis>
        <Title text={translate(title)} font={useDarkTheme ? { color: '#FFF' } : { color: '#000' }} />
        <Tooltip enabled={withExport} />
        <Export enabled={withTooltip} />
      </Chart>
    </React.Fragment>
  );
};

export default LineChart;

LineChart.propTypes = {
  palette: PropTypes.string,
  yAxisData: PropTypes.array.isRequired,
  xAxisData: PropTypes.array.isRequired,
  argumentField: PropTypes.string.isRequired,
  title: PropTypes.shape({
    EN: PropTypes.string,
    AR: PropTypes.string,
  }).isRequired,
  withExport: PropTypes.bool,
  withTooltip: PropTypes.bool,
};
