/* eslint-disable react/no-array-index-key */
import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FileUploader as DXFileUploader } from 'devextreme-react/file-uploader';

import '../fileUploader/_fileUploader.scss';
import { LocaleContext } from 'context/locale';
import Icon from '../Icon';

const FileUploaderProfile = ({ type, id, setFieldValue, name, errors, touched, values, ...props }) => {
  const fileUploaderRef = useRef(null);
  const [files, setFiles] = useState((values && values[name]) || []);
  const [selectedFile, setSelectedFile] = useState(null);
  const isError = errors && !!(errors[name] && touched[name]);
  /* help documentation
  https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileUploader
  */

  const { isRtl } = useContext(LocaleContext);
  const handleChange = e => {
    const { value } = e;
    setFiles(value);
    setFieldValue && setFieldValue(name, value);
    if (value.length >= 1) {
      setSelectedFile(URL.createObjectURL(value[0]));
    }
  };
  const handleRemove = e => {
    e.stopPropagation();
    setFiles([]);
    setSelectedFile(null);
    fileUploaderRef.current.instance.reset();
  };

  return (
    <>
      <div
        style={{ visibility: files.length > 0 ? 'visible' : 'hidden' }}
        className="floating-icon"
        aria-hidden
        onClick={handleRemove}
      >
        <Icon size="19" icon="la-trash-alt" color="#FF808B" />
      </div>
      <div className="user-profile-add" id={id}>
        {files.length > 0 ? (
          <img src={selectedFile} alt="img" />
        ) : (
          <Icon size="27" icon="la-user-plus" color="#1B51E5" />
        )}
      </div>

      <div className="fileuploader-container profile">
        <DXFileUploader
          ref={fileUploaderRef}
          dialogTrigger={`#${id}`}
          rtlEnabled={isRtl}
          uploadMode="useForm"
          showFileList
          onValueChanged={e => handleChange(e)}
          {...props}
        />
      </div>
      {isError ? <div className="error-msg">{errors[name]}</div> : null}
    </>
  );
};

FileUploaderProfile.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
};

export default FileUploaderProfile;
