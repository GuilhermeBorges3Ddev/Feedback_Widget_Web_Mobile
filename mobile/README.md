# ABOUT MOBILE CONFIGS AND COMMANDS:

* Install expo-cli globally with these single command:
`npm install -g expo-cli`

* Test if expo-cli was really installed:
`expo --version`

* To create the initial Expo project:
`expo init mobile`
``npx tsc --init``

* With the initial project made, install the fonts package of Expo and his fonts loader:
`expo install expo-font @expo-google-fonts/inter`
`expo install expo-app-loading`

* Install the library of icons phosphor-react-native, and the lib to deal with SVG:
`npm install --save phosphor-react-native`
`expo install react-native-svg`

* Taking care with iPhone devices:
`npm install react-native-iphone-x-helper`

* Using the bottom-sheet package to build a bottom dinamic menu screen with his 2 other lib to run:
`expo install @gorhom/bottom-sheet@^4`
`expo install react-native-reanimated`
`npm install react-native-gesture-handler@~2.1.0`

* After we've to include on babel.config.js the following plugins:
```
module.exports = function(api) {
  api.cache(true);
  return {
    ...
    plugins: ['react-native-reanimated/plugin'],
  };
};
```

*Then in App.tsx we've to add:
```
import 'react-native-gesture-handler';
```

* Install Express and his types to make the HTTP routes system:

`npm i express`
`npm i --save-dev @types/express`

* Prisma ORM installation and creation of schema.prisma:

`npm i prisma -D`
`npm i @prisma/client`
`npx run prisma`

* To create the tables on Prisma based on your schema:
`npx prisma migrate dev`

* To view the Prisma Studio
`npx prisma studio`

* For send an email after a Feedback insertion on our DB install nodemailer and his types:
`npm install nodemailer`
`npm install @types/nodemailer`

* Here we're using SOLID:
```
  1) Single Responsibility Principle
  2) Open/Closed Principle
  3) Liskov Substitution Principle
  4) Interface Segregation Principle
  5) Dependency Inversion Principle
```
* Installing Jest and running the initial config:
`npm install jest -D`
`npx jest --init`
`npm install ts-node -D`
`npm i @types/jest -D`

* Installing a TS for JS compiler called SWC, which is faster than Babel:
`npm i -D jest @swc/jest`

* After install SWC insert into jest.config.ts the content bellow replacing "transform":
```
transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
```

* Now you can test the application using:
`npm run test`

* I've installed Cors to communicate our backend with our frontend without headers restrictions:
`npm i cors`
`npm i @types/cors -D`

*  In package.json has a script to run and watch the project, just run:
`expo start`