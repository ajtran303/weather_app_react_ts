# Weather App React TS

A weather app built with React and Typescript with the Vite build tool.

## Try the demo online

[Skip straight to the fun part without setting anything up!](https://weather-app-edkw.onrender.com/)

## Prerequisites

You must have `node` installed.

### Get OpenWeatherMap API key

- [Sign up for an OpenWeatherMap account](https://home.openweathermap.org/users/sign_up).
- You will receive an email with your API Key in it. For more information, read the [API Key Documentation](https://openweathermap.org/appid).

## Local Setup

Fork and clone this repo, `cd` into it and run `npm install`. 

### Use your API key
- In this project's root directory, create a file named `.env`
- In the `.env` file, write the following key-value pair:

```
# .env

VITE_OPEN_WEATHER_API_KEY=your_api_key_here
```

- Make sure to save this file before moving on!

***Note:*** This filename is added to `.gitignore` to protect your API key from being shared through version control (git).

### Start the server

Use the `npm run dev` command to start serving the app on [localhost:5173](http://localhost:5173/).

***Hint:*** After running this command, while still focused in the terminal, press the `o` letter key to open the project in the browser. 

## Using the Weather App

- Enter a location into the text field and then press the Enter key or click the Search button to submit your location.
- If the location is a valid city, you will get weather results: the name of the city, a weather icon, a description, the current temperature, what it feels like, and the wind speed.
- Results are not guaranteed to be accurate for a given location- in the cases of cities with the same name, the more "popular" location seems to be the returned result (eg. Denver, Colorado instead of Denver, Idaho or Paris, France (aka Palais-Royal) instead of Paris, Texas).
- When given a location that cannot be found, you will be prompted to try again.

## Project requirements checklist

- *Completed:* Create a React project that uses three components
  - [The Header is a component](./src/Header.tsx`)
  - [The Form is a component](./src/Form.tsx)
  - [The Result is a component](./src/Result.tsx)
  - [Separate the code for the API call into its own file](./lib/fetch-weather-data.tsx)
- *Completed:* Use TypeScript and React functional components with hooks
- *Completed:* Display a city’s current weather by using the [Open Weather API](https://openweathermap.org/api)
- *Completed:* Use Flexbox to achieve the [provided] layout
