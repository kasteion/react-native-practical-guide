# User Authentication

## Login, signup & Auth State Management

- Signing Users Up & Logging In
- Managing Authetication Status
- Storing Authentication Status on the Device

## How does Authentication Wook?

Phone --> Send credentials (Http request) --> Backend API --> Validate Credentials & Generate Auth Token

Auth Token: The auth token identifies an authenticated user. It is sent along with future Http requests to protected resources.

Backend API --> Response with auth token --> Auth token stored on the device

## Backend Setup

Using the same firebase project. But instead of the Realtime Database using Authentication.

- Authentication --> Click on Get Started
- Choose a basic Email/Password flow
- Enable Email/Password (Disable email link)

We can use the firebase SDK, but we can use the Firebase REST API.

Search for "Firebase Auth REST API"

https://firebase.google.com/docs/reference/rest/auth

## Install Axios

> yarn add axios

# Firebase Realtime Database Rules

Previous rules

```json
{
  "rules": {
    ".read": "now < 1654236000000", // 2022-6-3
    ".write": "now < 1654236000000" // 2022-6-3
  }
}
```

```json
{
  "rules": {
    ".read": "auth.uid != null", // 2022-6-3
    ".write": "auth.uid != null" // 2022-6-3
  }
}
```

# To Store the token in the device

https://reactnative.dev/docs/asyncstorage

Search for the community packages

We can use this

https://github.com/react-native-async-storage/async-storage

> yarn add @react-native-async-storage/async-storage

# To prolong the loading

Deprecated

> expo install expo-app-loading

In favor of

> expo install expo-splash-screen

# To Refresh tokens

https://www.udemy.com/course/react-native-the-practical-guide/learn/lecture/31404572#content
