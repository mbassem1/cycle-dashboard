import React from 'react';
import GroupingTable from './GroupingTable';
import PrimaryTable from './PrimaryTable';

const TableShowCase = () => (
  <>
    <div className="mb-4">
      <PrimaryTable />
    </div>
    <div className="mb-4">
      <GroupingTable />
    </div>
  </>
);
export default TableShowCase;
