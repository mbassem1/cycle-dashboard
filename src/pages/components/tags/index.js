import React from 'react';
import ProgressBar from 'shared/components/ProgressBar/progressBar';
import Tag from 'shared/components/Tag/tag';
import { TAG } from 'translations/translations';

const TagsPage = () => (
  <div className="container-fluid bg-white pb-5">
    <div className="row mt-4">
      <div className="col-6">
        <div className="row mt-4">
          <h3>Tags</h3>
          <div className="col-sm-2 mt-4">
            <Tag text={TAG} />
          </div>
          <div className="col-sm-3 mt-4">
            <Tag text={TAG} textColor="primary" />
          </div>
          <div className="col-sm-2 mt-4">
            <Tag text={TAG} textColor="success" />
          </div>
          <div className="col-sm-2 mt-4">
            <Tag text={TAG} textColor="danger" />
          </div>
          <div className="col-sm-2 mt-4">
            <Tag text={TAG} textColor="warn" />
          </div>
          <div className="col-sm-2 mt-4">
            <Tag text={TAG} textColor="secondary-light" icon />
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-6">
        <div className="row mt-4">
          <h3>Progress bars</h3>
          <div className="col-sm-6 mt-4">
            <ProgressBar value="50" />
          </div>
          <div className="col-sm-6 mt-4">
            <ProgressBar value="20" className="success" />
          </div>
          <div className="col-sm-6 mt-4">
            <ProgressBar value="60" className="danger" />
          </div>
          <div className="col-sm-6 mt-4">
            <ProgressBar value="80" className="warn" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TagsPage;
