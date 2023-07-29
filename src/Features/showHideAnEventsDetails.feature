Feature: Show/hide an event’s details
 Scenario: An event element is collapsed by default
  Given the user has selected a location to search for events,  
  When the list of local events for that location loads 
  Then the event elements will collapse.

 Scenario: User can expand an event to see its details
  Given the list of events has loaded, 
  When the user clicks on show details
  Then the event element will expand to show more details about the event.

 Scenario: User can collapse an event to hide its details
  Given the user has all the information they need about an event, 
  When they click hide details 
  Then the event element will collapse and hide the event details.