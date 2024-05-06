# nc-consultancy-fe-v2

createEventForm:

It imports two variables (profileIDSignedIn and profileSignedIn) from a file named signInForm.js.
It waits for the DOM content to be fully loaded before executing the createEventForm function.
It initializes two variables: atendeeID and atendeeArray.
It checks if the signed-in user's role is "internal" or "external" and adjusts the CSS class of a container accordingly.
It defines a function named createEventForm that handles the creation of event attendees dynamically based on user interaction.
Inside createEventForm, it listens for clicks on the "Add Attendee" button. If the user's role is "internal", it prevents the default behavior of the button click, increments atendeeID, and dynamically creates input fields for attendee information.
It also listens for clicks on the "Create Event" button. If the user's role is "internal", it performs various form validations for event details such as name, description, dates, times, ticket amount, pricing, address, and image.
If all validations pass, it constructs a JavaScript object (createEventBE) with the event details and sends a POST request to a server endpoint to create the event.
Finally, it displays feedback to the user about the success or failure of the event creation process.

event:
It imports two variables (profileSignedIn and handleEventButtonClick) from two separate JavaScript files.
It listens for the DOMContentLoaded event, then calls the loadEvent function.
Inside loadEvent, it first selects elements from the DOM for displaying event information and a loading indicator.
It defines a function named getEvent, which makes a GET request to retrieve event data from a specified URL.
Upon receiving a response from the server, it parses the JSON response and populates event details into a JavaScript object (eventResponse).
Depending on the role of the signed-in user (internal or external), it dynamically creates a card element to display event details.
For internal users, it includes additional functionality such as updating and deleting events.
It adds event listeners to the "Add To Cart" button, which allows users to add the event to their cart. It also handles validation for the amount of tickets to purchase.
It adds an event listener to the "Delete Event" button, which sends a POST request to delete the event from the server.

eventUpdate:
Event Form Creation: You've dynamically created an event update form based on the user's role. This form includes various fields such as event name, description, date, time, location, pricing, ticket details, and an option to add attendees.
Input Validation: You've included some input validation logic for fields like event name, description, date, time, ticket price, and ticket amount. This ensures that users provide valid input before submitting the form.
Event Pricing: You've implemented logic to handle event pricing options (free, paid, pay as you feel). However, there's a minor typo in the assignment of pricingFeedback.innerHTML where innerHtml should be innerHTML.
Atendee Handling: You've added a button to add attendees to the event. However, there's a typo in the button ID (add-atendee-btn-update should probably be add-atendee-btn-update).
Feedback Display: You've provided feedback elements (invalid-feedback) to display validation messages to users when they enter incorrect data.
Event Submission: You've included a submit button (btn-update-event) to submit the form. However, there's a minor typo in the button class (btn-update-event should probably be btn-update-event)
