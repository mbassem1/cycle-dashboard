import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TagBox as DxTagBox } from 'devextreme-react/tag-box';

import './_tagsBox.scss';
import { LocaleContext } from 'context/locale';

const TagsBox = ({ label, placeholder, setFieldValue, name, errors, touched, values, ...props }) => {
  /* help documentation
   https://js.devexpress.com/Documentation/Guide/UI_Components/TagBox/Getting_Started_with_TagBox
  */

  const { isRtl, translate } = useContext(LocaleContext);
  const isError = errors && !!(errors[name] && touched[name]);
  return (
    <>
      <DxTagBox
        label={translate(label)}
        rtlEnabled={isRtl}
        labelMode="static"
        searchEnabled
        stylingMode="underlined"
        placeholder={placeholder && translate(placeholder)}
        onValueChanged={e => setFieldValue && setFieldValue(name, e.value)}
        value={values && values[name]}
        showDropDownButton
        {...props}
        buttons={[
          {
            location: 'after',
            name: '',
            options: {
              icon: 'las la-angle-down',
              type: 'default',
            },
          },
        ]}
      />
      {isError ? <div className="error-msg">{errors[name]}</div> : null}
    </>
  );
};

TagsBox.propTypes = {
  label: PropTypes.shape({
    EN: PropTypes.string,
    AR: PropTypes.string,
  }),
  placeholder: PropTypes.shape({
    EN: PropTypes.string,
    AR: PropTypes.string,
  }),
};

export default TagsBox;
