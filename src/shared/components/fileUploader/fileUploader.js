/* eslint-disable react/no-array-index-key */
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { FileUploader as DXFileUploader } from 'devextreme-react/file-uploader';

import './_fileUploader.scss';
import { UPLOADER_MESSAGE, UPLOAD_CLICK } from 'translations/translations';
import { LocaleContext } from 'context/locale';
import Modal from 'shared/iComponents/Modal';
import Button from '../Button/button';

const FileUploader = ({ type, label, id, setFieldValue, name, errors, touched, values, ...props }) => {
  const [files, setFiles] = useState((values && values[name]) || []);
  const [modal, setModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const isError = errors && !!(errors[name] && touched[name]);
  /* help documentation
  https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileUploader
  */

  const { isRtl, translate } = useContext(LocaleContext);
  const handleChange = e => {
    const { value } = e;
    setFiles(value);
    setFieldValue && setFieldValue(name, value);
  };
  const removeFile = i => {
    const filteredFiles = files.filter((_, index) => index !== i);
    setFiles(filteredFiles);
    setFieldValue && setFieldValue(name, filteredFiles);
  };
  const viewImg = i => {
    const ViewFile = files.find((_, index) => index === i);
    const ImgUrl = URL.createObjectURL(ViewFile);
    setSelectedFile(ImgUrl);
    setModal(true);
  };
  const handleReturn = () => {
    switch (type) {
      case 'drag':
        return (
          <div>
            <div className="fileuploader-container drag">
              <span> {translate(label)} </span>
              <div className="fileuploader-box" id={id}>
                <div className="icon">
                  <i className="las la-cloud" />
                </div>
                <DXFileUploader
                  dialogTrigger={`#${id}`}
                  labelText={translate(UPLOADER_MESSAGE)}
                  rtlEnabled={isRtl}
                  uploadMode="useForm"
                  showFileList={false}
                  onValueChanged={e => handleChange(e)}
                  {...props}
                />
                <span className="upload" id="uploader">
                  {translate(UPLOAD_CLICK)}
                </span>
              </div>
              {files.length > 0 && (
                <div className="fileuploader-list">
                  {files.map((file, i) => (
                    <div className="fileuploader-item" key={i}>
                      <div className="fileuploader-filename">
                        <i className="las la-file" />
                        {file.name}
                      </div>
                      <div className="fileuploader-action">
                        <Button icon="las la-eye" width="30" height="30" onClick={() => viewImg(i)} />
                        <Button
                          type="danger"
                          icon="la-trash-alt"
                          width="30"
                          height="30"
                          onClick={() => removeFile(i)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      default:
        return (
          <div className="fileuploader-container">
            <span> {translate(label)} </span>
            <div className="fileuploader-box" id={id}>
              <div className="icon">
                <i className="las la-cloud-upload-alt" />
              </div>
              <DXFileUploader
                dialogTrigger={`#${id}`}
                labelText={translate(UPLOADER_MESSAGE)}
                rtlEnabled={isRtl}
                uploadMode="useForm"
                showFileList
                onValueChanged={e => handleChange(e)}
                {...props}
              />
            </div>
            {files.length > 0 && (
              <div className="fileuploader-list">
                {files.map((file, i) => (
                  <div className="fileuploader-item" key={i}>
                    <div className="fileuploader-filename">
                      <i className="las la-file" />
                      {file.name}
                    </div>
                    <div className="fileuploader-action">
                      <Button icon="las la-eye" width="30" height="30" onClick={() => viewImg(i)} />
                      <Button type="danger" icon="la-trash-alt" width="30" height="30" onClick={() => removeFile(i)} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div>
      {modal && (
        <Modal width="520" position="center" onClose={() => setModal(false)}>
          <div className="fileuploader-modal">
            <img src={selectedFile} alt="img" />
          </div>
        </Modal>
      )}

      {handleReturn()}
      {isError ? <div className="error-msg">{errors[name]}</div> : null}
    </div>
  );
};

FileUploader.propTypes = {
  label: PropTypes.shape({
    EN: PropTypes.string,
    AR: PropTypes.string,
  }),
  id: PropTypes.string,
  type: PropTypes.string,
};

export default FileUploader;
