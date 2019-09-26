## Reastaurant App

## Description
This is **restaurant finde**r app. This app is able to find all restaurants within **1 km** from your current location. When running the application browser will ask to give allow your location permit  if there is no location permit then you will see all the restaurants location on google map with restaurant icon. A sidebar will be opened and will be shown  your current location and total numbers of restaurants. To see details information of a restaurant in sidebar, you can click a restaurant icon on the map or search in sidebar. You will see more important information with routing view on map from source to distance.


## How to run this project locally
To run this project locally you have to follow below’s step.
> **Step 1.**  At first clone this project from GitHub repository.
> **Step 2.** Next need to install all project dependencies from package.json file so run this command in your project directory `yarn install` or `npm install`
>  **Step 3.**  Next to run this project type command `npm run start` or `yarn run start` it will take default 3000 port in your machine but if you want to change port to run project then type command `npm run start -- --port=<PORT_NUMBER>` such as `npm run start -- --port=3030`
>  **Step 4.** Finally keep local url in your browser tab, hit url then enjoy


## How to build for production
To build this project for production you have to type command `npm run build` or `yarn run build`. After successfully build you will see a build folder in your project directory with necessary files for production use.


## Reasoning behind my technical choices, including architectural
I have used Javascript language and Reactjs library for frontend and Foursquare to get real api data.

I chose [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate)  for quick scaffolding. It supports to create components, containers, routes, selectors and sagas, i18n internationalization right from the CLI. 

I have used some google services such as palaces and direction services. I don’t use any ui library i think that it doesn't need for this project. 

For security reasons I have used different  configuration files for production and development.

At last,  I think some more information could have made this project better such as if user can select distance from his/her current location. If foursquare api would give a clean image url for each restaurant for showing. 



