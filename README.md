# Getting Started

> **Note**: Make sure you have this set up.

## Set up 💻

- You need to check the official environment setup on https://reactnative.dev/docs/environment-setup
- [Android Studio](https://developer.android.com/studio)
- [XCode](https://developer.apple.com/download/all/)
- [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
  - Also, you can use this manager [rbenv](https://github.com/rbenv/rbenv).
- [Node.js](https://nodejs.org/es/download) (> version 18)
  - Also, you can use this manager [Fast Node Manager (fnm)](https://github.com/Schniz/fnm)

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
yarn android
```

### For iOS

Important: We need to set up our simulator and open it before we start.

You need to install pods before we can continue

```bash
cd ios && pod install
```

After that we can go back to our route

```bash
cd ..
```

then we can run our application with this command:

```bash
yarn ios
```

Or you can run the application opening the our application in Xcode to initialize it!

### Test

```bash
yarn test
```

### Demo

![Demo](https://github.com/ramogollon1/search-book-app/blob/main/book-search.png)
