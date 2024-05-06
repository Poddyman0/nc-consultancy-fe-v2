//import { eventIDToView } from './events.js'
import {profileSignedIn} from './signInForm.js'
import {handleEventButtonClick} from './events.js'
console.log("event id in event", handleEventButtonClick ())


document.addEventListener('DOMContentLoaded', function() {
    loadEvent()

})


//add url to below.
export let eventCallendar = [];
export let updateEventButtonExport;
export let signUpToEventButtonExport;
export let event;

function loadEvent () {
    const eventDisplay = document.querySelector('.an-event-container')
    const eventLoading = document.querySelector('#event-loading')
    eventLoading.style.display = "block"
    eventLoading.innerHTML = "Loading Event..."
    getEvent () 
    function getEvent () {
        fetch(`https://nc-events-platform-be-v2-production.up.railway.app/platform/event/get/${eventIDToView}/aevent`, {
            method: 'GET',
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            eventLoading.style.display = "none"
            eventLoading.innerHTML = ""
                let eventResponse = {
                    event_id: response.eventID,
                    event_organiser: response.eventOrganiser,
                    event_name: response.eventName,
                    event_description: response.eventDescription,
                    event_start_date: response.eventStartDate,
                    event_start_time: response.eventStartTime,
                    event_end_date: response.eventEndDate,
                    event_end_time: response.eventEndTime,
                    event_building_number: response.eventBuildingNumber,
                    event_street_name: response.eventStreetName,
                    event_city: response.eventCity,
                    event_county: response.eventCounty,
                    event_country: response.eventCountry,
                    event_post_code: response.eventPostCode,
                    event_pricing: response.eventPricing,
                    event_ticket_price: response.eventTicketPrice,
                    event_ticket_amount: response.eventTicketAmount,
                    event_picture: response.eventPicture,
                    event_atendees: response.eventAtendees,
    
                }
                event = response

                    if (profileSignedIn.role = "inernal") {
                        let aEventToDisplay = document.createElement('div')
                        aEventToDisplay.className = "card"
                        aEventToDisplay.id = `an-event-card-${eventResponse.event_id}`
                        aEventToDisplay.innerHTML = `
                            <img class="card-img-top" src="${eventResponse.event_picture}" alt="Event Picture">
                            <div class="card-body">
                                <div class="card-title-icon-container">
                                    <h5 class="card-title">${eventResponse.event_name}</h5>
                                </div>
                                <p class="card-text">Organiser: ${eventResponse.event_organiser}</p>
                                <p class="card-text">Description: ${eventResponse.event_description}</p>
                                <p class="card-text">Start Date: ${eventResponse.event_start_date}</p>
                                <p class="card-text">Start Time: ${eventResponse.event_start_time}</p>
                                <p class="card-text">End Date: ${eventResponse.event_end_date}</p>
                                <p class="card-text">End Time: ${eventResponse.event_end_time}</p>
                                <p class="card-text">Location: ${eventResponse.event_building_number}, ${eventResponse.event_street_name}, ${eventResponse.event_city}, ${eventResponse.event_county}, ${eventResponse.event_country}, ${eventResponse.event_post_code}</p>
                                <p class="card-text">Pricing: ${eventResponse.event_pricing}</p>
                                <p class="card-text">Ticket Price: ${eventResponse.event_ticket_price}</p>
                                <p class="card-text">Amount Of Tickets Left: ${eventResponse.event_ticket_amount}</p>
                                <form class="card-text">
                                    <label for="add-to-cart-amount">Amount of tickets you want to purchase:</label>
                                    <input type="number" class="form-control" id="add-to-cart-amount" placeholder="Enter amount of tickets you would like to buy." required>
                                    <div class="invalid-feedback add-to-cart-amount-feedback"
                                    <button class="btn btn-primary" id="add-to-cart-button">Add To Event To Callendar And Cart</button>
                                </form>
                                <button class="btn btn-warning" id="btn-sign-up-to-event">Sign Up To Event</button>
                                <button class="btn btn-danger" id="delete-event">Delete Event</button>
                                <p id="added-to-cart-feedback"></p>
                            </div>
                        `
                        eventDisplay.innerHTML = aEventToDisplay;

                    } else if (profileSignedIn.role = "external") {
                        let aEventToDisplay = document.createElement('div')
                        aEventToDisplay.className = "card"
                        aEventToDisplay.id = `an-event-card-${eventResponse.event_id}`
                        aEventToDisplay.innerHTML = `
                            <img class="card-img-top" src="${eventResponse.event_picture}" alt="Event Picture">
                            <div class="card-body">
                                <div class="card-title-icon-container">
                                    <h5 class="card-title">${eventResponse.event_name}</h5>
                                </div>
                                <p class="card-text">Organiser: ${eventResponse.event_organiser}</p>
                                <p class="card-text">Description: ${eventResponse.event_description}</p>
                                <p class="card-text">Start Date: ${eventResponse.event_start_date}</p>
                                <p class="card-text">Start Time: ${eventResponse.event_start_time}</p>
                                <p class="card-text">End Date: ${eventResponse.event_end_date}</p>
                                <p class="card-text">End Time: ${eventResponse.event_end_time}</p>
                                <p class="card-text">Location: ${eventResponse.event_building_number}, ${eventResponse.event_street_name}, ${eventResponse.event_city}, ${eventResponse.event_county}, ${eventResponse.event_country}, ${eventResponse.event_post_code}</p>
                                <p class="card-text">Pricing: ${eventResponse.event_pricing}</p>
                                <p class="card-text">Ticket Price: ${eventResponse.event_ticket_price}</p>
                                <p class="card-text">Amount Of Tickets Left: ${eventResponse.event_ticket_amount}</p>
                                <form class="card-text">
                                    <label for="add-to-cart-amount">Amount of tickets you want to purchase:</label>
                                    <input type="number" class="form-control" id="add-to-cart-amount" placeholder="Enter amount of tickets you would like to buy." required>
                                    <div class="invalid-feedback add-to-cart-amount-feedback"
                                    <button class="btn btn-primary" id="add-to-cart-button">Add To Cart</button>
                                </form>
                                <button class="btn btn-warning" id="btn-sign-up-to-event">Sign Up To Event</button>
                                <p id="added-to-cart-feedback"></p>
                            </div>
                        `
                        eventDisplay.innerHTML = aEventToDisplay;

                    }
    
                    const ticketAmountPurchase = document.querySelector('#add-to-cart-amount')
                    const addToCartAmountFeedback = document.querySelector('.add-to-cart-amount-feedback')
                    const addedToCartFeedback = document.querySelector('#added-to-cart-feedback')
                    const updateEventButton = document.querySelector('#btn-update-event-internal')
                    updateEventButtonExport = updateEventButton
                    const signUpToEventButton = document.querySelector('#btn-sign-up-to-event')
                    signUpToEventButtonExport = signUpToEventButton
                    addedToCartFeedback.innerHTML = ""
                    document.querySelector('#add-to-cart-button').addEventListener('click', function (event) {
                        event.preventDefault()
                        if (ticketAmountPurchase.value.length === 0 || ticketAmountPurchase.value > eventResponse.event_ticket_amount) {
                            ticketAmountPurchase.className = "form-control is-invalid"
                            addToCartAmountFeedback.innerHTML = "Amount of tickets purchased field must not be empty or be greater than the amount of tickets available"
                        } else {
                            ticketAmountPurchase.className = "form-control"
                            addToCartAmountFeedback.innerHTML = ""
                            addedToCartFeedback.innerHTML = "Event successfully added to cart"
                            eventResponse.amount_in_cart = document.querySelector('#add-to-cart-amount').value

                            eventCallendar.push(eventResponse)
                        }
    
                    })

                    document.querySelector('#delete-event').addEventListener('click', function() {               
                        fetch(`https://nc-events-platform-be-v2-production.up.railway.app/platform/event/delete/${eventIDToView}`, {
                            method: 'POST',

                        })
                        .then(function(response){ 
                        })
                        .catch(function(err) {
                            console.log("Error: ", err)
                        })
                
                    })
        })
        .catch(function(err) {
            console.log("Error: ", err)
        })
    
    }
}

module.exports = { loadEvent }
