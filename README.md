# Meet App
<br>

## Screenshots
<br>

<img src="https://github.com/jlt717/meet/assets/128320420/35fc815f-b503-4622-bf96-f440941a46ae" padding-right="25px" width="450">
    
   
 <img src="https://github.com/jlt717/meet/assets/128320420/4b529023-004f-48b4-bb6e-3e9216c66a0c" margin-left="25px" width="450">
<br>

## About
### This serverless, progressive web application (PWA) was built with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.
<br>

## Features & User Stories
### Feature 1: Filter events by city
#### User Story: As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.
##### Scenario 1: When user hasn't searched for a city, show upcoming events from all cities
Given user hasn’t searched for any city, when the user opens the app then the user should see a list of all upcoming events.
##### Scenario 2: User should see a list of suggestions when they search for a city
Given the main page is open, when the user starts typing in the city textbox
then the user should see a list of cities (suggestions) that match what they’ve typed.
##### Scenario 3: User can select a city from the suggested list
Given the user was typing “Berlin” in the city textbox and the list of suggested cities is showing, when the user selects a city (e.g., “Berlin, Germany”) from the list then their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city.

### Feature 2: Show/hide an event's details
#### User Story: As a user, I would like to be able to reveal and hide event details so that I can find events that are the most applicable to me. 
##### Scenario 1: An event element is collapsed by default
Given the user has selected a location to search for events, when the list of local events for that location loads then the event elements will collapse.
##### Scenario 2: User can expand an event to see its details
Given the list of events is displayed, when the user clicks on show details then the event details will be displayed.
##### Scenario 3: User can collapse an event to hide its details
Given the user has all the information they need about an event, when the user clicks hide details then the event details will be hidden.

### Feature 3: Specify number of events
#### User Story: As a user, I would like to be able to specify the amount of events I want displayed so that I can see more or less events at once.
##### Scenario 1: When user hasn’t specified a number, 32 is the default number
Given the user has not specified a number of events to be listed at a time, when the user views the event list then it will display 32 events at a time.
##### Scenario 2: User can change the number of events they want to see
Given the user wants to change the number of events shown at a time, when they enter a new number in the input field then the event list will update to display the specified number of events.

### Feature 4: Use the app while offline
#### User Story: As a user, I would like to be able to access this app without internet access so that I can still have access to events I've previously viewed.
##### Scenario 1: Show cached data when there’s no internet connection
Given there is no internet connection, when the user tries to access details of a previously viewed event in their area then cached data will appear.
##### Scenario 2: Show error when user changes the settings (city, time range)
Given there is no internet connection, when the user tries to make changes in their settings then they will receive an error message.

### Feature 5: Data visualization
#### User Story: As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.
##### Scenario 1: Show a chart with the number of upcoming events in each city
Given a specific city has not been selected to search for events, when the user wants to browse events in multiple locations then a chart with upcoming events by city will appear.
<br>

## Technologies
### ● React
### ● React Bootstrap
### ● React Testing Library
### ● Jest
### ● Puppeteer
### ● AWS
<br>

## Dependencies
```
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^14.4.3",
    "atatus-spa": "^4.5.0",
    "nprogress": "^0.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "recharts": "^2.7.3",
    "web-vitals": "^2.1.4",
    "workbox-background-sync": "^6.6.0",
    "workbox-broadcast-update": "^6.6.0",
    "workbox-cacheable-response": "^6.6.0",
    "workbox-core": "^6.6.0",
    "workbox-expiration": "^6.6.0",
    "workbox-google-analytics": "^6.6.0",
    "workbox-navigation-preload": "^6.6.0",
    "workbox-precaching": "^6.6.0",
    "workbox-range-requests": "^6.6.0",
    "workbox-routing": "^6.6.0",
    "workbox-strategies": "^6.6.0",
    "workbox-streams": "^6.6.0"
```
<br>

## Live Site
[Meet](https://jlt717.github.io/meet/)
<br>

## Author
Jamie Tracy
