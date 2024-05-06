//import {profileIDSignedIn, profileSignedIn } from 'signInForm.js'
//import {eventCallendar} from 'event.js'

document.addEventListener('DOMContentLoaded', function() {
    loadProfile()
})

function loadProfile () {

    const eventsInvitedToContainer = document.querySelector('.events-invited-to')
    const loadingEventsInvitedTo = document.querySelector('#loading-profile-invites')
    loadingEventsInvitedTo.style.display = "block"
    loadingEventsInvitedTo.innerHTML = "Loading events you're invited to..."
    updateEventsInvitedTo()
    function updateEventsInvitedTo() {
        getEvents ()
        let eventsInvitedToArray = []
        function getEvents () {
            fetch(`https://nc-events-platform-be-v2-production.up.railway.app/platform/events/get`, {
                method: 'GET',
            })
                .then(function(response) {
                    return response.json();
                })
                .then(function(response) {
                    loadingEventsInvitedTo.style.display = "none"
                    loadingEventsInvitedTo.innerHTML = ""
                        /*
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
                            event_ticket_price: event.eventTicketPrice,
                            event_pricing: event.eventPricing,
                            event_ticket_amount: event.eventTicketAmount,
                            event_picture: event.eventPicture,
                            event_atendees: event.eventAtendees,
        
                        }
                        */
                       response.forEach(event => {
                            event.eventAtendees.forEach(atendeeID => {
                                if (atendeeID ==="662b78f7227520c132110598") {
                                    //change above to profileIDSignedIn
                                    eventsInvitedToArray.push(event)
                                    let aEventToDisplay = document.createElement('div')
                                    aEventToDisplay.className = "card"
                                    aEventToDisplay.id = `an-event-card-${event._id}`
                                    aEventToDisplay.innerHTML = `
                                        <img class="card-img-top" src="${event.eventPicture}" alt="Event Picture">
                                        <div class="card-body">
                                            <div class="card-title-icon-container">
                                                <h5 class="card-title">${event.eventName}</h5>
                                            </div>
                                            <p class="card-text">Organiser: ${event.eventOrganiser}</p>
                                            <p class="card-text">Description: ${event.eventDescription}</p>
                                            <p class="card-text">Start Date: ${event.eventStartDate}</p>
                                            <p class="card-text">Start Time: ${event.eventStartDate}</p>
                                            <p class="card-text">End Date: ${event.eventEndDate}</p>
                                            <p class="card-text">End Time: ${event.eventEndTime}</p>
                                            <p class="card-text">Location: ${event.eventBuildingNumber}, ${event.eventStreetName}, ${event.eventCity}, ${event.eventCounty}, ${event.eventCountry}, ${event.eventPostCode}</p>
                                            <p class="card-text">Ticket Price: ${event.eventTicketPrice}</p>
                                            <p class="card-text">Amount Of Tickets Left: ${event.eventTicketAmount}</p>
                                            <form class="card-text">
                                                <label for="add-to-cart-amount">Amount of tickets you want to purchase:</label>
                                                <input type="number" class="form-control" id="add-to-cart-amount" placeholder="Enter amount of tickets you would like to buy." required>
                                                <div class="invalid-feedback add-to-cart-amount-feedback"></div>
                                                <button class="btn btn-primary" id="add-to-cart-button">Add To Event To Callendar And Cart</button>
                                            </form>
                                            <button class="btn btn-warning" id="btn-sign-up-to-event">Sign Up To Event</button>
                                            <button class="btn btn-danger" id="delete-event">Delete Event</button>
                                            <p id="added-to-cart-feedback"></p>
                                        </div>
                                    `
                                    eventsInvitedToContainer.appendChild(aEventToDisplay)
                                    return eventsInvitedToArray 
                                }
                            })
                       })
                    })
                    .catch(function(err) {
                        console.log("Error: ", err)
                    });
        }
    }
    const profileDisplay = document.querySelector('#profile-info-container')
    const loadingProfileInfo = document.querySelector('#loading-profile-info')

        loadingProfileInfo.style.display = "block"
        loadingProfileInfo.innerHTML = "Loading your profile information..."
    
    
getProfile ()
function getProfile () {
    let exampleUserID = '662b78f7227520c132110598'
    fetch(`https://nc-events-platform-be-v2-production.up.railway.app/platform/profile/get/${exampleUserID}/profile`, {
        method: 'GET',
    })
    .then(function(response) {
        console.log(response)
            loadingProfileInfo.style.display = "none"
            loadingProfileInfo.innerHTML = ""
            profileDisplay.innerHTML = `
            <div id="${response._Id}">
                <h1>Your Profile:</h1>
                <div><strong>First Name: </strong>${response.firstName}</div>
                <div><strong>Second Name: </strong>${response.secondName}</div>
                <div><strong>Date Of Birth: </strong>${response.dateOfBirth}</div>
                <div><strong>Phone Number: </strong>${response.phoneNumber}</div>
                <div><strong>House Number: </strong>${response.houseNumber}</div>
                <div><strong>Street Name: </strong>${response.streetName}</div>
                <div><strong>City: </strong>${response.city}</div>
                <div><strong>County: </strong>${response.county}</div>
                <div><strong>Country: </strong>${response.country}</div>
                <div><strong>Post Code: </strong>${response.postCode}</div>
                <div><strong>Email: </strong>${response.email}</div>
                <div><strong>Role: </strong>${response.role}</div>
            </div>
            `
        })
        .catch(function(err) {
            console.log("Error: ", err)
        })
}

}
/*

        const eventsInvitedToContainer = document.querySelector('#events-invited-to').innerHTML
        eventsInvitedToArray.forEach(eventResponse => {
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
            eventsInvitedToContainer.appendChild(aEventToDisplay)
            document.querySelector('#btn-sign-up-to-event').addEventListener('click', function() {
                eventCallendar.push(eventResponse)
            })
        })

    }


    document.querySelector('#cart-checkout').addEventListener('click', function() {
        updateEvent()
        const loadingProfileCart = document.querySelector('#loading-profile-cart')
        loadingProfileCart.style.display = "block"
        loadingProfileCart.innerHtml = "Updating event..."
        function updateEvent () {
            eventCallendar.forEach(event => {
                ///change below get body and include _id in the id see examples below.
                const updateEventBE = {
                    eventOrganiser: event.event_organiser,
                    eventName: event.event_name,
                    eventDescription: event.event_description,
                    eventStartDate: event.event_start_date,
                    eventStartTime: event.event_start_time,
                    eventEndDate: event.event_end_date,
                    eventEndTime: event.event_end_time,
                    eventBuildingNumber: event.event_building_number,
                    eventStreetName: event.event_street_name,
                    eventCity: event.event_city,
                    eventCounty: event_county,
                    eventCountry: event.event_country,
                    eventPostCode: event.event_post_code,
                    eventPricing: event_pricing, //
                    eventTicketPrice: event.event_ticket_price,
                    eventTicketAmount: event.event_ticket_amount - event.amount_in_cart,
                    eventPicture: event.event_picture,
                    eventAtendees: event_atendees,
                    _id: `${eventIDToView}`
                }


                updateEventBE.eventAtendees.push({
                    profileFirstName: profileSignedIn.profileFirstName,
                    profileSecondName: profileSignedIn.profileSecondName,
                    profileEmail: profileSignedIn.profileEmail,

                })
                fetch(`https://nc-events-platform-be-v2-production.up.railway.app/platform/event/put/${event.event_id}/eventupdate`, {
                    method: 'POST',
                    body: JSON.stringify(updateEventBE)
                })
                .then(function(response) {
                    loadingProfileCart.style.display = "none"
                    loadingProfileCart.innerHtml = ""
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                      }
                    return response.json();
                    eventCallendar = []

                })
                .catch(function(err) {
                    console.log("Error: ", err)
                })
            })
        }
    })
    const cartDisplay = document.querySelector('#cart-container')
    const cartTotal = 0
    document.querySelector('#cart-total').innerHTML = `${cartTotal}`
    eventCallendar.forEach(event => {
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
            <button type="button" value="${event.event_id}" id="btn-event-card-${event.event_id}-remove-from-cart" class="btn btn-primary">Remove Event</button>
            </div>
        `
        cartTotal += event.event_ticket_price * event.amount_in_cart;
        const removeFromCartBtn = document.querySelector(`#btn-event-card-${event.event_id}-remove-from-cart`)
        removeFromCartBtn.addEventListener('click', function () {
            for (let i = 0; i <= cart.length; i++) {
                if (cart[i].event_id === removeFromCartBtn.value) {
                    cart.splice(cart[i], 1)
                }
            }

            loadProfile ()
        })

        cartDisplay.appendChild(aEventToDisplay)
    })
    */
    
    /*

    document.querySelector('#delete-profile').addEventListener('click', function() {
                loadingProfileCart.style.display = "block"
        loadingProfileCart.innerHtml = "Loading deleted profile..."
        fetch(`profile/delete/${profileIDSignedIn}`, {
            method: 'POST',
        })
        .then(function(response){ 
            loadingProfileCart.style.display = "block"
            loadingProfileCart.innerHtml = ""
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch(function(err) {
            console.log("Error: ", err)
        })

    })
    document.querySelector('#sign-out-profile').addEventListener('click', function () {
        const createProfileBE = {
            profilePassword: `${profileSignedIn.profilePassword}`,
            profileTelephone: `${profileSignedIn.profileTelephone}`,
            profileEmail: `${profileSignedIn.profileEmail}`,
            profileFirstName: `${profileSignedIn.profileFirstName}`,
            profileSecondName: `${profileSignedIn.profileSecondName}`,
            profileDOB: `${profileSignedIn.profileDOB}`,
            profileRole: `${profileSignedIn.profileRole}`,
            profileCardHolderName: `${profileSignedIn.profileCardHolderName}`,
            profileBankName: `${profileSignedIn.profileBankName}`,
            profileCardNumber: `${profileSignedIn.profileCardNumber}`,
            profileExpireyDate: `${profileSignedIn.profileExpireyDate}`,
            profileCVV: `${profileSignedIn.profileCVV}`,
            profilePostCode: `${profileSignedIn.profilePostCode}`,
            profileHouseNumber: `${profileSignedIn.profileHouseNumber}`,
            profileStreet: `${profileSignedIn.profileStreet}`,
            profileCity: `${profileSignedIn.profileCity}`,
            profileCounty: `${profileSignedIn.profileCounty}`, 
            profileCountry: `${profileSignedIn.profileCountry}`,
            profileSignedIn: false,
            _id: `${profileIDSignedIn}`,
        };
        loadingProfileCart.style.display = "block"
        loadingProfileCart.innerHtml = "signing you out..."
        fetch(`https://nc-events-platform-be-v2-production.up.railway.app/platform/profile/put/${profileIDSignedIn}/signout`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(createProfileBE),
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
        loadingProfileCart.style.display = "none"
        loadingProfileCart.innerHtml = ""
          return response.text();
        })
        .then(data => {
          console.log('Success:', data);
        })
        .catch(error => {
          console.error('Error:', error);
        });

    })

    
}



*/

module.exports = {loadProfile}