import React from 'react';
import DevExAccordion from 'devextreme-react/accordion';

import './styles.scss';

const Accordion = ({
  dataSource,
  isCollapsible = true,
  isMultiple = true,
  animationDuration = 300,
  itemTitleRender,
  itemRender,
  ...props
}) => (
  <div id="accordion">
    <DevExAccordion
      dataSource={dataSource}
      hoverStateEnabled={false}
      collapsible={isCollapsible}
      multiple={isMultiple}
      animationDuration={animationDuration}
      selectedItems={dataSource[0]}
      itemTitleRender={itemTitleRender}
      itemRender={itemRender}
      activeStateEnabled={false}
      id="accordion-container"
      {...props}
    />
  </div>
);

export default Accordion;
