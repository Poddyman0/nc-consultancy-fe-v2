const {createEventForm, isValidDate, isStartTimeBeforeEndTime, isEndDateAfterOrSameAsStartDate} = require('./createEventForm.js');
const { loadEvent } = require('./event.js')
const { loadEvents } = require('./events.js')
const { createEventForm } = require('./eventUpdate.js')
const { eventsInsert } = require('./index.js')
const {loadProfile} = require('./profile.js')
const {updateProfile} = require('./profileUpdate.js')
const {signInForm} = require('./signInForm.js')
const {signUpForm} = require('./signUpForm.js')

describe('Initial setup and initialization', () => {
    test('Initial attendee ID should be 0', () => {
        expect(atendeeID).toBe(0);
    });

    test('Initial attendee array should be empty', () => {
        expect(atendeeArray).toEqual([]);
    });
});

describe('Event form creation', () => {
    // Mocking the DOM for testing event form creation
    document.body.innerHTML = `
        <div id="create-event-atendees-container"></div>
        <button id="add-atendee-btn"></button>
    `;

    test('Adding attendee should update attendee ID and DOM', () => {
        // Call the createEventForm function to add an attendee
        createEventForm(atendeeID, atendeeArray);

        // Check if the atendeeID is incremented
        expect(atendeeID).toBe(1);

        // Check if the DOM is updated with the new attendee
        const atendeeContainer = document.getElementById('create-event-atendees-container');
        expect(atendeeContainer.children.length).toBe(1);
    });
});

describe('Event form validation', () => {
    test('isValidDate function should return true for valid date format', () => {
        expect(isValidDate('2024-05-06')).toBe(true);
    });

    test('isStartTimeBeforeEndTime function should return true for valid time comparison', () => {
        expect(isStartTimeBeforeEndTime('10:00', '12:00')).toBe(true);
    });

    test('isEndDateAfterOrSameAsStartDate function should return "greater" for valid date comparison', () => {
        expect(isEndDateAfterOrSameAsStartDate('2024-05-06', '2024-05-07')).toBe('greater');
    });
});

// More tests for other validation functions can be added similarly

describe('Event creation', () => {
    // Mocking fetch for testing event creation
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({}),
        })
    );

    test('Event creation function should send data to server', async () => {
        // Mock data for event creation
        const eventData = {
            // Fill with mock data
        };

        // Call the createEvent function
        await createEvent();

        // Check if fetch is called with the correct arguments
        expect(fetch).toHaveBeenCalledWith('https://nc-events-platform-be-v2-production.up.railway.app/platform/event/post', {
            method: 'POST',
            body: JSON.stringify(eventData),
        });
    });
});

describe('Setup and initialization', () => {
    test('DOMContentLoaded event listener should be added', () => {
        const mockCallback = jest.fn();
        document.addEventListener('DOMContentLoaded', mockCallback);
        expect(mockCallback).toHaveBeenCalled();
    });

    test('Global variables should be initialized correctly', () => {
        expect(eventCallendar).toEqual([]);
        // Add more assertions for other global variables if needed
    });
});

describe('Event loading', () => {
    beforeEach(() => {
        // Reset the DOM before each test
        document.body.innerHTML = `
            <div class="an-event-container"></div>
            <div id="event-loading"></div>
        `;
    });

    test('Event loading function should fetch data and update DOM', async () => {
        // Mock data for the fetch response
        const mockEventData = {
            // Fill with mock data
        };

        // Mock the fetch function
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockEventData),
            })
        );

        // Call the loadEvent function
        await loadEvent();

        // Check if the DOM is updated with the event details
        const eventContainer = document.querySelector('.an-event-container');
        expect(eventContainer.innerHTML).toContain(mockEventData.event_name);
        // Add more assertions for other event details
    });
});

describe('Setup and initialization', () => {
    test('DOMContentLoaded event listener should be added', () => {
        const mockCallback = jest.fn();
        document.addEventListener('DOMContentLoaded', mockCallback);
        expect(mockCallback).toHaveBeenCalled();
    });

    test('Global variables should be initialized correctly', () => {
        expect(eventsArray).toEqual([]);
        expect(eventCallendar).toEqual([]);
    });
});

describe('Event loading', () => {
    beforeEach(() => {
        // Reset the DOM before each test
        document.body.innerHTML = `
            <div class="card-container"></div>
            <div id="events-loading"></div>
        `;
    });

    test('Events should be fetched and rendered correctly', async () => {
        // Mock data for the fetch response
        const mockEventData = [
            // Mock event data objects
        ];

        // Mock the fetch function
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockEventData),
            })
        );

        // Call the loadEvents function
        await loadEvents();

        // Check if the DOM is updated with the event details
        const cardContainer = document.querySelector('.card-container');
        expect(cardContainer.children.length).toBe(mockEventData.length);
        // Add more assertions for other event details
    });
});


describe('Event insertion', () => {
    beforeEach(() => {
        // Reset the DOM before each test
        document.body.innerHTML = `
            <div class="container-two"></div>
            <div id="homepage-loading"></div>
        `;
    });

    test('Events should be fetched and inserted correctly into the DOM', async () => {
        // Mock data for the fetch response
        const mockEventData = [
            // Mock event data objects
        ];

        // Mock the fetch function
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockEventData),
            })
        );

        // Call the eventsInsert function
        await eventsInsert();

        // Check if the DOM is updated with the event details
        const container = document.querySelector('.container-two');
        expect(container.children.length).toBe(mockEventData.length);

        // Add more assertions to check if each event is displayed correctly
        // For example:
        // Check if event images and names are displayed correctly
        for (let i = 0; i < mockEventData.length; i++) {
            const eventElement = container.children[i];
            expect(eventElement.querySelector('.home-page-events-img').getAttribute('src')).toBe(mockEventData[i].eventPicture);
            expect(eventElement.querySelector('.home-page-events-figcaption').textContent).toBe(mockEventData[i].eventName);
        }
    });
});

describe('Profile loading', () => {
    beforeEach(() => {
        // Reset the DOM before each test
        document.body.innerHTML = `
            <div class="events-invited-to"></div>
            <div id="loading-profile-invites"></div>
            <div id="profile-info-container"></div>
            <div id="loading-profile-info"></div>
        `;
    });

    test('Profile information should be fetched and displayed correctly', async () => {
        // Mock data for the fetch response
        const mockProfileData = {
            // Mock profile data object
        };

        // Mock the fetch function for profile data
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockProfileData),
            })
        );

        // Call the loadProfile function
        await loadProfile();

        // Check if the profile information is displayed correctly
        const profileContainer = document.querySelector('#profile-info-container');
        expect(profileContainer.innerHTML).toContain(mockProfileData.firstName);
        expect(profileContainer.innerHTML).toContain(mockProfileData.secondName);
        // Add more assertions for other profile fields as needed
    });

    test('Events invited to should be fetched and displayed correctly', async () => {
        // Mock data for the fetch response
        const mockEventData = [
            // Mock event data objects
        ];

        // Mock the fetch function for event data
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockEventData),
            })
        );

        // Call the loadProfile function
        await loadProfile();

        // Check if the events invited to are displayed correctly
        const eventsContainer = document.querySelector('.events-invited-to');
        expect(eventsContainer.children.length).toBe(mockEventData.length);
        // Add more assertions to check if each event is displayed correctly
    });
});


describe('Profile update', () => {
    beforeEach(() => {
        // Reset the DOM before each test
        document.body.innerHTML = `
            <!-- Set up your HTML structure with form fields -->
        `;
    });

    test('Profile data should be correctly pre-filled', async () => {
        // Mock profile data for pre-filling the form
        const mockProfileData = {
            // Mock profile data object
        };

        // Mock the fetch function for fetching profile data
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockProfileData),
            })
        );

        // Call the updateProfile function
        await updateProfile();

        // Check if the form fields are correctly pre-filled with mock data
        expect(document.querySelector('#password-update-profile').value).toBe(mockProfileData.profilePassword);
        expect(document.querySelector('#telephone-update-profile').value).toBe(mockProfileData.profileTelephone);
        // Add more assertions for other form fields as needed
    });

    test('Validation should work for each input field', async () => {
        // Mock the fetch function for fetching profile data
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({}),
            })
        );

        // Call the updateProfile function
        await updateProfile();

        // Simulate user input for various fields (password, email, etc.)
        // Test each input field individually to check validation

        // For example:
        const passwordInput = document.querySelector('#password-update-profile');
        // Set invalid input
        passwordInput.value = 'weakpassword';
        // Trigger input event
        passwordInput.dispatchEvent(new Event('input'));
        // Expect validation feedback to be displayed
        expect(document.querySelector('.update-profile-form-password-feedback').innerHTML).toContain('Passwords must contain at least eight characters');

        // Add similar tests for other input fields
    });

    test('Profile should be updated with valid data', async () => {
        // Mock the fetch function for updating the profile
        global.fetch = jest.fn(() => Promise.resolve({}));

        // Call the updateProfile function
        await updateProfile();

        // Simulate user input with valid data for all fields
        // Trigger form submission

        // Expect a fetch request to be made with the correct data
        expect(fetch).toHaveBeenCalledWith(expect.any(String), {
            method: 'POST',
            body: expect.any(String),
        });

        // Optionally, mock the response from the server to test the success message
    });
});

describe('Sign-in form', () => {
    beforeEach(() => {
        // Reset the DOM before each test
        document.body.innerHTML = `
            <!-- Set up your HTML structure with form fields -->
        `;
    });

    test('Sign-in should send correct data in the request', async () => {
        // Simulate user input for email and password fields
        const emailInput = document.querySelector('#email-sign-in');
        const passwordInput = document.querySelector('#password-sign-in');
        emailInput.value = 'test@example.com';
        passwordInput.value = 'password123';

        // Mock the fetch function
        global.fetch = jest.fn(() => Promise.resolve({ text: () => Promise.resolve('profileID') }));

        // Call the signInForm function
        await signInForm();

        // Expect fetch to be called with the correct URL and method
        expect(fetch).toHaveBeenCalledWith('https://nc-events-platform-be-v2-production.up.railway.app/platform/profile/get/test@example.com/password123/signin', {
            method: 'GET',
        });
    });

    test('Sign-in should handle successful sign-in correctly', async () => {
        // Mock successful response from the server
        global.fetch = jest.fn(() => Promise.resolve({ text: () => Promise.resolve('profileID') }));

        // Call the signInForm function
        await signInForm();

        // Expect form fields to be cleared and profileID to be updated
        expect(document.querySelector('#email-sign-in').value).toBe('');
        expect(document.querySelector('#password-sign-in').value).toBe('');
        expect(profileIDSignedIn).toBe('profileID');
    });

    test('Sign-in should handle unsuccessful sign-in correctly', async () => {
        // Mock unsuccessful response from the server
        global.fetch = jest.fn(() => Promise.resolve({ text: () => Promise.resolve('Email does not match password or email is incorrect or password is incorrect.') }));

        // Call the signInForm function
        await signInForm();

        // Expect error feedback to be displayed
        expect(document.querySelector('.sign-in-email-feedback').innerHTML).toBe('Email does not match password or email is incorrect or password is incorrect.');
        expect(document.querySelector('.sign-in-password-feedback').innerHTML).toBe('Email does not match password or email is incorrect or password is incorrect.');
    });

    test('Profile data should be updated on successful sign-in', async () => {
        // Mock successful response from the server
        global.fetch = jest.fn(() => Promise.resolve({ text: () => Promise.resolve('profileID') }));

        // Call the signInForm function
        await signInForm();

        // Expect a fetch request to update the profile data with the correct payload
        expect(fetch).toHaveBeenCalledWith('https://nc-events-platform-be-v2-production.up.railway.app/platform/profile/put/profileID/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // Mock profile data object
            }),
        });
    });
});


describe('Sign-up form', () => {
    beforeEach(() => {
        // Reset the DOM before each test
        document.body.innerHTML = `
            <!-- Set up your HTML structure with form fields -->
        `;
    });

    test('Valid input should submit profile data', async () => {
        // Simulate user input for all required fields
        // Make sure to include valid input for each field
        // Trigger the click event on the sign-up button
        document.querySelector('#btn-sign-up').click();

        // Mock the fetch function
        global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({ success: true }) }));

        // Expect a fetch request to be made with the correct payload
        await signUpForm();

        // Expect the success message to be displayed
        expect(document.querySelector('#sign-up-success').innerHTML).toBe("You have successfully signed up. Return to the login page to sign in.");
    });

    test('Invalid input should display appropriate error messages', async () => {
        // Simulate user input for invalid fields
        // Make sure to include invalid input for each field
        // Trigger the click event on the sign-up button
        document.querySelector('#btn-sign-up').click();

        // Mock the fetch function
        global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({ success: false }) }));

        // Expect error messages to be displayed for each invalid field
        await signUpForm();

        // Expect no success message to be displayed
        expect(document.querySelector('#sign-up-success').innerHTML).toBe("");
    });

});

