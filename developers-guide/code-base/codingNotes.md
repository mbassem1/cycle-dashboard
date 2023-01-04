# Code Notes

#### Table Of Contents


[Localization](#Localization)



## Styling the app

- the app should follow the rules
1. for adding a custom style in the folder beside the component.js just add a style.scss then import it inside component.js
2. external imports then an empty space then internal imports like below:
```js
import React, { useContext } from 'react';
import TabPanel from 'devextreme-react/tab-panel';

import Logo from 'assets/icons/logo_icon.svg';
```
3. on creating the functional component should follow this:
```js
const AppName = () => {};
export default AppName;
```

