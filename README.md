# Meet App

### This serverless, progressive web application (PWA) was built with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.


## Feature 1: Filter events by city
### User Story: As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.
### Scenario 1: When user hasn't searched for a city, show upcoming events from all cities
Given user hasn’t searched for any city, when the user opens the app then the user should see a list of all upcoming events.
### Scenario 2: User should see a list of suggestions when they search for a city
Given the main page is open, when user starts typing in the city textbox
then the user should see a list of cities (suggestions) that match what they’ve typed.
### Scenario 3: User can select a city from the suggested list
Given the user was typing “Berlin” in the city textbox and the list of suggested cities is showing, when the user selects a city (e.g., “Berlin, Germany”) from the list then their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city.

## Feature 2: Show/hide an event's details
### User Story: As a user, I would like to be able to reveal and hide event details so that I can find events that are the most applicable to me. 
### Scenario 1: An event element is collapsed by default
Given the user has slected a location to search for events, when the list of local events for that location loads then the event elements will collapse.
### Scenario 2: User can expand an event to see its details
Given the list of events has loaded, when the user clicks on "show details" then the event element will expand to show more details about the event.
### Scenario 3: User can collapse an event to hide its details
Given the user has all the information they need about an event, when they click "hide details" then the event element will collapse and hide the event details.

## Feature 3: Specify number of events
### User Story: As a user, I would like to be able to specify the amount of events I want displayed so that I can see more or less events at once.
### Scenario 1: When user hasn’t specified a number, 32 is the default number
Given the user has not specified a number of events to be listed at a time, when a list of events is returned to the user then it will return 32 events at a time.
### Scenario 2: User can change the number of events they want to see
Given the user is unhappy with the amount of events being shown at a time, when they adjust the number of events shown then the list length will either increase or decrease based on user preference.

## Feature 4: Use the app while offline
### User Story: As a user, I would like to be able to access this app without internet access so that I can still have access to events I've previously viewed.
### Scenario 1: Show cached data when there’s no internet connection
Given there is no internet connection, when the user tries to access details of a previously viewed event in their area then cached data will appear.
### Scenario 2: Show error when user changes the settings (city, time range)
Given there is no interent connection, when the user tries to make changes in their settings then they will receive an error message.

## Feature 5: Data visualization
### User Story: As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.
### Scenario 1: Show a chart with the number of upcoming events in each city
Given a specific city has not selected to search for events, when the user wants to browse events in multiple locations then a chart with upcoming events by city will appear.

## How I plan to use serverless functions:

### I'll use serverless functions to authenticate and authorize users with an access key before allowing them access to features of the app. I will also use these functions to filter search for cities, hide and show details pertaining to events of interest, show a particular number of events at a time, and to fetch date from the Google Calendar API. In addition, I will use them to show cached data and error messages as appropriate depending upon a user's use of the app while offline.

## Author
Jamie Tracy
