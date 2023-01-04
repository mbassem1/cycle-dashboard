import React from 'react';

import FileUploader from 'shared/components/fileUploader/fileUploader';
import { ATTACHMENTS, UPLOAD } from 'translations/translations';

const FileUploadersPage = () => (
  <div>
    <div className="row mt-4 mb-4">
      <div className="col-6">
        <div className="row mt-4">
          <h3>File Uploader </h3>
          <div className="col-md-12">
            <FileUploader id="file1" label={ATTACHMENTS} accept="image/*" multiple />
          </div>

          <div className="col-md-12">
            <FileUploader id="file2" type="drag" accept="image/*" label={UPLOAD} multiple />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FileUploadersPage;
