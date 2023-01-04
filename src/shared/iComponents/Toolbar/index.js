import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Button from 'shared/components/Button/button';
import { useOutsideClick } from 'hooks';
import Icon from 'shared/components/Icon';
import { toolBarTypes } from './utils';

const ToolBar = ({
  items,
  type = toolBarTypes.LIST,
  disabled,
  className,
  icon = 'la-ellipsis-v',
  position = 'left bottom',
  width = '36',
  height = '36',
  component,
  minWidth = '200',
  isTogglerButton = true,
  TogglerActionText,
}) => {
  const toolbarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // hide if clicked outside
  useOutsideClick(toolbarRef, () => setIsOpen(false));

  const handleClick = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className={`toolbar-contain ${className}`} ref={toolbarRef}>
      <div className="toolbar-btn">
        {isTogglerButton ? (
          <Button
            type="gray"
            stylingMode="outlined"
            icon={icon}
            id="only-icon"
            width={width}
            height={height}
            disabled={disabled}
            onClick={() => !disabled && handleClick()}
          />
        ) : (
          <div className="text-action" aria-hidden onClick={() => !disabled && handleClick()}>
            {TogglerActionText}
            <Icon icon="la-angle-down" size="12" />
          </div>
        )}
      </div>
      {isOpen && (
        <div className={`toolbar-data ${position}`} style={{ minWidth: `${minWidth}px` }}>
          {type === toolBarTypes.LIST && (
            <ul className="toolbar-list">
              {items.map(item => (
                <li
                  className="toolbar-list-item"
                  key={item.id}
                  onClick={() => {
                    setIsOpen(false);
                    item.onClick && item.onClick();
                  }}
                  aria-hidden
                >
                  {item.icon && item.icon}
                  {item.text}
                </li>
              ))}
            </ul>
          )}

          {type === toolBarTypes.CONTENT && component}
        </div>
      )}
    </div>
  );
};

ToolBar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.element.isRequired, // <Text value={DASHBOARD} size="14" />
      icon: PropTypes.element, // <Icon icon="la-star-of-life" />
      onClick: PropTypes.func,
    }),
  ),
  type: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.string,
  position: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  component: PropTypes.element,
  minWidth: PropTypes.string,
  isTogglerButton: PropTypes.bool,
  TogglerActionText: PropTypes.element,
};

export default ToolBar;
