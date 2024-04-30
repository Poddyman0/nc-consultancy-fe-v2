document.addEventListener('DOMContentLoaded', function() {
    loadEvents()

})

export let eventIDToView  = "";

let eventsDisplay = []

let eventsArray = []

function loadEvents () {
    const eventDisplay = document.querySelector('.card-container')

    getEvents ()
    function getEvents () {
        fetch(`https://nc-events-platform-be-v2-production.up.railway.app/platform/events/get`, {
            method: 'GET',
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                response.forEach(event => {
                    let eventsResponse = {
                        event_id: event.eventID,
                        event_organiser: event.eventOrganiser,
                        event_name: event.eventName,
                        event_description: event.eventDescription,
                        event_start_date: event.eventStartDate,
                        event_start_time: event.eventStartTime,
                        event_end_date: event.eventEndDate,
                        event_end_time: event.eventEndTime,
                        event_building_number: event.eventBuildingNumber,
                        event_street_name: event.eventStreetName,
                        event_city: event.eventCity,
                        event_county: event.eventCounty,
                        event_country: event.eventCountry,
                        event_post_code: event.eventPostCode,
                        event_pricing: event.eventPricing,
                        event_ticket_price: event.eventTicketPrice,
                        event_ticket_amount: event.eventTicketAmount,
                        event_picture: event.eventPicture,
                        event_atendees: event.eventAtendees,
    
                    }
                    eventsArray.push(eventsResponse)
                });
            })
            .catch(function(err) {
                console.log("Error: ", err)
            })
    }




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
    eventsDisplay = []
    eventsArray.forEach(event => {
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
}




