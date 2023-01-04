import React, { useState } from 'react';

import {
  DELETE_ITEM_MESSAGE,
  DELETE_ITEM,
  ACTIVE,
  DISABLE,
  RESTING,
  TAG,
  APPLY,
  USER,
  CITY,
  SUCCESS,
  DEFAULT_TOGGLE,
  DANGER_TOGGLE,
  TAGS,
  SELECT,
  USER_WITH_ICONS,
  YES,
  NO,
  SHOW_TOAST_ONE_BUTTON,
  SHOW_TOAST_TWO_BUTTON,
  UPLOADER_MESSAGE,
  ATTACHMENTS,
  UPLOAD,
} from 'translations/translations';
import Button from './Button/button';
import PieChart from './PieChart';
import { areas } from './PieChart/data';
import CheckBox from './checkBox/checkBox';
import ProgressBar from './ProgressBar/progressBar';
import RadioGroup from './radio/radio';
import SelectBox from './selectBox/selectBox';
import Tag from './Tag/tag';
import TagsBox from './TagsBox/tagsBox';
import TextBox from './TextField/textField';
import Toast from './Toast/toast';
import Toggle from './toggle/toggle';
import BarChart from './BarChart';
import LineChart from './LineChart';
import FileUploader from './fileUploader/fileUploader';
import CustomDatePicker from './CustomDatePicker';

const simpleProducts = [
  `${'&#127760'} Video Player`,
  'SuperHD Video Player',
  'SuperPlasma 50',
  'SuperLED 50',
  'SuperLED 42',
  'SuperLCD 55',
  'SuperLCD 42',
  'SuperPlasma 65',
  'SuperLCD 70',
  'Projector Plus',
  'Projector PlusHT',
  'ExcelRemote IR',
  'ExcelRemote Bluetooth',
  'ExcelRemote IP',
];

export const ComponentsUI = () => {
  const [name, setName] = useState('');
  const [addItems, setAddItems] = useState(simpleProducts);
  const [modeType, setModeType] = useState('text');
  const [showToast, setShowToast] = useState(true);
  const [showToast1, setShowToast1] = useState(false);
  const [showToast2, setShowToast2] = useState(false);

  const handleRequest = e => {
    e.preventDefault();
  };
  const handleChange = e => {
    setName(e.value);
  };

  const CustomItem = data => {
    return (
      <div className="d-flex  align-items-center gap-2">
        <i className={`las ${data.icon}`}></i>
        <div className="">{data.name}</div>
      </div>
    );
  };
  const customField = data => {
    return (
      <div className="d-flex  align-items-center gap-2 field">
        {data && (
          <div className="mt-3">
            <i className={`las ${data.icon}`}></i>
          </div>
        )}{' '}
        <TextBox className="" defaultValue={data && data.name} readOnly={true} />
      </div>
    );
  };
  const handlePassword = () => {
    setModeType(modeType === 'text' ? 'password' : 'text');
  };
  const onCustomItemCreating = args => {
    const newValue = args.text;
    args.customItem = newValue;
    setAddItems([newValue, ...addItems]);
  };

  const toggleToast = () => {
    setShowToast(!showToast);
  };
  const toggleToast1 = () => {
    setShowToast1(!showToast1);
  };
  const toggleToast2 = () => {
    setShowToast2(!showToast2);
  };
  // Radio Translations
  const radioLabels = [
    { label: { EN: 'Male', AR: 'ذكر' }, value: 1 },
    { label: { EN: 'Female', AR: 'إثني' }, value: 2 },
  ];

  return (
    <div className="container-fluid bg-white">
      <div className="row mb-4">
        <div className="col-6">
          <div className="row mt-4">
            <h3>Primary buttons</h3>
            <div className="col-sm-3 mt-4">
              <Button text={ACTIVE} />
            </div>
            <div className="col-sm-3 mt-4">
              <Button text={RESTING} type="normal" />
            </div>
            <div className="col-sm-3 mt-4">
              <Button text={DISABLE} disabled={true} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="row mt-4">
            <h3>Outline buttons</h3>
            <div className="col-sm-3 mt-4">
              <Button stylingMode="outlined" text={ACTIVE} />
            </div>
            <div className="col-sm-3 mt-4">
              <Button text={RESTING} type="normal" stylingMode="outlined" />
            </div>
            <div className="col-sm-3 mt-4">
              <Button text={DISABLE} stylingMode="outlined" disabled />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-6">
          <div className="row mt-4">
            <h3>Primary buttons with icon</h3>
            <div className="col-sm-3 mt-4">
              <Button icon="la-user-plus" text={ACTIVE} />
            </div>

            <div className="col-sm-3 mt-4">
              <Button text={RESTING} type="normal" icon="la-user-plus" />
            </div>
            <div className="col-sm-3 mt-4">
              <Button text={DISABLE} disabled={true} icon="la-user-plus" />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="row mt-4">
            <h3>Outline buttons</h3>
            <div className="col-sm-3 mt-4">
              <Button text={ACTIVE} stylingMode="outlined" icon="la-user-plus" />
            </div>
            <div className="col-sm-3 mt-4">
              <Button text={RESTING} type="normal" stylingMode="outlined" icon="la-user-plus" />
            </div>
            <div className="col-sm-3 mt-4">
              <Button text={DISABLE} stylingMode="outlined" disabled icon="la-user-plus" />
            </div>
            <div className="col-sm-3 mt-4">
              <Button icon="la-user-plus" id="only-icon" width="36" height="36" />
            </div>
            <div className="col-sm-3 mt-4">
              <Button type="normal" icon="la-user-plus" id="only-icon" width="46" />
            </div>
            <div className="col-sm-3 mt-4">
              <Button type="normal" stylingMode="outlined" icon="la-user-plus" id="only-icon" width="46" />
            </div>
            <div className="col-sm-3 mt-4">
              <Button stylingMode="outlined" icon="la-user-plus" id="rounded" />
            </div>
            <div className="col-sm-3 mt-4">
              <Button stylingMode="outlined" type="gray" icon="la-user-plus" id="only-icon" width="46" />
            </div>
          </div>
        </div>
      </div>
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
              <Tag text={TAG} textColor="secondary-light" onClick={() => console.log('tag clicked')} icon />
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
      <form onSubmit={handleRequest}>
        <div className="row mt-4 mb-4">
          <div className="col-6">
            <div className="row mt-4">
              <h3>Text Box</h3>
              <div className="col-sm-6 mt-4">
                <TextBox label={CITY} value={name} required onValueChanged={e => handleChange(e)} placeholder={CITY} />
              </div>
              <div className="col-sm-6 mt-4">
                <TextBox label={USER} icon="la-user-alt" placeholder={USER} />
              </div>
              <div className="col-sm-6 mt-4">
                <TextBox
                  label={USER}
                  mode={modeType}
                  buttons={[
                    {
                      location: 'after',
                      name: '',
                      options: { icon: 'las la-eye', type: 'default', onClick: () => handlePassword() },
                    },
                    {
                      location: 'before',
                      name: 'icon',
                      options: { icon: 'las la-user-alt', type: 'default' },
                    },
                  ]}
                />
              </div>
              <div className="col-sm-6 mt-4"></div>
            </div>
          </div>
        </div>
        {/* <div className="row mt-4 mb-4">
          <div className="col-6">
            <div className="row mt-4">
              <h3>Select Box</h3>
              <div className="col-sm-6 mt-4">
                <SelectBox
                  label={USER}
                  required
                  items={[
                    { id: 1, name: 'Ahmed' },
                    { id: 2, name: 'sara' },
                  ]}
                  displayExpr="name"
                  valueExpr="id"
                  placeholder={SELECT}
                />
              </div>
              <div className="col-sm-6 mt-4">
                <SelectBox
                  label={USER_WITH_ICONS}
                  required
                  items={[
                    {
                      id: 1,
                      name: 'Ahmed',
                      icon: 'la-user-nurse',
                    },
                    {
                      id: 2,
                      name: 'sara',
                      icon: 'la-user-shield',
                    },
                  ]}
                  displayExpr="name"
                  valueExpr="id"
                  placeholder={SELECT}
                  fieldRender={customField}
                  itemRender={CustomItem}
                />
              </div>
            </div>
          </div>
        </div> */}
        <div className="row mt-4 mb-4">
          <div className="col-6">
            <div className="row mt-4">
              <h3>Check Box</h3>
              <div className="col-sm-6 mt-4">
                <CheckBox text={ACTIVE} required />
              </div>
              <div className="col-sm-6 mt-4">
                <CheckBox text={DISABLE} disabled />
              </div>
              <div className="col-sm-6 mt-4">
                <CheckBox text={SUCCESS} className="success" />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 mb-4">
          <div className="col-6">
            <div className="row mt-4">
              <h3>Toggle</h3>
              <div className="col-sm-3 mt-4">
                <Toggle label={DEFAULT_TOGGLE} disabled />
              </div>
              <div className="col-sm-3 mt-4">
                <Toggle label={DEFAULT_TOGGLE} />
              </div>
              <div className="col-sm-3 mt-4">
                <Toggle className="success" defaultValue={true} label={DEFAULT_TOGGLE} />
              </div>
              <div className="col-sm-3 mt-4">
                <Toggle className="danger" defaultValue={true} label={DANGER_TOGGLE} />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 mb-4">
          <div className="col-6">
            <div className="row mt-4">
              <h3>Tags Box</h3>
              <div className="col-sm-12 mt-4">
                <TagsBox label={TAGS} required items={simpleProducts} placeholder={SELECT} />
              </div>
              <div className="col-sm-12 mt-4">
                <TagsBox
                  label={TAGS}
                  items={addItems}
                  onCustomItemCreating={onCustomItemCreating}
                  acceptCustomValue={true}
                  placeholder={SELECT}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 mb-4">
          <div className="col-6">
            <div className="row mt-4">
              <h3>Toast</h3>
              <div className="col-sm-12 mt-4">
                <Toast
                  displayTime={3500}
                  visible={showToast}
                  type="error"
                  title={DELETE_ITEM}
                  description={DELETE_ITEM_MESSAGE}
                  icon="las la-trash-alt"
                />
                <Toast
                  displayTime={345000}
                  visible={showToast1}
                  type="success"
                  title={DELETE_ITEM}
                  description={DELETE_ITEM_MESSAGE}
                  onConfirm={toggleToast1}
                  confirmLabel={YES}
                  icon="las la-check-double"
                />
                <Toast
                  displayTime={345000}
                  visible={showToast2}
                  type="warning"
                  title={DELETE_ITEM}
                  description={DELETE_ITEM_MESSAGE}
                  onConfirm={toggleToast2}
                  onCancel={toggleToast2}
                  confirmLabel={YES}
                  cancelLabel={NO}
                  icon="las la-exclamation-triangle"
                />
              </div>
              <div className="col-sm-6 mt-4">
                <Button text={SHOW_TOAST_ONE_BUTTON} onClick={toggleToast1}></Button>
              </div>
              <div className="col-sm-6 mt-4">
                <Button text={SHOW_TOAST_TWO_BUTTON} onClick={toggleToast2}></Button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 mb-4">
          <div className="col-6">
            <div className="row mt-4">
              <h3>Default Radio Group</h3>
              <div className="col-sm-12 mt-4">
                <RadioGroup dataSource={radioLabels} layout="horizontal" valueExpr="value" />
              </div>
              <h3>Required Radio Group</h3>
              <div className="col-sm-12 mt-4">
                <RadioGroup dataSource={radioLabels} layout="horizontal" valueExpr="value" required />
              </div>
              <div className="col-sm-12 mt-4">
                <h3>Disabled Radio Group</h3>
                <RadioGroup
                  dataSource={radioLabels}
                  layout="horizontal"
                  valueExpr="value"
                  disabled
                  value={radioLabels[0].value}
                />
              </div>
            </div>
          </div>
        </div>

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
        <Button text={APPLY} useSubmitBehavior={true} />
      </form>

      <div className="row mt-4 mb-4"></div>
      <div className="row mt-4 mb-4"></div>
    </div>
  );
};
