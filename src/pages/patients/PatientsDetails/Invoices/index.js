import React, { useContext } from 'react';
import { Column } from 'devextreme-react/data-grid';

import { INVOICES } from 'translations/translations';
import { LocaleContext } from 'context/locale';
import CustomAccordion from 'shared/components/CustomAccordion';
import Table from 'shared/components/Table';
import { patientsData } from './mockup';

const Invoices = () => {
  const { translate } = useContext(LocaleContext);

  return (
    <CustomAccordion title={translate(INVOICES)}>
      <Table keyExpr="id" dataSource={patientsData} height="100%" allowPaging={false} allowHeaderFilter={false}>
        <Column dataField="id" width={80} dataType="string" />
        <Column dataField="item" minWidth={250} dataType="string" />
        <Column dataField="date" minWidth={100} dataType="string" />
        <Column dataField="amount" minWidth={100} dataType="string" />
      </Table>
    </CustomAccordion>
  );
};

export default Invoices;
