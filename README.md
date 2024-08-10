This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli). This project was completed by Carlos Ruiz Hernandez, Manav Gupta, Brian Li, Kush Patel(ME), and Edgar Montero. It is an attempt  My efforts in this project were mainly towards styling and consistency of medical cards, Helping create the bookmarks screen, and helping create the comparison screen along with other less important parts. This project mainly focused on frontend design starting from interviews with our potential users to paper prototyping to our computer prototype. Our prototypes are also tested by users and are improved based on feedback given

## Project Summary
The purpose of our app, GenericWisdom, is to assist users with a fast way to compare and find alternate medicines, named or generic, for a given drug. This can be done using our app by searching up the name of the medicine the user already knows about/uses and then selecting a medicine to compare with. The general search can be done by typing the name of your medicine. After choosing a medicine, you will see a list of other similar medicines. All these medicines can display the price, Manufacturer, ingredients, and a brief description. Aftering picking a medicine to compare with, the same information is shown for both medicines for an easier comparison. You can favorite/heart the medicine you prefer and save it to find it more easily in the future. The last compared medicines will be saved on the compare screen until a new pair of medicines are selected.

<img width="162" alt="Screenshot 2023-12-18 at 10 07 13 AM" src="https://github.com/kpate402/GenericWisdom/assets/74434573/24147a76-a34f-4988-b180-d310939a1112">
<img width="168" alt="Screenshot 2023-12-18 at 10 07 28 AM" src="https://github.com/kpate402/GenericWisdom/assets/74434573/98b99ecd-bf23-4c80-b5f2-80d711aedc88">
<img width="167" alt="Screenshot 2023-12-18 at 10 08 16 AM" src="https://github.com/kpate402/GenericWisdom/assets/74434573/9b62a2cc-8b81-4137-9ec2-ed8db1076343">

## Project Presentation
https://docs.google.com/presentation/d/1ZtcR0eauY5mY9n1pYJOVmn1o_-ixrUANmGIR6iFkRy4/edit?usp=sharing
This link is a presentation that explains our first iteration of our application, what we learned, and the final application. This is also a video demo included at the end. The entire project started from interviewing potential users and asking their thoughts. We then proceeded with paper prototyping and then went into user testing. After a few iterations we moved onto the software version and restarted the UX process(shown in the link above). 


## Platform Details
Our app can be run on any development OS - Mac, Windows, or Linux, and runs on android or an android emulator. The necessary dependencies are Node, Watchman, the React Native command line interface, a JDK, and Android Studio (note: while any editor can be used to develop the app, Android Studio is needed to set up the necessary tooling required to build the react native app for android).
Although different versions of Node and jdk can be downloaded, we have used Node version 21 (anything above 16 can be used) and Java version 11. (Note: some higher Java versions may cause problems when running the app)
Android requirements: Android SDK 13 (Tiramisu), Android SDK platform 33 is used, however, 34 is also compatible.

TL;DR: Minimum Requirements - Node v16, Java v11, Android SDK 13 (Tiramisu), Android SDK platform 33, Watchman and React Native command line.


# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Helpful Notes During Setup
Firstly, it is important to make sure that all the necessary items listed above in Platform Details are correctly downloaded and running. A guide to do so can be found here: https://reactnative.dev/docs/environment-setup?guide=native (do not download the Java linked in the website)
If you have issues when setting up environment variables then make sure to look through your file system to check if the paths you are using are correct. After editing your environment variables, always use Source <environment variables file>  so those changes you made are saved.
(For Mac users only) If your still having issues running the app, type the following commands in your terminal:
cd android
chmod +x gradlew
./gradlew clean
For those who have trouble launching the emulator after downloading Android Studio, You may need to check if you have the correct system image installed for your system(mentioned in the guide). If it is correct but the emulator doesn’t launch then you should go to the virtual device manager on Android studio and delete your current device. You can then create another device that is Pixel 3a with a API 34 system image arm64-v8a. This should require some downloading but will recreate a device that you can use as an emulator.
After the environments are set up and the project is ready to go, one can simply run the command “npm install” in the terminal in the project directory to install the packages to run the app, then run “npm start” or “npm run android” to launch the app
The first time the app is launched it will have to download and install the packages onto the emulator and this may take some time, however, after the first time, the initial load in time should exponentially decrease.
Alternatively, if you have an android, you can enable usb debugging on your phone, connect it to your laptop, and run the same commands as step 2 to run the app on your android device.
Make sure that only 1 device is connected at a time (emulator and phone can’t both be connected). To check if your phone (and emulator) is (are) connected, type “adb devices” in your terminal in the project and it should list the devices.


## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
