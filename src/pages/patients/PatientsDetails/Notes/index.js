import React, { useContext } from 'react';

import { NOTES } from 'translations/translations';
import { LocaleContext } from 'context/locale';
import CustomAccordion from 'shared/components/CustomAccordion';
import Accordion from 'shared/components/Accordion';
import ChildHeader from 'shared/components/Accordion/ChildHeader';
import ChildItem from 'shared/components/Accordion/ChildItem';
import accordionService from 'shared/components/Accordion/data';

const Notes = () => {
  const { translate } = useContext(LocaleContext);
  const data = accordionService.getChildData();

  return (
    <CustomAccordion title={translate(NOTES)}>
      <Accordion itemTitleRender={ChildHeader} itemRender={ChildItem} dataSource={data} />
    </CustomAccordion>
  );
};

export default Notes;
