
# Open Banking app

This app is a third party application APP that allows manage different bank accounts from different bank institutions on one single platform, services including card management, make payments, users’ financial information management ,etc.

This app can easily manage all bank cards from different banks, and can do any operations such as make payments and make transactions. Therefore, this app is aiming for users who have multiple bank cards.





## Authors

- [@Yun Zhou](https://gitlab.ecs.vuw.ac.nz/zhouyun)
- [@Ze Chen](https://gitlab.ecs.vuw.ac.nz/chenze)
- [@Patrick Zhang](https://gitlab.ecs.vuw.ac.nz/zhangruiy)
- [@Conglang Wang](https://gitlab.ecs.vuw.ac.nz/wangcong)
  
## Features

- multi-banks management system
    - user can manage mult-bank accounts
- bank card & devices management system
    - Users can operate any of their bank cards they add through this system, such as transfer, payment, check balance, etc.
    - Just like what any existing bank app on the market.
- Firebase database
    - Payees, Banks, etc. (Hopefully) 
- `Finding Nearest bank ~~brench~~ (GPS feature) TODO: Wang should do this`
    - User can find available nearest bank on the map(hopefully)
    - User can find available nearest bank by looking the code?
- Cross platform
    - This app be used on both ios and Android devices.

  
## Demo

Insert gif or link to demo

`We need to record the demo videl`

  
## Screenshots

~~please look at the report~~

## Demo video link
  
> link

## Tech Stack

**Client:** React-Native

**Server:** Node js, Firebase

  
## Prerequisite && Installation

This is react-native app, so please refer to the following doc to install dependencies.
> https://reactnative.dev/docs/environment-setup
    
## Run Locally

Clone the project

```bash
  git clone https://gitlab.ecs.vuw.ac.nz/course-work/swen325/2021/assignment2/t7/open-banking.git
```

Go to the project directory

```bash
  cd open-banking
```

Install dependencies

```bash
  npm install
```

Run server

Step 1: Start Metro

```bash
  npx react-native start
```

Step 2: Start your application, open a new terminal to run it
  
```bash
  # for android
  npx react-native run-android
  # for ios, not applicable on Windows
  npx react-native run-ios
```
## Acknowledgements

 - [React native docs](https://reactnative.dev/docs/environment-setup)
 - [Firebase doc](https://firebase.google.com/docs/admin/setup)
 - [**React Native Firebase doc**](https://rnfirebase.io/)
 - [Usuage of firebase admin SDK and api](https://firebase.google.com/docs/reference/admin/node)
 - and so on ...

  
