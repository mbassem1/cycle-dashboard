# theme

The application have a light and dark theme.



## How to Use in Project

```js
// outside the component
import { ThemeContext } from 'context/theme';

// inside the component
  const { useDarkTheme } = useContext(ThemeContext);

// useDarkTheme means dark-theme is enabled ( true || false )

// for .scss files you have a global class (dark-theme)

```
