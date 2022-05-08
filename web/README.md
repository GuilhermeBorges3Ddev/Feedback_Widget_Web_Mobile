# ABOUT FRONT END CONFIGS AND COMMANDS:

* After run npm install run the project using the following command:

`npm run dev`

* To create a Vite.JS project:

``npm create vite@latest``

* Install Tailwind CSS as a dependency with PostCSS and init command:

``npm install -D tailwindcss postcss autoprefixer``
``npx tailwindcss init``

* Install Phosphor React icons:

`npm i phosphor-react`

* Install the accessibility library Headless UI (created by Tailwind CSS team):

`npm install @headlessui/react`

* For the screenshot area download the html2canvas package:
`npm i html2canvas`

* To do a personal style of form itens install the plugin:
`npm install -D @tailwindcss/forms`

* Then add these plugin inside the <u>tailwind.config.js</u>:
```
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
```

* Finally make your <u>tailwind.config.js</u> like that:
```
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#9960FF',
          500: '#8257e6'
        }
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
```