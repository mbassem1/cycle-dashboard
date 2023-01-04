import React, { useContext } from 'react';
import Accordion from 'shared/components/Accordion';
import ChildHeader from 'shared/components/Accordion/ChildHeader';
import ChildItem from 'shared/components/Accordion/ChildItem';

import { LocaleContext } from 'context/locale';
import BarChart from 'shared/components/BarChart';
import { areas } from 'shared/components/BarChart/data';
import CustomAccordion from 'shared/components/CustomAccordion';
import LineChart from 'shared/components/LineChart';
import PieChart from 'shared/components/PieChart';
import { AREA_OF_COUNTRIES, COUNTRY, ENERGY, NOTES } from 'translations/translations';
import { energySources, countriesInfo } from '../../shared/components/LineChart/data';

import accordionService from '../../shared/components/Accordion/data';

const Schedule = () => {
  const countriesInfoData = countriesInfo;
  const energySourcesData = energySources;
  const data = accordionService.getChildData();
  const { translate } = useContext(LocaleContext);

  return (
    <div
      style={{
        marginTop: '120px',
      }}
    >
      <CustomAccordion title={translate(NOTES)}>
        <Accordion itemTitleRender={ChildHeader} itemRender={ChildItem} dataSource={data} />
      </CustomAccordion>
      <BarChart
        dataSource={areas}
        onPointClick={() => null}
        yAxisvalue="area"
        xAxisValue="country"
        name="Area of Countries"
        color="#7CE7AC"
        title={COUNTRY}
        barWidth={10}
        withExport
        withTooltip
      />

      <PieChart
        onPointClick={() => null}
        onLegendClick={() => null}
        onCustomizePoint={pointInfo => (pointInfo.value > 10 ? { color: '#4D4CAC' } : { color: '#2CE5F6' })}
        onCustomizeText={pointInfo => `${pointInfo.argument} - ${pointInfo.value}`}
        dataSource={areas}
        palette="material"
        title={AREA_OF_COUNTRIES}
        type="doughnut"
        withExport
        withTooltip
      />

      <LineChart
        palette="Violet"
        yAxisData={energySourcesData}
        xAxisData={countriesInfoData}
        argumentField="country"
        title={ENERGY}
        withExport
        withTooltip
      />
    </div>
  );
};
export default Schedule;
