![The G2i Logo](https://raw.githubusercontent.com/g2i/code-challenge-static-assets/master/g2i-web-150px.png 'The G2i logo')

# Trivia Game Coding Challenge - Wenderson Pires

Mobile application developed using React Native for Android & iOS. This application was built for a process I'm participating [G2i] and was made from scratch using the provided wireframes to drive the initial UI development.

Project developed using TypeScript and some packages for implementing features in the app. I'm also using tools for code quality, build and compiler, they are eslint, prettier, babel and others. Dynamic Context APIs is being used to create a theme provider component.

**Native resources:** StyleSheet, Gesture Handler, Navigation, Platform, Vector Icons, and others;</br>
**React & third-party hooks:** createContext, useContext, useState, useSelector, useDispatch;</br>
**Third-party:** styled-components, axios, expo-font, html-entities, redux, redux-thunk;</br>
**Font:** Varela Round;</br>
**Tests:** Tested manually on Android and iOS. Despite this project hasn't automated tests, it's ready to handle tests using jest.

## :art: Demo GIF

![Demo](https://drive.google.com/u/0/uc?id=1LKOskOmdVE50eS0031r20dMxJtgsUOlL)</br>
[Watch the vídeo](https://drive.google.com/file/d/1_XeDj2sALDK87zcs6A8AExzkIRqxKE-u/view)

## :footprints: Steps of development

- Setup ESLint, Prettier and Typescript;
- Install necessary packages;
- Install necessary @types;
- Setup babel for supporting import bases;
- Convert existing .js files to .tsx / .ts;
- Setup .gitignore properly;
- Setup API;
- Setup the Routers (navigator);
- Create necessary stores (questions) for Redux and retrieve a provider;</br>_I particularly prefer to use react API like context and reducer to do that but went by Redux because of the initial structure of this challange._</br>
- Create a theme provider (colours, custom fonts, etc);
- Create Home Screen;
- Create Quiz Screen;
- Create Results Screen;
- Develop the game's / app's functionality;
- Make adjustments for Android and iOS in the UI;
- Create an Alert when fetch data from server fails;
- Decode the texts coming from the API request (they have html encoding);
- Check and fix found bugs;
- Write README.md.

## :mortar_board: How to use

After downloading the files or cloning the repository, run the following commands:

```bash
# Updates the required packages and dependencies:
yarn
```

```bash
# Runs the app on an Android Device / Emulator using Expo
yarn android
```

```bash
# Runs the app on an iOS simulator using Expo
yarn ios
```

## :green_book: Good to know

The bases for the TypeScript import function are configured in the `tsconfig.json` and `babel.config.js` files:

```js
'@components': './src/components',
'@assets': './src/assets',
'@theme': './src/theme/index.tsx',
'@screens': './src/screens/',
'@store': './src/store/',
'@routes': './src/routes/',
'@api': './src/api/',
```

## :bowtie: Author

[Wenderson Pires - Linkedin](https://www.linkedin.com/in/wenderson-pires-silva/)
