import React, { useState } from 'react';
import { GroupPanel, Grouping, Column } from 'devextreme-react/data-grid';

import { customers } from '../mockup';
import Text from '../../Text';
import Table from '..';

const TableHeader = () => <Text value={{ EN: 'Grouping table', AR: 'Grouping table' }} size="16" className="dark" />;
const FilteredTableHeader = ({ title }) => <Text value={{ EN: title[0], AR: title[0] }} size="16" className="dark" />;

const GroupingTable = () => {
  const [selectedRowData, setSelectedRowData] = useState([]);
  const [selectedKey, setSelectedKey] = useState('');
  // expand selected row
  const handleRowClick = e => {
    const { key, component, isExpanded, data } = e;
    const { collapsedItems } = data;
    if (isExpanded) {
      component.collapseRow(key);
    } else {
      component.collapseAll();
      component.expandRow(key);
    }

    if (collapsedItems) {
      setSelectedRowData(collapsedItems);
      setSelectedKey(key);
    } else {
      setSelectedRowData([]);
      setSelectedKey('');
    }
  };

  // expand first row once a content is ready
  const handleFirstRowVisible = e => {
    const { component } = e;
    const rows = component.getVisibleRows();

    if (!component.isNotFirstLoad) {
      component.isNotFirstLoad = true;
      component.expandRow(component.getKeyByRowIndex(0));
      const { data, key } = rows[0];
      if (data.collapsedItems) {
        setSelectedRowData(data.collapsedItems);
        setSelectedKey(key);
      } else {
        setSelectedRowData([]);
        setSelectedKey('');
      }
    }
  };

  return (
    <>
      <Table
        onContentReady={handleFirstRowVisible}
        header={<TableHeader />}
        onRowClick={handleRowClick}
        keyExpr="ID"
        dataSource={customers}
      >
        <GroupPanel visible allowColumnDragging={false} />
        <Grouping autoExpandAll={false} />
        <Column dataField="CompanyName" dataType="string" minWidth={180} />
        <Column dataField="City" dataType="string" minWidth={100} groupIndex={0} />
        <Column dataField="State" dataType="string" minWidth={100} />
        <Column dataField="Phone" dataType="string" minWidth={100} />
        <Column dataField="Fax" dataType="string" minWidth={100} />
        <Column dataField="Zipcode" dataType="string" minWidth={100} />
      </Table>

      {selectedRowData.length >= 1 && (
        <div className="mt-5">
          <Table
            height={300}
            header={<FilteredTableHeader title={selectedKey} />}
            keyExpr="ID"
            dataSource={selectedRowData}
          >
            <Column dataField="CompanyName" dataType="string" minWidth={180} />
            <Column dataField="City" dataType="string" minWidth={100} />
            <Column dataField="State" dataType="string" minWidth={100} />
            <Column dataField="Phone" dataType="string" minWidth={100} />
            <Column dataField="Fax" dataType="string" minWidth={100} />
            <Column dataField="Zipcode" dataType="string" minWidth={100} />
          </Table>
        </div>
      )}
    </>
  );
};

export default GroupingTable;
