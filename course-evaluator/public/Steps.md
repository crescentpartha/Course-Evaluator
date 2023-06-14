## Table of Contents

- [Fix `Tailwind CSS` and `daisyUI` ___setup___ problem using `ChatGPT`](#fix-tailwind-css-and-daisyui-setup-problem-using-chatgpt)
  - [Tailwind CSS does not work for create react app. how to setup properly `(ChatGPT - Working)`](#tailwind-css-does-not-work-for-create-react-app-how-to-setup-properly-chatgpt---working)
  - [how to Install daisyUI as a Tailwind CSS plugin `(ChatGPT - Working)`](#how-to-install-daisyui-as-a-tailwind-css-plugin-chatgpt---working)
- [Fix the upstream dependency conflict installing NPM packages](#fix-the-upstream-dependency-conflict-installing-npm-packages)
- [Setup `themes` in daisyUI](#setup-themes-in-daisyui)
- [Setup `font color` in daisyUI](#setup-font-color-in-daisyui)
- [Setup `local fonts` or `downloaded fonts` in daisyUI](#setup-local-fonts-or-downloaded-fonts-in-daisyui)
- [Setup `Web fonts` or `Google fonts` in daisyUI](#setup-web-fonts-or-google-fonts-in-daisyui)

# Fix `Tailwind CSS` and `daisyUI` ___setup___ problem using `ChatGPT`

## Tailwind CSS does not work for create react app. how to setup properly `(ChatGPT - Working)`

> Tailwind CSS can be used with Create React App by following these steps:

1. Install Tailwind CSS and its dependencies using npm:

``` Terminal
npm install -D tailwindcss postcss-cli autoprefixer
```

2. Create a `postcss.config.js` file in the root directory of your project with the following content:
``` JavaScript
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
```
3. Create a `tailwind.config.js` file in the root directory of your project with the following content:
``` JavaScript
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {},
  variants: {},
  plugins: [],
}
```
4. Import the Tailwind CSS styles in your `index.css` file:
``` CSS
/* ./src/index.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```
5. Import the `index.css` file in your `index.js` file:
``` JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```
> With these steps, Tailwind CSS should be set up and working properly with Create React App.

**[🔼Back to Top](#table-of-contents)**

## how to Install daisyUI as a Tailwind CSS plugin `(ChatGPT - Working)`

> To install DaisyUI as a Tailwind CSS plugin, you need to follow these steps:

1. Install Tailwind CSS and its dependencies using npm:

``` Terminal
npm install -D tailwindcss postcss-cli autoprefixer
```

2. Create a `postcss.config.js` file in the root directory of your project with the following content:
``` JavaScript
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('daisyui'),
  ]
}
```
3. Create a `tailwind.config.js` file in the root directory of your project with the following content:
``` JavaScript
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
```
4. Import the Tailwind CSS styles in your `index.css` file:
``` CSS
/* ./src/index.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```
5. Import the `index.css` file in your `index.js` file:
``` JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```
> With these steps, DaisyUI should be set up and working properly as a Tailwind CSS plugin. <br> You can now use DaisyUI components in your React application by following its documentation.

**[🔼Back to Top](#table-of-contents)**

# Fix the upstream dependency conflict installing NPM packages

> `How to fix the upstream dependency conflict installing NPM packages:` <br /><br /> `npm install '--legacy-peer-deps' -S <whatever package>` <br /># `-S is the same as --save` <br /># `i.e` <br />`npm install '--legacy-peer-deps' --save react-useanimations` <br />[stackoverflow solution](https://stackoverflow.com/questions/64936044/fix-the-upstream-dependency-conflict-installing-npm-packages)

``` JavaScript
// Install Font Awesome Icons

npm install '--legacy-peer-deps' --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
```

**[🔼Back to Top](#table-of-contents)**

# Setup `themes` in daisyUI

> [How to use a theme only for a section of a page?](https://daisyui.com/docs/themes/#-3) <br /> Add `data-theme='THEME_NAME'` to any element and everything inside will have your theme. You can nest themes and there is no limit! You can force a section of your HTML to only use a specific theme.

``` JavaScript
// Way-01 | In public/index.html | used in particular section

<html lang="en" data-theme="light">
```

``` JavaScript
// Way-02 | In tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["light"], // setup light theme
  },
  plugins: [require("daisyui")],
}
```

**[🔼Back to Top](#table-of-contents)**

# Setup `font color` in daisyUI

``` JavaScript
// In tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    // themes: ["light"],
    themes: [ 
      {
        mytheme: {
          "primary": "#59A8F1",
          "secondary": "#262626",
          "accent": "#079073",
          "neutral": "#D9D9D9",
          "info": "#EDEDED",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
```

> `Note:` Don't change ***primary***, ***secondary*** keyword. Just change ***color codes***

**[🔼Back to Top](#table-of-contents)**

# Setup `local fonts` or `downloaded fonts` in daisyUI

> First of all, you need to setup your `downloaded fonts` in a `fonts folder` in your project. 

`Example:`
- srs/fonts 
  - titleFonts
    - CoreSansA65Bold.otf
  - bodyFonts
    - KiroW01Regular.ttf

``` JavaScript
// Step-01 | In src/index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: "CoreSens";
  src: url("./fonts/titleFont/CoreSansA65Bold.otf");
}

@font-face {
  font-family: "Kiro";
  src: url("./fonts/bodyFont/KiroW01Regular.ttf");
}
```

``` JavaScript
// Step-02 | In tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'coresens': ["CoreSens, sans-serif"],
        'kiro': ["Kiro, sans-serif"],
      }
    },
  },
```

``` JavaScript
// Step-03 | In Home.js

const Home = () => {
    return (
        <div>
            <h2 className='font-coresens'>This is My Home</h2>
            <h2 className='font-kiro'>This is My Home</h2>
        </div>
    );
};
```

**[🔼Back to Top](#table-of-contents)**

# Setup `Web fonts` or `Google fonts` in daisyUI

``` JavaScript
// Step-01 | In src/index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Lato&family=Lobster&family=Open+Sans:wght@300&display=swap');
```

``` JavaScript
// Step-02 | In tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'lato': ["Lato, sans-serif"],
        'lobster': ["Lobster, cursive"],
        'opensans': ["Open Sans, sans-serif"]
      }
    },
  },
  plugins: [require("daisyui")],
}
```

``` JavaScript
// Step-03 | In Home.js

const Home = () => {
    return (
        <div>
            <p className='text-3xl font-lato text-primary'>Primary</p>
            <p className='text-3xl font-lobster text-secondary'>Secondary</p>
            <p className='text-3xl font-opensans text-accent'>Accent</p>
        </div>
    );
};
```

**[🔼Back to Top](#table-of-contents)**