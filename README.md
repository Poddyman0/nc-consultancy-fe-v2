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
It fetches event data from a specific endpoint using fetch.
It populates various form fields with the retrieved data.
It adds event listeners to handle adding attendees and updating events.
It defines form validation logic for various fields such as event name, description, start date, end date, etc.
It defines helper functions to validate time, date, and other fields.
It handles form submission by sending updated event data to another API endpoint.

index:
It waits for the DOM content to be fully loaded before executing the eventsInsert function using the DOMContentLoaded event listener.
The eventsInsert function starts by displaying a loading message on the homepage.
It then uses the fetch API to make a GET request to retrieve event data from a specific endpoint.
Once the response is received, it parses the JSON data.
For each event in the response, it creates a new div element with the class homepage-events-card. Inside this div, it includes an image (<img>) sourced from the event's picture URL and a caption (<figcaption>) displaying the event name.
The newly created event div is appended to the homeEventsContainer, which likely represents the container on the webpage where you want to display the events.
Finally, once all events have been processed and displayed, the loading message is removed.

profile:
The loadProfile function is called when the DOM content is fully loaded. It begins by displaying loading messages for events invited to and profile information.
Inside loadProfile, there's a nested function updateEventsInvitedTo that fetches events from an API endpoint. It then iterates through the response, filtering events based on whether the user is invited (atendeeID === "662b78f7227520c132110598").
For each event the user is invited to, a new card displaying event details is dynamically created and appended to the eventsInvitedToContainer.
Similarly, the user's profile information is fetched from another endpoint and displayed dynamically in the profileDisplay container.
There are commented-out sections that seem to handle updating events in the user's calendar and cart, as well as displaying events in the cart.
There are event listeners for actions such as signing up for events, removing events from the cart, deleting the user's profile, and signing out.
Error handling is included using catch blocks after fetch requests.

profileupdate: 

This event listener waits for the DOM content to be fully loaded before calling the updateProfile() function.
This variable stores the ID of the signed-in user's profile.
Function: updateProfile()
This function retrieves user profile data from a backend API and populates the corresponding form fields with the retrieved data.
It also performs client-side validation of the form fields.
Finally, it sends updated profile data to the backend when the user submits the form.


signInForm:

document.addEventListener('DOMContentLoaded', function() {
    signInForm()
})
This event listener waits for the DOM content to be fully loaded before calling the signInForm() function.

Copy code
let profileIDSignedIn = "662b78f7227520c132110598";
let profileSignedIn = { ... };
These variables store information about the signed-in user's profile, such as their ID, password, email, etc.
Function: signInForm()
This function handles the sign-in process when the user submits the sign-in form.
It sends a GET request to a backend API to verify the user's credentials.
If the credentials are valid, it updates the profile data on the backend.

signUpForm: 
This JavaScript code manages the sign-up functionality for a user on a web page. It waits for the DOMContentLoaded event and then calls the signUpForm() function.

Event Listener:

document.addEventListener('DOMContentLoaded', function() {
    signUpForm() 
})
This event listener waits for the DOM content to be fully loaded before calling the signUpForm() function.
Function: signUpForm()
This function handles the sign-up process when the user submits the sign-up form.
It performs validation on various form fields such as passwords, emails, names, addresses, etc.
If all validation passes, it sends a POST request to a backend API to create the user's profile.