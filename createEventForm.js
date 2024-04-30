import {profileIDSignedIn, profileSignedIn } from 'signInForm.js'


document.addEventListener('DOMContentLoaded', function() {
    createEventForm(atendeeID, atendeeArray)
})

let atendeeID = 0

let atendeeArray = []

if (profileSignedIn.role = "internal") {
    const createEventContainer = document.getElementById('middle-container-create-event')
    createEventContainer.className = 'internal-see-form';
    
} else if (profileSignedIn.role = "internal") {
    const createEventContainer = document.getElementById('middle-container-create-event')
    createEventContainer.className = 'external-block-form';
}
 

function createEventForm(atendeeID, atendeeArray) {
    let createEventAtendeeContainer = document.getElementById('create-event-atendees-container')
    document.querySelector('#add-atendee-btn').addEventListener('click', function(event) {
        if (profileSignedIn.role === "internal") {
        event.preventDefault()

        atendeeID += 1

        let createAtendee = document.createElement('div')
        createAtendee.innerHTML = `
        <div class="form-group">
            <label for="create-event-atendee-first-name-${atendeeID}">Atendee First Name:</label>
            <input type="text" class="form-control" id="create-event-atendee-first-name-${atendeeID}" placeholder="Enter atendee first name" required>
            <div class="invalid-feedback create-event-first-name-${atendeeID}-feedback">
            </div>
        </div>
        <div class="form-group">
            <label for="create-event-atendee-second-name-${atendeeID}">Atendee Second Name:</label>
            <input type="text" class="form-control" id="create-event-atendee-second-name-${atendeeID}" placeholder="Enter second name" required>
            <div class="invalid-feedback create-event-atendee-second-name-${atendeeID}-feedback">
            </div>
        </div>
        <div class="form-group">
            <label for="create-event-atendee-e-mail-${atendeeID}">Email:</label>
            <input type="text" class="form-control" id="create-event-atendee-e-mail-${atendeeID}" placeholder="Enter email" required>
            <div class="invalid-feedback create-event-atendee-email-${atendeeID}-feedback">
            </div>
        </div>

      `
        createEventAtendeeContainer.appendChild(createAtendee)
        }


    })
    document.querySelector('.btn-create-event').addEventListener('click', function(event) {
        event.preventDefault()
        if (profileSignedIn.role === "internal") {


        //to create form validation for
        
        const eventName = document.querySelector('#create-event-name')
        const eventNameFeedback = document.querySelector('.create-event-name-feedback')
        const eventDescription = document.querySelector('#create-event-description')
        const eventDescriptionFeedback = document.querySelector('.create-event-description-feedback')
        const eventStartDate = document.querySelector('#create-event-start-date')
        const eventStartDateFeedback = document.querySelector('.create-event-start-date-feedback')
        const eventStartTime = document.querySelector('#create-event-start-time')
        const eventStartTimeFeedback = document.querySelector('.create-event-start-time-feedback')
        const eventEndDate = document.querySelector('#create-event-end-date')
        const eventEndDateFeedback = document.querySelector('.create-event-end-date-feedback')
        const eventEndTime = document.querySelector('#create-event-end-time')
        const eventEndTimeFeedback = document.querySelector('.create-event-end-time-feedback')
        const eventTicketAmount= document.querySelector('#create-event-ticket-amount')
        const eventTicketAmountFeedback = document.querySelector('.create-event-ticket-amount-feedback')
        const createdEventFeedback = document.querySelector('#created-event-feedback')
        const postCode = document.querySelector('#create-event-post-code')
        const postCodeFeedback = document.querySelector('.create-event-post-code-feedback')
        const houseNumber = document.querySelector('#create-event-address-number')
        const houseNumberFeedback = document.querySelector('.create-event-address-number-feedback')
        const street = document.querySelector('#create-event-street')
        const streetFeedback = document.querySelector('.create-event-street-feedback')
        const city = document.querySelector('#create-event-city')
        const cityFeedback = document.querySelector('.create-event-city-feedback')
        const county = document.querySelector('#create-event-county')
        const countyFeedback = document.querySelector('.create-event-county-feedback')
        const country = document.querySelector('#create-event-country')
        const countryFeedback = document.querySelector('.create-event-country-feedback')
        const eventTicketPrice = document.querySelector('#create-event-ticket-price')
        const eventTicketPriceFeedback = document.querySelector('.create-event-ticket-price-feedback')
        const eventImage = document.querySelector('#create-event-image')
        const eventImageFeedback = document.querySelector('.create-event-image-feedback')

        const pricingFree = document.querySelector('#pricing-free')
        const pricingPaid = document.querySelector('#pricing-paid')
        const pricingPAYF = document.querySelector('#pricing-pay-as-you-feel')
        const pricingFeedback = document.querySelector('#create-event-pricing-feedback')
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

        atendeeArray = [];

        for (let i = 1; i <= atendeeID; i++) {
            const currentAtendeeFirstName = document.querySelector(`#create-event-atendee-first-name-${i}`)
            const currentAtendeeFirstNameFeedback = document.querySelector(`.create-event-first-name-${i}-feedback`)
            const currentAtendeeSecondName = document.querySelector(`#create-event-atendee-second-name-${i}`)
            const currentAtendeeSecondNameFeedback = document.querySelector(`.create-event-atendee-second-name-${i}-feedback`)
            const currentAtendeeEmail = document.querySelector(`#create-event-atendee-e-mail-${i}`)
            const currentAtendeeEmailFeedback = document.querySelector(`.create-event-atendee-email-${i}-feedback`)
            
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
            }

            console.log(atendeeArray)

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

        if (hasEventName && hasEventDescription && hasEndDate && hasEndDate && hasEventEndTime && hasEventStartTime && hasHouseNumber && hasStreet && hasCity && hasCountry && hasCounty && hasEventTicketPrice && hasEventTicketAmount && hasEndTimeGreaterThanStartTime && hasEndDateGreaterOrEqaulToStartDate === "greater" && hasImage && pricing !== "") {
            //add back end here.
            
            createEvent ()
            function createEvent () {
                const createEventBE = {
                    eventOrganiser: profileIDSignedIn,
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

                }

                fetch(`https://nc-events-platform-be-v2-production.up.railway.app/platform/event/post`, {
                    method: 'POST',
                    body: JSON.stringify(createEventBE)
                })
                .then(function(response) {
                })
                .catch(function(err) {
                    console.log("Error: ", err)
                })
            }
            createdEventFeedback.style.display = "block"
            createdEventFeedback.innerHTML = "Event successfully created"
            atendeeID = 0
    
        } else {
            createdEventFeedback.style.display = "none"
            createdEventFeedback.innerHTML = ""
        }
    }
    })
}



