# Common hooks Documentation

This section is for documenting the used common hooks.

## Table of Content

- ### hooks

  - #### persistent hooks:

    - #### Use mobile hook
      - How to use
        ```js
        // outside the component
        import { useMobile } from 'hooks';

        // inside the component
        const isMobile = useMobile();
        ```
      - How to use in style.scss
        1. `@use '../../assets/styles/mediaQueries' as *`
        2. `@include tablet { font-size: 16px;}`
        3. `@include mobile { font-size: 12px;}`