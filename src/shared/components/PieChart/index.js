import React, { useContext, useEffect, useRef } from 'react';
import Pie, { Series, Label, Connector, Export, Tooltip } from 'devextreme-react/pie-chart';
import PropTypes from 'prop-types';
import { ThemeContext } from 'context/theme';
import { Title } from 'devextreme-react/chart';
import { LocaleContext } from 'context/locale';
import { DrawerContext } from 'context/drawer/index.js';
import { areas } from './data';

const PieChart = ({
  onPointClick = () => {},
  onLegendClick = () => {},
  onCustomizePoint = () => {},
  onCustomizeText = () => {},
  dataSource = areas,
  palette = 'Bright',
  title,
  type = 'pie',
  withExport = false,
  withTooltip = false,
  ...props
}) => {
  const { drawerVisible } = useContext(DrawerContext);
  const { useDarkTheme } = useContext(ThemeContext);
  const { translate, isRtl } = useContext(LocaleContext);
  const chartRef = useRef(null);

  const pointClickHandler = e => {
    toggleVisibility(e.target);
    onPointClick(e.target);
  };
  const legendClickHandler = e => {
    const arg = e.target;
    const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];
    toggleVisibility(item);
    onLegendClick(arg, item);
  };

  const customizePointHandler = pointInfo => {
    return onCustomizePoint(pointInfo);
  };

  const customizeTextHandler = pointInfo => {
    return onCustomizeText(pointInfo);
  };

  const toggleVisibility = item => {
    item.isVisible() ? item.hide() : item.show();
  };

  useEffect(() => {
    if (chartRef) {
      setTimeout(() => {
        chartRef.current.instance.render({animate: true})
      }, [300]);
    }
  }, [chartRef, drawerVisible, isRtl]);

  return (
    <Pie
      dataSource={dataSource}
      palette={palette}
      onPointClick={pointClickHandler}
      onLegendClick={legendClickHandler}
      type={type}
      customizePoint={customizePointHandler}
      rtlEnabled={isRtl}
      ref={chartRef}
      {...props}
    >
      <Title text={translate(title)} font={useDarkTheme ? { color: '#FFF' } : { color: '#000' }} />
      <Series argumentField="country" valueField="area">
        <Label visible={true} customizeText={customizeTextHandler}>
          <Connector visible={true} width={1} />
        </Label>
      </Series>
      <Export enabled={withExport} />
      <Tooltip enabled={withTooltip}></Tooltip>
    </Pie>
  );
};

export default PieChart;

PieChart.propTypes = {
  dataSource: PropTypes.array.isRequired,
  palette: PropTypes.string,
  title: PropTypes.shape({
    EN: PropTypes.string,
    AR: PropTypes.string,
  }).isRequired,
  type: PropTypes.string,
  onPointClick: PropTypes.func,
  onLegendClick: PropTypes.func,
  onCustomizePoint: PropTypes.func,
  onCustomizeText: PropTypes.func,
  withExport: PropTypes.bool,
  withTooltip: PropTypes.bool,
};
