document.addEventListener('DOMContentLoaded', function() {
    loadEvents()

})

/*
let eventIDToView = ""

function handleEventButtonClick(event) {
    if (event) {
        eventIDToView = `${event.target.value}`;
        console.log("has event", eventIDToView);
        window.location.href = "/event.html";
        return eventIDToView

    } if (!event) {
        console.log("no event", eventIDToView)
        return eventIDToView

    }

}
*/

//let eventsDisplay = []

//all returned events
let eventsArray = []


//individuals events
let eventCallendar = []



function loadEvents() {
    const eventDisplay = document.querySelector('.card-container')

            fetch(`https://nc-events-platform-be-v2-production.up.railway.app/platform/events/get`, {
                method: 'GET',
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                response.forEach(aEvent => {

                    eventsArray.push(aEvent)
                    let aEventToDisplay = document.createElement('div')
                    aEventToDisplay.className = "card"
                    aEventToDisplay.id = `event-card-${aEvent._id}`
                    aEventToDisplay.innerHTML = `
                        <div class="card-body">
                        <img class="card-img-top" src="${aEvent.eventPicture}" alt="Event Picture">
                            <div class="card-title-icon-container">
                                <div class="card-title event-card-title">${aEvent.eventName}</div>
                            </div>
                        <ul>
                        <li class="card-text"><strong>Description: </strong>${aEvent.eventDescription}</li>
                        <li class="card-text"><strong>Start Date: </strong>${aEvent.eventStartDate}</li>
                        <li class="card-text"><strong>Start Time: </strong>${aEvent.eventStartTime}</li>
                        <li class="card-text"><strong>End Date: </strong>${aEvent.eventEndDate}</li>
                        <li class="card-text"><strong>End Time: </strong>>${aEvent.eventEndTime}</li>
                        <li class="card-text"><strong>Location: </strong>${aEvent.eventBuildingNumber}, ${aEvent.eventStreetName}, ${aEvent.eventCity}, ${aEvent.eventCounty}, ${aEvent.eventCountry}, ${aEvent.eventPostCode}</li>
                        <li class="card-text"><strong>Pricing: </strong>${aEvent.eventPricing}</li>
                        <li class="card-text"><strong>Price: </strong>£${aEvent.eventTicketPrice}</li>
                        <li class="card-text"><strong>Tickets Left: </strong>${aEvent.eventTicketAmount}</li>
                        </ul>
                        <form class="card-text">
                                    <label for="add-to-cart-amount-${aEvent._id}"><strong>Amount of tickets you want to add to your callendar:</strong></label>
                                    <input type="number" class="form-control" id="add-to-cart-amount-${aEvent._id}" placeholder="Enter amount of tickets you would like to buy." required>
                                    <div class="invalid-feedback" id="add-to-cart-amount-feedback-${aEvent._id}"></div>
                        </form>
                        <button class="btn btn-warning card-btn" value="${aEvent}" id="add-to-cart-button-${aEvent._id}">Add To Event To Callendar And Cart</button>
                        <button class="btn btn-danger card-btn" id="delete-event">Delete Event</button>
                       
                        <button class="btn btn-primary" style="width: 100%" value="${aEvent}" id="authorize_button-${aEvent._id}" >Add Event To Google Callendar</button>
                        <a class="btn btn-primary" style="width: 100%" id="content-${aEvent._id}">Link To Event Created On Google Callendar</a>
                        
                        <ul>
                        <li id="added-to-cart-feedback"></li>
                        </ul>
                        </div>
                    `
                    eventDisplay.appendChild(aEventToDisplay) 
                    //onclick="handleAuthClick(${aEvent})"
                    // onclick="handleSignoutClick()"
                                       
                    
                    //<button class="btn btn-warning" value="${aEvent._id}" id="btn-sign-up-to-event">Sign Up To Event</button> 
                    // delete event in event.js
                    let addToCartBtn = document.querySelector(`#add-to-cart-button-${aEvent._id}`)
                    addToCartBtn.addEventListener('click', function (event) {
                        event.preventDefault 
                        //let eventObj = event.target.value;
                        //let eventObj = event.target.value;

                        console.log("aEvent", aEvent)
                        //console.log("eventOBJ", eventObj)

                        // button to view event: document.getElementById(`btn-event-card-${event._id}`).addEventListener('click', handleEventButtonClick);  
                        const ticketAmountPurchase = document.querySelector(`#add-to-cart-amount-${aEvent._id}`)
                        const addToCartAmountFeedback = document.querySelector(`#add-to-cart-amount-feedback-${aEvent._id}`)
                        const addedToCartFeedback = document.querySelector('#added-to-cart-feedback')
                        //const updateEventButton = document.querySelector('#btn-update-event-internal')
                        //updateEventButtonExport = updateEventButton
                        //const signUpToEventButton = document.querySelector('#btn-sign-up-to-event')
                        //signUpToEventButtonExport = signUpToEventButton
                        addedToCartFeedback.innerHTML = ""
                        console.log("eventOBJ", aEvent._id)
                        console.log()
                        if (ticketAmountPurchase.value.length === 0 || ticketAmountPurchase.value > aEvent.eventTicketAmount) {
                            ticketAmountPurchase.className = "form-control is-invalid"
                            addToCartAmountFeedback.innerHTML = "Amount of tickets purchased field must not be empty or be greater than the amount of tickets available"
                        } else {
                            ticketAmountPurchase.className = "form-control"
                            addToCartAmountFeedback.innerHTML = ""
                            addedToCartFeedback.innerHTML = "Event successfully added to cart"
                            eventCallendar.push(aEvent)
                            console.log("eventCallendar", eventCallendar)
                        }
                    })
                    const authorizeButton = document.querySelector(`#authorize_button-${aEvent._id}`)
                    const eventLinkButton = document.querySelector(`#content-${aEvent._id}`)
                    eventLinkButton.style.visibility = 'hidden';
                    console.log("authorise button", authorizeButton)
                    console.log("event google callendar confirmation", eventLinkButton)

                    /**
                     * Enables user interaction after all libraries are loaded.
                     */
                    //function maybeEnableButtons() {
                        if (gapiInited && gisInited) {
                            console.log("in api and gis")
                        }
                   // }

                    /**
                     *  Sign in the user upon button click.
                     */
                    authorizeButton.addEventListener('click', function(event) {
                        console.log("eventToAddCallendar", event.target.value._id)
                        tokenClient.callback = async (resp) => {
                        if (resp.error !== undefined) {
                            throw (resp);
                        }
                        eventLinkButton.style.visibility = 'visible';
                        await createEventGoogleCallendar(aEvent)
                        };

                        if (gapi.client.getToken() === null) {
                        // Prompt the user to select a Google Account and ask for consent to share their data
                        // when establishing a new session.
                        tokenClient.requestAccessToken({prompt: 'consent'});
                        } else {
                        // Skip display of account chooser and consent dialog for an existing session.
                        tokenClient.requestAccessToken({prompt: ''});
                        }
                    })
                    //function handleAuthClick(eventToAddToCallendar) {}

                    /**
                     *  Sign out the user upon button click.
                     */

                      /*
                        * Print the summary and start datetime/date of the next ten events in
                        * the authorized user's calendar. If no events are found an
                        * appropriate message is printed.
                        */
                    async function createEventGoogleCallendar (aEvent) {
                        console.log("in create event", aEvent)
                        const event = {
                            'summary': `${aEvent.eventName}`,
                            'location': `${aEvent.eventBuildingNumber}, ${aEvent.eventStreetName}, ${aEvent.eventCity}, ${aEvent.eventCounty}, ${aEvent.eventCountry}, ${aEvent.eventPostCode}`,
                            'description': 'A walk in the woods',
                            'start': {
                              'dateTime': `${aEvent.eventStartDate}`,
                              'timeZone': 'Europe/London'
                            },
                            'end': {
                              'dateTime': `${aEvent.eventEndDate}`,
                              'timeZone': 'Europe/London'
                            }
                          };
                          
                          const request = gapi.client.calendar.events.insert({
                            'calendarId': 'primary',
                            'resource': event
                          });
                          
                          request.execute(function(event) {
                            console.log("in request execute", event)
                            //appendPre('Event created: ' + event.htmlLink);
                            eventLinkButton.setAttribute('href', event.htmlLink)
                          });
                    }
            })
        })
}
/*

google code:










  






/*
            eventsDisplay = []
            eventsArray.forEach(event => {
                /*
                let aEventToDisplay = document.createElement('div')
                aEventToDisplay.className = "card"
                aEventToDisplay.id = `event-card-${event.event_id}`
                aEventToDisplay.innerHTML = `
                    <img class="card-img-top" src="${event.event_picture}" alt="Event Picture">
                    <div class="card-body">
                        <div class="card-title-icon-container">
                            <h5 class="card-title">${event.event_name}</h5>
                        </div>
                    <p class="card-text">Description: ${event.eventDescription}</p>
                    <p class="card-text">Start Date: ${event.event_start_date}</p>
                    <p class="card-text">Event City: ${event.event_city}</p>
                    <p class="card-text">Price: ${event.event_ticket_price}</p>
                    <button type="button" value="${event.event_id}" id="btn-event-card-${event.event_id}" class="btn btn-primary btn-events-info">Event Info</button>
                    </div>
                `
                document.querySelector(`#btn-event-card-${event.event_id}`).addEventListener('click', function () {
                    eventIDToView = `${event.event_id}`
                    window.location.href = "/event.html"
                    
                })
                eventDisplay.appendChild(aEventToDisplay)
            
        
            })

    document.querySelector('#events-search-submit').addEventListener('click', function (event) {
        event.preventDefault()
        eventsDisplay = []
        const searchPhrase = document.querySelector('#events-search').value
        const searchPhraseLC = searchPhrase.toLowerCase()

        eventsArray.forEach(event => {
            const eventNameLC = event.event_name.toLowerCase()
            const eventdescriptionLC = event.event_description.toLowerCase()
            const eventOrganiserLC = event.event_organiser.toLowerCase()
            const eventStreetNameLC = event.event_street_name.toLowerCase()
            const eventCityLC = event.event_city.toLowerCase()
            const eventCountyLC = event.event_county.toLowerCase()
            const eventCountryLC = event.event_country.toLowerCase()
            
            let containsPhrase = false

            if (eventNameLC.includes(searchPhraseLC) || eventdescriptionLC.includes(searchPhraseLC) || eventOrganiserLC.includes(searchPhraseLC) || eventStreetNameLC.includes(searchPhraseLC) || eventCityLC.includes(searchPhraseLC) || eventCountyLC.includes(searchPhraseLC) || eventCountryLC.includes(searchPhraseLC)) {
                containsPhrase = true 
               // eventsDisplay.push(event)
            }

            const searchPhraseWords = searchPhraseLC.split(/\s+/)

            const eventNameWords = eventNameLC.split(/\s+/)
            const eventDescriptionWords = eventdescriptionLC.split(/\s+/)
            const eventOrganiserWords = eventOrganiserLC.split(/\s+/)
            const eventStreetNameWords = eventStreetNameLC.split(/\s+/)
            const eventCityWords = eventCityLC.split(/\s+/)
            const eventCountyWords = eventCountyLC.split(/\s+/)
            const eventCountryWords = eventCountryLC.split(/\s+/)

                for (let i = 0; i <= searchPhraseWords.length; i++) {
                    // Check if the current substring matches the phrase
                    searchPhraseWords[i]
                    eventNameWords.forEach(word => {
                        if (word === searchPhraseWords[i]) {
                            containsPhrase = true 
                        }
                    })
                    eventDescriptionWords.forEach(word => {
                        if (word === searchPhraseWords[i]) {
                            containsPhrase = true 
                        }
                    })
                    eventOrganiserWords.forEach(word => {
                        if (word === searchPhraseWords[i]) {
                            containsPhrase = true 
                        }
                    })
                    eventStreetNameWords.forEach(word => {
                        if (word === searchPhraseWords[i]) {
                            containsPhrase = true 
                        }
                    })
                    eventCityWords.forEach(word => {
                        if (word === searchPhraseWords[i]) {
                            containsPhrase = true 
                        }
                    })
                    eventCountyWords.forEach(word => {
                        if (word === searchPhraseWords[i]) {
                            containsPhrase = true 
                        }
                    })
                    eventCountryWords.forEach(word => {
                        if (word === searchPhraseWords[i]) {
                            containsPhrase = true 
                        }
                    })

                }
                if (containsPhrase === true) {
                    eventsDisplay.push(event)
                }
        })
    })
    document.querySelector('#sort-by-date').addEventListener('click', function () {
        sortEventsByStartDate(eventsArray)
        function sortEventsByStartDate(eventsArray) {
            // Sort the eventsArray based on event_start_date
            const sortedEvents = eventsArray.slice().sort((a, b) => new Date(a.event_start_date) - new Date(b.event_start_date));
            
            // Create an array to store the sorted event objects
            eventsDisplay = [];
        
            // Copy over the sorted event objects into eventsDisplay array
            sortedEvents.forEach(event => {
                eventsDisplay.push({
                    event_id: event.event_id,
                    event_organiser: event.event_organiser,
                    event_name: event.event_name,
                    event_description: event.event_description,
                    event_start_date: event.event_start_date,
                    event_start_time: event.event_start_time,
                    event_end_date: event.event_end_date,
                    event_end_time: event.event_end_time,
                    event_building_number: event.event_building_number,
                    event_street_name: event.event_street_name,
                    event_city: event.event_city,
                    event_county: event.event_county,
                    event_country: event.event_country,
                    event_post_code: event.event_post_code,
                    event_pricing: event.event_pricing,
                    event_ticket_price: event.event_ticket_price,
                    event_ticket_amount: event.event_ticket_amount,
                    event_picture: event.event_picture,
                    event_atendees: event.event_atendees
                });
            });
        
            return eventsDisplay;
        }
        
    })
    document.querySelector('#sort-by-price').addEventListener('click', function () {
        sortEventsByTicketPrice (eventsArray)
        function sortEventsByTicketPrice(eventsArray) {
            // Sort the eventsArray based on event_ticket_price
            const sortedEvents = eventsArray.slice().sort((a, b) => a.event_ticket_price - b.event_ticket_price);
            
            // Create an array to store the sorted event objects
            eventsDisplay = [];
        
            // Copy over the sorted event objects into eventsDisplay array
            sortedEvents.forEach(event => {
                eventsDisplay.push({
                    event_id: event.event_id,
                    event_organiser: event.event_organiser,
                    event_name: event.event_name,
                    event_description: event.event_description,
                    event_start_date: event.event_start_date,
                    event_start_time: event.event_start_time,
                    event_end_date: event.event_end_date,
                    event_end_time: event.event_end_time,
                    event_building_number: event.event_building_number,
                    event_street_name: event.event_street_name,
                    event_city: event.event_city,
                    event_county: event.event_county,
                    event_country: event.event_country,
                    event_post_code: event.event_post_code,
                    event_ticket_price: event.event_ticket_price,
                    event_ticket_amount: event.event_ticket_amount,
                    event_picture: event.event_picture,
                    event_atendees: event.event_atendees
                });
            });
        
            return eventsDisplay;
        }
    })
    */






