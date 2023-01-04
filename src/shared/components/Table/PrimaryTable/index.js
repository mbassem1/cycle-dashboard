/* eslint-disable new-cap */
import React, { useRef, useState, useContext } from 'react';
import { Column, Selection } from 'devextreme-react/data-grid';
import { jsPDF } from 'jspdf';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver';
import { exportDataGrid } from 'devextreme/pdf_exporter';
import { exportDataGrid as exportDataGridExcel } from 'devextreme/excel_exporter';
import notify from 'devextreme/ui/notify';

import ToolBar from 'shared/iComponents/Toolbar';
import Icon from 'shared/components/Icon';
import { DELETE_ITEM, EDIT } from 'translations/translations';
import TextBox from 'shared/components/TextField/textField';
import Modal from 'shared/iComponents/Modal';
import Button from 'shared/components/Button/button';
import { LocaleContext } from 'context/locale';
import { customers } from '../mockup';
import Text from '../../Text';
import Table from '..';

// table component header
const TableHeader = ({ bulkItems, tableRef }) => {
  // pdf export functionality
  const hanldeExportPdf = () => {
    const tableInstance = tableRef.current.instance;
    const doc = new jsPDF();
    exportDataGrid({
      jsPDFDocument: doc,
      component: tableInstance,
      indent: 5,
    }).then(() => {
      doc.save('Companies.pdf');
    });
  };

  // excel export functionalitu
  const hanldeExportExcel = () => {
    const tableInstance = tableRef.current.instance;
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Main sheet');
    exportDataGridExcel({
      component: tableInstance,
      worksheet,
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then(buffer => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Companies.xlsx');
      });
    });
    tableInstance.cancel = true;
  };

  // hanlde search
  const hanldeSearchValueChange = e => {
    const { value } = e;
    const tableInstance = tableRef.current.instance;
    if (value === '') {
      tableInstance.clearFilter();
    } else {
      tableInstance.searchByText(value);
    }
  };

  return (
    <>
      <Text value={{ EN: 'Primary table', AR: 'Primary table' }} size="16" className="dark" />
      <ul className="table-header-actions">
        <li>
          <TextBox
            stylingMode="primary"
            valueChangeEvent="keyup"
            onValueChanged={hanldeSearchValueChange}
            width="250"
            height="34"
            mode="text"
            placeholder={{ EN: 'Search', AR: 'Search' }}
          />
        </li>
        {bulkItems.length >= 1 && (
          <li>
            <ToolBar
              isTogglerButton={false}
              position="bottom right"
              TogglerActionText={<Text value={{ EN: 'Bulk actions', AR: 'Bulk actions' }} size="12" />}
              items={[
                {
                  id: 1,
                  text: <Text value={{ EN: 'Assign to category', AR: 'Assign to category' }} size="12" />,
                  icon: <Icon icon="la-exchange-alt" />,
                },
                {
                  id: 2,
                  text: <Text value={DELETE_ITEM} color="#FF808B" size="12" />,
                  icon: <Icon icon="la-trash" color="#FF808B" />,
                },
              ]}
            />
          </li>
        )}
        <li>
          <ToolBar
            items={[
              {
                id: 1,
                text: <Text value={{ EN: 'Export PDF', AR: 'Export PDF' }} size="12" />,
                icon: <Icon icon="la-file-pdf" />,
                onClick: hanldeExportPdf,
              },
              {
                id: 2,
                text: <Text value={{ EN: 'Export Excel', AR: 'Export Excel' }} size="12" />,
                icon: <Icon icon="la-file-pdf" />,
                onClick: hanldeExportExcel,
              },
            ]}
            position="bottom right"
          />
        </li>
      </ul>
    </>
  );
};

const PrimaryTable = () => {
  const tableRef = useRef();
  const { translate } = useContext(LocaleContext);
  const [customersList, setCustomersList] = useState(customers);
  const [bulkItems, setBulkItems] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  // actions component render
  const renderActions = gridInfo => {
    const { data, rowIndex } = gridInfo;
    const forceModalUp = rowIndex > 4;
    const isItemChecked = bulkItems.find(bulkItem => bulkItem.ID === data.ID);

    return (
      <ToolBar
        items={[
          {
            id: 1,
            text: <Text value={EDIT} size="12" />,
            icon: <Icon icon="la-edit" />,
            onClick: () => console.log(data),
          },
          {
            id: 2,
            text: <Text value={DELETE_ITEM} color="#FF808B" size="12" />,
            icon: <Icon icon="la-trash" color="#FF808B" />,
            onClick: () => {
              setShowEditModal(true);
              setSelectedItem(data);
            },
          },
        ]}
        position={`${forceModalUp ? 'top' : 'bottom'} right`}
        disabled={!!isItemChecked}
      />
    );
  };

  // selected row functionality
  const onSelectionChanged = ({ selectedRowsData }) => {
    setBulkItems(selectedRowsData);
  };

  // handle item deletion
  const handleItemDelete = () => {
    const customersListAfterDelete = customersList.filter(item => item.ID !== selectedItem.ID);
    setCustomersList(customersListAfterDelete);
    notify(
      {
        message: translate({ EN: 'Successfully deleted', AR: 'تم الحذف بنجاح' }),
        width: 230,
        position: {
          at: 'bottom',
          my: 'bottom',
        },
      },
      'success',
      1000,
    );
    setShowEditModal(false);
  };

  return (
    <>
      {showEditModal && (
        <Modal
          width="450"
          header={{ EN: 'Are you sure to delete this item?', AR: 'هل أنت متأكد من حذف هذا العنصر؟' }}
          onClose={() => setShowEditModal(false)}
        >
          <div className="modal-actions">
            <Button text={{ EN: 'Close', AR: 'Close' }} type="outline" onClick={() => setShowEditModal(false)} />
            <Button text={{ EN: 'Yes, confirm', AR: 'Yes, confirm' }} type="default" onClick={handleItemDelete} />
          </div>
        </Modal>
      )}
      <Table
        ref={tableRef}
        header={<TableHeader bulkItems={bulkItems} tableRef={tableRef} />}
        keyExpr="ID"
        dataSource={customersList}
        onSelectionChanged={onSelectionChanged}
        pagerMode="compact"
      >
        <Selection mode="multiple" />
        <Column dataField="CompanyName" minWidth={180} dataType="string" />
        <Column dataField="City" minWidth={100} dataType="string" />
        <Column dataField="State" minWidth={100} dataType="string" />
        <Column dataField="Phone" minWidth={100} dataType="string" />
        <Column dataField="Fax" minWidth={100} dataType="string" />
        <Column dataField="Zipcode" minWidth={100} dataType="string" />
        <Column width={80} alignment="right" cellRender={renderActions} cssClass="td-actions" />
      </Table>
    </>
  );
};

export default PrimaryTable;
