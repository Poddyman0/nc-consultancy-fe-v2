import { eventIDToView } from './events.js'
import {profileIDSignedIn, profileSignedIn } from 'signInForm.js'
import {updateEventButtonExport, signUpToEventButtonExport} from 'event.js'

document.addEventListener('DOMContentLoaded', function() {
    createEventForm(atendeeID, atendeeArray)
})

let atendeeID = 0

let atendeeArray = []


function createEventForm(atendeeID, atendeeArray) {
 if (profileSignedIn.role === "internal") {
    const updateEventForm = document.querySelector('#middle-container-update-event')
    updateEventForm.innerHTML = `
    <div class="form-group">
    <label for="update-event-organiser">Event Organiser:</label>
    <input type="text" class="form-control" id="update-event-organiser" placeholder="Enter event name" required>
    <div class="invalid-feedback update-event-organiser-feedback">
    </div>
  </div>
<div class="form-group">
    <label for="update-event-name">Event Name:</label>
    <input type="text" class="form-control" id="update-event-name" placeholder="Enter event name" required>
    <div class="invalid-feedback update-event-name-feedback">
    </div>
  </div>
  <div class="form-group">
    <label for="update-event-description">Event Description:</label>
    <input type="text" class="form-control" id="update-event-description" placeholder="Enter event description" required>
    <div class="invalid-feedback update-event-description-feedback">
    </div>
  </div>
  <div class="form-group">
    <label for="update-event-start-date">Event Start Date:</label>
    <input type="date" class="form-control" id="update-event-start-date" placeholder="Enter event start date" required>
    <div class="invalid-feedback update-event-start-date-feedback">
    </div>
  </div>
  <div class="form-group">
    <label for="update-event-start-time">Event Start Time:</label>
    <input type="time" class="form-control" id="update-event-start-time" placeholder="Enter event start date" required>
    <div class="invalid-feedback update-event-start-time-feedback">
    </div>
  </div>
  <div class="form-group">
    <label for="update-event-end-date">Event End Date:</label>
    <input type="date" class="form-control" id="update-event-end-date" placeholder="Enter event end date" required>
    <div class="invalid-feedback update-event-end-date-feedback">
    </div>
  </div>
  <div class="form-group">
    <label for="update-event-end-time">Event End Time:</label>
    <input type="time" class="form-control" id="update-event-end-time" placeholder="Enter event end date" required>
    <div class="invalid-feedback update-event-end-time-feedback">
    </div>
  </div>
  <p>Event Location:</p>
  <div class="form-group">
    <label for="update-event-address-number">Building Number:</label>
    <input type="text" class="form-control" id="update-event-address-number" placeholder="Enter your house number" required>
    <div class="invalid-feedback update-event-address-number-feedback">
    </div>
  </div>
  <div class="form-group">
    <label for="update-event-street">Street Name:</label>
    <input type="text" class="form-control" id="update-event-street" placeholder="Enter your street name" required>
    <div class="invalid-feedback update-event-street-feedback">
    </div>
  </div>
  <div class="form-group">
    <label for="update-event-city">City:</label>
    <input type="text" class="form-control" id="update-event-city" placeholder="Enter your city" required>
    <div class="invalid-feedback update-event-city-feedback">
    </div>
  </div>
  <div class="form-group">
    <label for="update-event-county">County:</label>
    <input type="text" class="form-control" id="update-event-county" placeholder="Enter your county" required>
    <div class="invalid-feedback update-event-county-feedback">
    </div>
  </div>
  <div class="form-group">
    <label for="update-event-country">Country:</label>
    <input type="text" class="form-control" id="update-event-country" placeholder="Enter your country" required>
    <div class="invalid-feedback update-event-country-feedback">
    </div>
  </div>
  <div class="form-group">
    <label for="update-event-post-code">Post Code:</label>
    <input type="text" class="form-control" id="update-event-post-code" placeholder="Enter your post code" required>
    <div class="invalid-feedback update-event-post-code-feedback">
    </div>
  </div>
  <fieldset class="form-group radio-inline-container" id="radio-inline-container-id">
                <div class="custom-control custom-radio-inline">
                    <input class="custom-control-input" type="radio" name="pricingRadio" id="pricing-free-update" value="free">
                    <label class="custom-control-label" for="pricing-free-update">
                    Free
                    </label>
                </div>
                <div class="custom-control custom-radio-inline">
                    <input class="custom-control-input" type="radio" name="pricingRadio" id="pricing-paid-update" value="paid">
                    <label class="custom-control-label" for="pricing-paid-update">
                    Paid
                    </label>
                </div>
                <div class="custom-control custom-radio-inline">
                  <input class="custom-control-input" type="radio" name="pricingRadio" id="pricing-pay-as-you-feel-update" value="pay-as-you-feel">
                  <label class="custom-control-label" for="pricing-pay-as-you-feel-update">
                  Pay As You Feel
                  </label>
              </div>
            </fieldset>
            <div class="create-event-pricing-feedback-update">
            </div>

  <div class="form-group">
    <label for="update-event-ticket-price">Price Of Event Ticket:</label>
    <input type="number" class="form-control" id="update-event-ticket-price" placeholder="Enter price of event tickets" step="0.01" required>
    <div class="invalid-feedback update-event-ticket-price-feedback">
    </div>
  </div>
  <div class="form-group">
    <label for="update-event-ticket-amount">Amount Of Event Tickets:</label>
    <input type="number" class="form-control" id="update-event-ticket-amount" placeholder="Enter amount of event tickets." required>
    <div class="invalid-feedback update-event-ticket-amount-feedback">
    </div>
  </div>
  <div class="form-group">
    <label for="update-event-image">Event Picture:</label>
    <input type="file" class="form-control" id="update-event-image" accept="image/*" required>
    <div class="invalid-feedback update-event-image-feedback">
    </div>
  </div>
  <label for="update-event-atendees-container">Atendees: </label>
  <br>
  <button id="add-atendee-btn-update" name="add-atendee-btn-update" class="btn btn-primary">Add Antendee</button>
  <br>
  <div id="update-event-atendees-container">
  </div>
  <br>
  <div id="updated-event-feedback">
  </div>
  <br>
  <button id="submit" name="submit" type="submit" class="btn btn-primary btn-update-event">update Event</button>
  <br>
    `
    const eventOrganiser = document.querySelector('#update-event-organiser')
    const eventOrganiserFeedback = document.querySelector('.update-event-organiser-feedback')
    const eventName = document.querySelector('#update-event-name')
    const eventNameFeedback = document.querySelector('.update-event-name-feedback')
    const eventDescription = document.querySelector('#update-event-description')
    const eventDescriptionFeedback = document.querySelector('.update-event-description-feedback')
    const eventStartDate = document.querySelector('#update-event-start-date')
    const eventStartDateFeedback = document.querySelector('.update-event-start-date-feedback')
    const eventStartTime = document.querySelector('#update-event-start-time')
    const eventStartTimeFeedback = document.querySelector('.update-event-start-time-feedback')
    const eventEndDate = document.querySelector('#update-event-end-date')
    const eventEndDateFeedback = document.querySelector('.update-event-end-date-feedback')
    const eventEndTime = document.querySelector('#update-event-end-time')
    const eventEndTimeFeedback = document.querySelector('.update-event-end-time-feedback')
    const eventTicketPriceFeedback = document.querySelector('.update-event-ticket-price-feedback')
    const eventTicketAmount= document.querySelector('#update-event-ticket-amount')
    const eventTicketAmountFeedback = document.querySelector('.update-event-ticket-amount-feedback')
    const createdEventFeedback = document.querySelector('#updated-event-feedback')
    const postCode = document.querySelector('#update-event-post-code')
    const postCodeFeedback = document.querySelector('.update-event-post-code-feedback')
    const houseNumber = document.querySelector('#update-event-address-number')
    const houseNumberFeedback = document.querySelector('.update-event-address-number-feedback')
    const street = document.querySelector('#update-event-street')
    const streetFeedback = document.querySelector('.update-event-street-feedback')
    const city = document.querySelector('#update-event-city')
    const cityFeedback = document.querySelector('.update-event-city-feedback')
    const county = document.querySelector('#update-event-county')
    const countyFeedback = document.querySelector('.update-event-county-feedback')
    const country = document.querySelector('#update-event-country')
    const countryFeedback = document.querySelector('.update-event-country-feedback')
    const eventTicketPrice = document.querySelector('#update-event-ticket-price')
    const eventImage = document.querySelector('#update-event-image')
    const eventImageFeedback = document.querySelector('.update-event-image-feedback')
    
    const pricingFree = document.querySelector('#pricing-free-update')
    const pricingPaid = document.querySelector('#pricing-paid-update')
    const pricingPAYF = document.querySelector('#pricing-pay-as-you-feel-update')
    const pricingFeedback = document.querySelector('#create-event-pricing-feedback-update')
    let pricing = "";

    if (!pricingFree.checked && !pricingPaid.checked && !pricingPAYF.checked) {
        pricingFeedback.innerHtml = "Pricing must be either free, paid or pay as you feel."
        
    } else if (pricingFree.checked && pricingPaid.checked && pricingPAYF.checked) {
        pricingFeedback.innerHtml = "Pricing must be either free, paid or pay as you feel."

    } else if (pricingFree.checked) {
        pricing = "free"
        pricingFeedback.innerHtml = ""
    } else if (pricingPaid.checked) {
        pricing = "paid"
        pricingFeedback.innerHtml = ""
    } else if (pricingPAYF.checked) {
        pricing = "pay as you feel"
        pricingFeedback.innerHTML = ""
    }

    let createEventAtendeeContainer = document.getElementById('update-event-atendees-container')

    autoFillEventForm ()
    function autoFillEventForm () {
        fetch(`https://nc-events-platform-be-v2-production.up.railway.app/platform/event/get/${eventIDToView}/eventupdate`, {
            method: 'GET',
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            eventOrganiser.value = response.eventOrganiser,
            eventName.value = response.eventName,
            eventDescription.value = response.eventDescription,
            eventStartDate.value = response.eventStartDate,
            eventStartTime.value = response.eventStartTime,
            eventEndDate.value = response.eventEndDate,
            eventEndTime.value = response.eventEndTime,
            eventTicketAmount.value = response.eventTicketAmount,
            eventTicketPrice.value = response.eventTicketPrice,
            postCode.value = response.eventPostCode,
            houseNumber.value = response.eventBuildingNumber,
            street.value = response.eventStreetName,
            city.value = response.eventCity,
            county.value = response.eventCounty,
            country.value = response.eventCountry,
            eventImage.src = response.eventPicture,
            atendeeArray = response.eventAtendees,
            atendeeID += response.eventAtendees.length,
            isFreeOrPaidOrPAYF ()
            function isFreeOrPaidOrPAYF () {
                if (response.eventPricing === "paid") {
                    pricingFree.checked = false
                    pricingPaid.checked = true
                    pricingPAYF.checked = false
    
                } else if (response.profileRole === "free") {
                    pricingFree.checked = true
                    pricingPaid.checked = false
                    pricingPAYF.checked = false
                } else if (response.profileRole === "pay as you feel") {
                    pricingFree.checked = false
                    pricingPaid.checked = false
                    pricingPAYF.checked = true
                }
            }

            atendeeArray.forEach(atendee => {
                atendeeID += 1
                let createAtendee = document.createElement('div')
                createAtendee.innerHTML = `
            <div class="form-group">
                <label for="update-event-atendee-first-name-${atendeeID}">Atendee First Name: </label>
                <input type="text" class="form-control" id="update-event-atendee-first-name-${atendeeID}" placeholder="${atendee.firstName}" required>
                <div class="invalid-feedback update-event-first-name-${atendeeID}-feedback">
                </div>
            </div>
            <div class="form-group">
                <label for="update-event-atendee-second-name-${atendeeID}">Atendee Second Name:</label>
                <input type="text" class="form-control" id="update-event-atendee-second-name-${atendeeID}" placeholder="${atendee.secondName}" required>
                <div class="invalid-feedback update-event-atendee-second-name-${atendeeID}-feedback">
                </div>
            </div>
            <div class="form-group">
                <label for="update-event-atendee-e-mail-${atendeeID}">Email:</label>
                <input type="text" class="form-control" id="update-event-atendee-e-mail-${atendeeID}" placeholder="${atendee.emailAdresss}" required>
                <div class="invalid-feedback update-event-atendee-email-${atendeeID}-feedback">
                </div>
            </div>
    
          `
            createEventAtendeeContainer.appendChild(createAtendee)

            })

            
        })
        .catch(function(err) {
            console.log("Error: ", err)
        })
    }
    document.querySelector('#add-atendee-btn-update').addEventListener('click', function(event) {
        event.preventDefault()

        atendeeID += 1

        let createAtendee = document.createElement('div')
        createAtendee.innerHTML = `
        <div class="form-group">
            <label for="update-event-atendee-first-name-${atendeeID}">Atendee First Name:</label>
            <input type="text" class="form-control" id="update-event-atendee-first-name-${atendeeID}" placeholder="Enter atendee first name" required>
            <div class="invalid-feedback update-event-first-name-${atendeeID}-feedback">
            </div>
        </div>
        <div class="form-group">
            <label for="update-event-atendee-second-name-${atendeeID}">Atendee Second Name:</label>
            <input type="text" class="form-control" id="update-event-atendee-second-name-${atendeeID}" placeholder="Enter second name" required>
            <div class="invalid-feedback update-event-atendee-second-name-${atendeeID}-feedback">
            </div>
        </div>
        <div class="form-group">
            <label for="update-event-atendee-e-mail-${atendeeID}">Email:</label>
            <input type="text" class="form-control" id="update-event-atendee-e-mail-${atendeeID}" placeholder="Enter email" required>
            <div class="invalid-feedback update-event-atendee-email-${atendeeID}-feedback">
            </div>
        </div>

      `
        createEventAtendeeContainer.appendChild(createAtendee)


    })

    updateEventButtonExport.addEventListener('click', function(event) {
        

        event.preventDefault()


        //to create form validation for
        const eventOrganiser = document.querySelector('#update-event-organiser')
        const eventOrganiserFeedback = document.querySelector('.update-event-organiser-feedback')
        const eventName = document.querySelector('#update-event-name')
        const eventNameFeedback = document.querySelector('.update-event-name-feedback')
        const eventDescription = document.querySelector('#update-event-description')
        const eventDescriptionFeedback = document.querySelector('.update-event-description-feedback')
        const eventStartDate = document.querySelector('#update-event-start-date')
        const eventStartDateFeedback = document.querySelector('.update-event-start-date-feedback')
        const eventStartTime = document.querySelector('#update-event-start-time')
        const eventStartTimeFeedback = document.querySelector('.update-event-start-time-feedback')
        const eventEndDate = document.querySelector('#update-event-end-date')
        const eventEndDateFeedback = document.querySelector('.update-event-end-date-feedback')
        const eventEndTime = document.querySelector('#update-event-end-time')
        const eventEndTimeFeedback = document.querySelector('.update-event-end-time-feedback')
        const eventTicketPriceFeedback = document.querySelector('.update-event-ticket-price-feedback')
        const eventTicketAmount= document.querySelector('#update-event-ticket-amount')
        const eventTicketAmountFeedback = document.querySelector('.update-event-ticket-amount-feedback')
        const createdEventFeedback = document.querySelector('#updated-event-feedback')
        const postCode = document.querySelector('#update-event-post-code')
        const postCodeFeedback = document.querySelector('.update-event-post-code-feedback')
        const houseNumber = document.querySelector('#update-event-address-number')
        const houseNumberFeedback = document.querySelector('.update-event-address-number-feedback')
        const street = document.querySelector('#update-event-street')
        const streetFeedback = document.querySelector('.update-event-street-feedback')
        const city = document.querySelector('#update-event-city')
        const cityFeedback = document.querySelector('.update-event-city-feedback')
        const county = document.querySelector('#update-event-county')
        const countyFeedback = document.querySelector('.update-event-county-feedback')
        const country = document.querySelector('#update-event-country')
        const countryFeedback = document.querySelector('.update-event-country-feedback')
        const eventTicketPrice = document.querySelector('#update-event-ticket-price')
        const eventImage = document.querySelector('#update-event-image')
        const eventImageFeedback = document.querySelector('.update-event-image-feedback')
        
        const pricingFree = document.querySelector('#pricing-free-update')
        const pricingPaid = document.querySelector('#pricing-paid-update')
        const pricingPAYF = document.querySelector('#pricing-pay-as-you-feel-update')
        const pricingFeedback = document.querySelector('#create-event-pricing-feedback-update')
        let pricing = "";
    
        if (!pricingFree.checked && !pricingPaid.checked && !pricingPAYF.checked) {
            pricingFeedback.innerHtml = "Pricing must be either free, paid or pay as you feel."
            
        } else if (pricingFree.checked && pricingPaid.checked && pricingPAYF.checked) {
            pricingFeedback.innerHtml = "Pricing must be either free, paid or pay as you feel."
    
        } else if (pricingFree.checked) {
            pricing = "free"
            pricingFeedback.innerHtml = ""
        } else if (pricingPaid.checked) {
            pricing = "paid"
            pricingFeedback.innerHtml = ""
        } else if (pricingPAYF.checked) {
            pricing = "pay as you feel"
            pricingFeedback.innerHTML = ""
        }
        
        let hasImage = false
        if (eventImage.value.length !== 0) {
            eventImage.className  = "form-control"
            eventImageFeedback.innerHTML = ""
            hasImage = true
        } else if (eventImage.value.length === 0) {
            eventImage.className  = "form-control is-invalid"
            eventImageFeedback.innerHTML = "Event image field must not be empty"
            hasImage = false
        }

        

        for (let i = 1; i <= atendeeID; i++) {
            const currentAtendeeFirstName = document.querySelector(`#update-event-atendee-first-name-${i}`)
            const currentAtendeeFirstNameFeedback = document.querySelector(`.update-event-first-name-${i}-feedback`)
            const currentAtendeeSecondName = document.querySelector(`#update-event-atendee-second-name-${i}`)
            const currentAtendeeSecondNameFeedback = document.querySelector(`.update-event-atendee-second-name-${i}-feedback`)
            const currentAtendeeEmail = document.querySelector(`#update-event-atendee-e-mail-${i}`)
            const currentAtendeeEmailFeedback = document.querySelector(`.update-event-atendee-email-${i}-feedback`)
            
            const nameRegex = /^[A-Za-z\s\-']+$/;
            const hasFirstName = nameRegex.test(currentAtendeeFirstName.value);
            const hasSecondName = nameRegex.test(currentAtendeeSecondName.value);
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const hasEmail = emailRegex.test(currentAtendeeEmail.value)

            if (hasFirstName) {
                currentAtendeeFirstName.className = "form-control"
                currentAtendeeFirstNameFeedback.innerHTML = ""
            } else if (!hasFirstName) {
                currentAtendeeFirstName.className = "form-control is-invalid"
                currentAtendeeFirstNameFeedback.innerHTML = "First name must contain letters, can contain '-' or ''' and must not contain numbers"
            }
            if (hasSecondName) {
                currentAtendeeSecondName.className = "form-control"
                currentAtendeeSecondNameFeedback.innerHTML = ""
            } else if (!hasSecondName) {
                currentAtendeeSecondName.className = "form-control is-invalid"
                currentAtendeeSecondNameFeedback.innerHTML = "Second name must contain letters, can contain '-' or ''' and must not contain numbers"
            }
            if (hasEmail) {
                currentAtendeeEmail.className = "form-control"
                currentAtendeeEmailFeedback.innerHTML = ""
    
            } else if (!hasEmail) {
                currentAtendeeEmail.className = "form-control is-invalid"
                currentAtendeeEmailFeedback.innerHTML = "Email address must consist of one or more characters before and after the '@' symbol, separated by a '.'"
            }

            if (hasFirstName && hasSecondName) {
                atendeeArray.push({
                    firstName: currentAtendeeFirstName.value,
                    secondName: currentAtendeeSecondName.value,
                    emailAdresss: currentAtendeeEmail.value,
    
                })
                atendeeArray = [];
            }

            console.log(atendeeArray)

        }

        let hasEventOrganiser

        if (eventOrganiser.value.length !== 0) {
            eventOrganiser.className = "form-control"
            eventOrganiserFeedback.innerHTML = ""
            hasEventOrganiser = true

        } else {
            eventOrganiser.className = "form-control is-invalid"
            eventOrganiserFeedback.innerHTML = "Event organiser field must not be empty."
            hasEventOrganiser = false

        }

        let hasEventName

        if (eventName.value.length !== 0) {
            eventName.className = "form-control"
            eventNameFeedback.innerHTML = ""
            hasEventName = true

        } else {
            eventName.className = "form-control is-invalid"
            eventNameFeedback.innerHTML = "Event name field must not be empty."
            hasEventName = false
        }

        let hasEventDescription

        if (eventDescription.value.length !== 0) {
            eventDescription.className = "form-control"
            eventDescriptionFeedback.innerHTML = ""
            hasEventDescription = true

        } else {
            eventDescription.className = "form-control is-invalid"
            eventDescriptionFeedback.innerHTML = "Event description field must not be empty."
            hasEventDescription = false

        }

        let hasEventTicketAmount

        if (eventTicketAmount.value.length !== 0) {
            eventTicketAmount.className = "form-control"
            eventTicketAmountFeedback.innerHTML = ""
            hasEventTicketAmount = true
        } else if (eventTicketAmount.value.length === 0) {
            eventTicketAmount.className = "form-control is-invalid"
            eventTicketAmountFeedback.innerHTML = "Amount must be a number greater than 0"
            hasEventTicketAmount = false
        }

        let hasEventTicketPrice

        if (eventTicketPrice.value.length !== 0) {
            eventTicketPrice.className = "form-control"
            eventTicketPriceFeedback.innerHTML = ""
            let priceDecimal = parseFloat(eventTicketPrice.value)
            let formattedPriceDecimal = priceDecimal.toFixed(2)
            eventTicketPrice.value = formattedPriceDecimal
            hasEventTicketPrice = true
        } else if (eventTicketPrice.value.length === 0) {
            eventTicketPrice.className = "form-control is-invalid"
            eventTicketPriceFeedback.innerHTML = "Price field must not be empty and must be in Pounds.Pence format for example 1.34"
            hasEventTicketPrice = false
        }



       const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
       const hasEventStartTime = timeRegex.test(eventStartTime.value)
       const hasEventEndTime = timeRegex.test(eventStartTime.value)
       
       
       if (hasEventStartTime) {
            eventStartTime.className = "form-control"
            eventStartTimeFeedback.innerHTML = ""

       } else if (!hasEventStartTime) {
            eventStartTime.className = "form-control is-invalid"
            eventStartTimeFeedback.innerHTML = "Event start time must be s string, hours must be in range of 00 to 23, minutes must be in range 00 to 59, hours and minutes must be separated by a ':'"
       }
       if (hasEventEndTime) {
            eventEndTime.className = "form-control"
            eventEndTimeFeedback.innerHTML = ""
       } else if (!hasEventEndTime) {
            eventEndTime.className = "form-control is-invalid"
            eventEndTimeFeedback.innerHTML = "Event end time must be s string, hours must be in range of 00 to 23, minutes must be in range 00 to 59, hours and minutes must be separated by a ':'"

       }

           
       function isValidDate(dateString) {
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(dateString)) {
            return false; 
        }
    
        const dateParts = dateString.split('-');
        const year = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]);
        const day = parseInt(dateParts[2]);
        const dateObject = new Date(year, month - 1, day);
        if (isNaN(dateObject.getTime())) {
            return false; 
        }
        return true;
    }

    const hasStartDate = isValidDate(eventStartDate.value)
    if (hasStartDate) {
        eventStartDate.className = "form-control"
        eventStartDateFeedback.innerHTML = ""

    } else if (!hasStartDate) {
        eventStartDate.className = "form-control is-invalid"
        eventStartDateFeedback.innerHTML = "Event Start must by in YYY-MM-DD format."
    }
    const hasEndDate = isValidDate(eventStartDate.value)
    if (hasEndDate) {
        eventEndDate.className = "form-control"
        eventEndDateFeedback.innerHTML = ""

    } else if (!hasEndDate) {
        eventEndDate.className = "form-control is-invalid"
        eventEndDateFeedback.innerHTML = "Event End must by in YYY-MM-DD format."
    }
        

       function isStartTimeBeforeEndTime(startTime, endTime) {
            const startParts = startTime.split(":");
            const endParts = endTime.split(":");
        
            const startHours = parseInt(startParts[0], 10);
            const startMinutes = parseInt(startParts[1], 10);
            const endHours = parseInt(endParts[0], 10);
            const endMinutes = parseInt(endParts[1], 10);
        
            if (startHours < endHours || (startHours === endHours && startMinutes < endMinutes)) {
                return true; 
            } else {
                return false; 
            }
        }   

        function isEndDateAfterOrSameAsStartDate(startDate, endDate) {
            const startDateObj = new Date(startDate);
            const endDateObj = new Date(endDate);

            startDateObj.setHours(0, 0, 0, 0);
            endDateObj.setHours(0, 0, 0, 0);

            if (endDateObj > startDateObj) {
                return "greater"; 
            } else if (endDateObj < startDateObj) {
                return "less"
            }
        }

       const hasEndTimeGreaterThanStartTime = isStartTimeBeforeEndTime(eventStartTime.value, eventEndTime.value)
       const hasEndDateGreaterOrEqaulToStartDate = isEndDateAfterOrSameAsStartDate(eventStartDate.value, eventEndDate.value)



       if (hasEndDateGreaterOrEqaulToStartDate === "greater") {
        eventStartDate.className = "form-control"
        eventEndDate.className = "form-control"
        eventStartDateFeedback.innerHTML = ""
        eventEndDateFeedback.innerHTML = ""
       } else if (hasEndDateGreaterOrEqaulToStartDate !== "greater" || hasEndDateGreaterOrEqaulToStartDate !== "less") {
        if (!hasEndTimeGreaterThanStartTime) {
            eventStartTime.className = "form-control is-invalid"
            eventStartTimeFeedback.innerHTML = "Event start time must be before event end time"
            eventEndTime.className = "form-control is-invalid"
            eventEndTimeFeedback.innerHTML = "Event start time must be before event end time"
        } else if (hasEndTimeGreaterThanStartTime) {
            eventStartTime.className = "form-control"
            eventEndTime.className = "form-control"
            eventStartTimeFeedback.innerHTML = ""
            eventEndTimeFeedback.innerHTML = ""
        }

       } else if (hasEndDateGreaterOrEqaulToStartDate === "less") {
            
            eventStartDate.className = "form-control is-invalid"
            eventEndDate.className = "form-control is-invalid"
            eventStartDateFeedback.innerHTML = "Event start date must be before event end date."
            eventEndDateFeedback.innerHTML = "Event start date must be before event end."


       } 




        const houseNumberRegex = /^[0-9]+[A-Za-z]?$/;
        const containsLettersRegex = /[a-zA-Z\s]+/;

        const hasHouseNumber = houseNumberRegex.test(houseNumber.value)
        const hasStreet = containsLettersRegex.test(street.value)
        const hasCity = containsLettersRegex.test(city.value)
        const hasCounty = containsLettersRegex.test(county.value)
        const hasCountry = containsLettersRegex.test(country.value)

        if (hasHouseNumber) {
            houseNumber.className = "form-control"
            houseNumberFeedback.innerHTML = ""
        } else if (!hasHouseNumber) {
            houseNumber.className = "form-control is-invalid"
            houseNumberFeedback.innerHTML = "House number must contain one or more numbers and may contain a letter."
        }
        if (hasStreet) {
            street.className = "form-control"
            streetFeedback.innerHTML = ""
        } else if (!hasStreet) {
            street.className = "form-control is-invalid"
            streetFeedback.innerHTML = "Street must not be empty, contain only letters and may contain spaces."
        }
        if (hasCity) {
            city.className = "form-control"
            cityFeedback.innerHTML = ""
        } else if (!hasCity) {
            city.className = "form-control is-invalid"
            cityFeedback.innerHTML = "City must not be empty, contain only letters and may contain spaces."
        }
        if (hasCounty) {
            county.className = "form-control"
            countyFeedback.innerHTML = ""
        } else if (!hasCounty) {
            county.className = "form-control is-invalid"
            countyFeedback.innerHTML = "County must not be empty, contain only letters and may contain spaces."
        }
        if (hasCountry) {
            country.className = "form-control"
            countryFeedback.innerHTML = ""
        } else if (!hasCountry) {
            country.className = "form-control is-invalid"
            countryFeedback.innerHTML = "Country must not be empty, contain only letters and may contain spaces."
        }
        const postcodeRegex = /^[A-Z]{1,2}\d{1,2}[A-Z]?\s*\d[A-Z]{2}$/i;
        const hasPostCode = postcodeRegex.test(postCode.value)

        if (hasPostCode) {
            postCode.className = "form-control"
            postCodeFeedback.innerHTML = ""

        } else if (!hasPostCode) {
            postCode.className = "form-control is-invalid"
            postCodeFeedback.innerHTML = "Postcode must contain one or more letters, one or more digits and a space."

        }

        if (hasEventOrganiser && hasEventName && hasEventDescription && hasEndDate && hasEndDate && hasEventEndTime && hasEventStartTime && hasHouseNumber && hasStreet && hasCity && hasCountry && hasCounty && hasEventTicketPrice && hasEventTicketAmount && hasEndTimeGreaterThanStartTime && hasEndDateGreaterOrEqaulToStartDate === "greater" && pricing !=="") {
            updateEvent ()
            function updateEvent () {
                const updateEventBE = {
                    eventID: unsure,
                    eventOrganiser: eventOrganiser.value,
                    eventName: eventName.value,
                    eventDescription: eventDescription.value,
                    eventStartDate: eventStartDate.value,
                    eventStartTime: eventStartTime.value,
                    eventEndDate: eventEndDate.value,
                    eventEndTime: eventEndTime.value,
                    eventBuildingNumber: houseNumber.value,
                    eventStreetName: street.value,
                    eventCity: city.value,
                    eventCounty: county.value,
                    eventCountry: country.value,
                    eventPostCode: postCode.value,
                    eventPricing: pricing,
                    eventTicketPrice: eventTicketPrice.value,
                    eventTicketAmount: eventTicketAmount.value,
                    eventPicture: eventImage.value,
                    eventAtendees: atendeeArray,
                    _id: `${eventIDToView}`
                }

                fetch(`https://nc-events-platform-be-v2-production.up.railway.app/platform/event/put/${eventIDToView}/eventupdate
                `, {
                    method: 'POST',
                    body: JSON.stringify(updateEventBE)
                })
                .then(function(response) {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                      }
                    return response.json();
                })
                .catch(function(err) {
                    console.log("Error: ", err)
                })
            }

            
            createdEventFeedback.style.display = "block"
            createdEventFeedback.innerHTML = "Event successfully updated"
            atendeeID = 0
    
        } else {
            createdEventFeedback.style.display = "none"
            createdEventFeedback.innerHTML = ""
        }
    })
}

}

