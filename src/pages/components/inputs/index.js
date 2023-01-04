import React, { useState } from 'react';
import TextBox from 'shared/components/TextField/textField';
import { CITY, USER } from 'translations/translations';

const InputsPage = () => {
  const [modeType, setModeType] = useState('text');
  const [name, setName] = useState('');

  const handlePassword = () => {
    setModeType(modeType === 'text' ? 'password' : 'text');
  };

  const handleChange = e => {
    setName(e.value);
  };

  const handleRequest = e => {
    e.preventDefault();
  };

  return (
    <div className="container-fluid bg-white pb-5">
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
              <div className="col-sm-6 mt-4" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputsPage;
