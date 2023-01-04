# Localization

The application needs to be localized into several languages (currently Arabic and English) while also maintaining the key requirement of being serverless.


## Overlook

This part we describe the localization module in a high-level manner in order to understand how it works.

## How to Use in Project

```js
// outside the component
import { LocaleContext } from 'context/locale';

// inside the component
const { translate } = useContext(LocaleContext);
// NOTE: please visit the context to see the all values ( translate, lang, isRtl, direction )

// value 
// NOTE: value must be added to 'src/translations' and follow the added values
const value = {
  EN: 'English',
  AR: 'AR'
}
// inside jsx 
translate(value);

// advanced use of translations we have a predefind text component that only requires the value
// ('src/shared/text')

// for .scss files you have a global class (rtl-theme)

```

### Adding a new language

For Adding new language by following these steps:

1. 
2. 

### Localizing Numbers


