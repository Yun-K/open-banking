
# Open Banking app

This app is aimed at users who have multiple bank cards, which allows the user to manage different bank accounts from different bank institutions. The goal is to allow the user to easily add and manage all cards from different banks. Services include card management, making payments and transactions, users’ financial information management, GPS to find nearest corresponding banks, etc.

> NOTE: it is worth to mention that due to the lack of maintaince on firebase settings, and the lack of the testing, this app most like cannot work properly as expect. Hence, it is just a project to practise in order to accumulate the skills.




## Authors

- [@Yun Zhou](https://gitlab.ecs.vuw.ac.nz/zhouyun)
- [@Ze Chen](https://gitlab.ecs.vuw.ac.nz/chenze)
- [@Patrick Zhang](https://gitlab.ecs.vuw.ac.nz/zhangruiy)
- [@Conglang Wang](https://gitlab.ecs.vuw.ac.nz/wangcong)

> [Iteration plan and issue backlog that we've written before development, also contains some wireframes ](https://www.mubucm.com/doc/1h4eaiOv)  

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
`Will be put later`

  
## Screenshots

`Will be put later`

~~please look at the report~~

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

  
