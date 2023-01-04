import React, { useContext } from 'react';
import { ProgressBar as DxProgressBar } from 'devextreme-react/progress-bar';

import { LocaleContext } from 'context/locale';

const ProgressBar = ({ ...props }) => {
  const { isRtl } = useContext(LocaleContext);

  return <DxProgressBar id="progress-bar-status" min={0} max={100} showStatus={false} rtlEnabled={isRtl} {...props} />;
};

export default ProgressBar;
