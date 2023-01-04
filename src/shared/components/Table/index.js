import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DataGrid, { Scrolling, Pager, Paging, HeaderFilter } from 'devextreme-react/data-grid';

import './style.scss';
import { LocaleContext } from 'context/locale';

const Table = React.forwardRef(
  (
    {
      children,
      header,
      defaultPageSize = 10,
      allowedPageSizes = [5, 10],
      height = 600,
      pagerMode = 'full',
      allowHeaderFilter = true,
      allowPaging = true,
      ...props
    },
    ref,
  ) => {
    const { isRtl } = useContext(LocaleContext);

    // this for default columns view, just add a coulmn that u want to view.
    // const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];

    // this for pagination sizes
    // const allowedPageSizes = [5, 10];

    // this for default page size
    // const defaultPageSize = 10;

    return (
      <div className="table-container">
        {header && <div className="table-header">{header}</div>}
        <DataGrid ref={ref} rtlEnabled={isRtl} height={height} {...props}>
          <Scrolling rowRenderingMode="virtual" />
          {allowHeaderFilter && <HeaderFilter visible allowSearch />}
          <Paging defaultPageSize={defaultPageSize} />
          <Pager
            visible
            allowedPageSizes={allowedPageSizes}
            displayMode={pagerMode}
            showPageSizeSelector={allowPaging}
            showNavigationButtons
          />
          {children}
        </DataGrid>
      </div>
    );
  },
);

Table.propTypes = {
  allowedPageSizes: PropTypes.arrayOf(PropTypes.number),
  defaultPageSize: PropTypes.number,
  pagerMode: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  header: PropTypes.element,
  children: PropTypes.node,
  allowHeaderFilter: PropTypes.bool,
  allowPaging: PropTypes.bool,
};

export default Table;
