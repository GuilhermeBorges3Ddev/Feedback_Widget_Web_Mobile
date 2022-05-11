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

* We've to download a RN lib to deal with screenshots, thats support the ScreenshotButton component:
`expo install react-native-view-shot`

* To send requests for the API of our backend we use here Axios as HTTP Client:
`npm install axios`

* One more lib of Expo core added to convert the native image Uri to a base64
`expo install expo-file-system`

*  In package.json has a script to run and watch the project, just run:
`expo start`