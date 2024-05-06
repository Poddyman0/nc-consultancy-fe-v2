document.addEventListener('DOMContentLoaded', function() {
    signUpForm() 
})

function signUpForm () {
    document.querySelector('#btn-sign-up').addEventListener('click', function(event) {
        event.preventDefault()
        const password = document.querySelector('#password-sign-up')
        const passwordConfirmation = document.querySelector('#password-confirm-sign-up')
        const passwordFeedback = document.querySelector('.sign-up-form-password-feedback')
        const passwordConfirmationFeedback = document.querySelector('.sign-up-form-password-confirm-feedback')
        const telephone = document.querySelector('#telephone-sign-up')
        const telephoneFeedback = document.querySelector('.sign-up-form-telephone-feedback')
        const email = document.querySelector('#email-sign-up')
        const emailFeedback = document.querySelector('.sign-up-form-email-feedback')
        const firstName = document.querySelector('#first-name-sign-up')
        const firstNameFeedback = document.querySelector('.sign-up-form-fist-name-feedback')
        const secondName = document.querySelector('#second-name-sign-up')
        const secondNameFeedback = document.querySelector('.sign-up-form-second-name-feedback')
        const DOB = document.querySelector('#dob-sign-up')
        const DOBFeedback = document.querySelector('.sign-up-form-DOB-feedback')
        const roleInternal = document.querySelector('#internal-sign-up')
        const roleExternal = document.querySelector('#external-sign-up')
        const roleFeedback = document.querySelector('.sign-up-form-role-feedback')
        const signedUpFeedback = document.querySelector('#sign-up-success')

        const cardHolderName = document.querySelector('#payment-name-sign-up');
        const cardHolderNameFeedback = document.querySelector('.payment-name-sign-up-feedback');
        const bankName = document.querySelector('#payment-bank-name-sign-up');
        const bankNameFeedback = document.querySelector('.payment-bank-name-sign-up-feedback');
        const cardNumber = document.querySelector('#payment-card-number-sign-up');
        const cardNumberFeedback = document.querySelector('.payment-card-number-sign-up-feedback');
        const expiryDate = document.querySelector('#payment-expire-sign-up');
        const expiryDateFeedback = document.querySelector('.payment-expire-sign-up-feedback');
        const cvv = document.querySelector('#payment-CVV-sign-up');
        const cvvFeedback = document.querySelector('.payment-CVV-sign-up-feedback');
        const postCode = document.querySelector('#address-post-code-sign-up')
        const postCodeFeedback = document.querySelector('.address-post-code-sign-up-feedback')
        const houseNumber = document.querySelector('#address-number-sign-up')
        const houseNumberFeedback = document.querySelector('.sign-up-address-number-feedback')
        const street = document.querySelector('#address-street-sign-up')
        const streetFeedback = document.querySelector('.sign-up-street-feedback')
        const city = document.querySelector('#address-city-sign-up')
        const cityFeedback = document.querySelector('.sign-up-city-feedback')
        const county = document.querySelector('#address-county-sign-up')
        const countyFeedback = document.querySelector('.sign-up-county-feedback')
        const country = document.querySelector('#address-country-sign-up')
        const countryFeedback = document.querySelector('.sign-up-country-feedback')
        let role;
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
        


        

        /*
        change update js and html
        */
        const postcodeRegex = /^[A-Z]{1,2}\d{1,2}[A-Z]?\s*\d[A-Z]{2}$/i;
        const hasPostCode = postcodeRegex.test(postCode.value)

        if (hasPostCode) {
            postCode.className = "form-control"
            postCodeFeedback.innerHTML = ""

        } else if (!hasPostCode) {
            postCode.className = "form-control is-invalid"
            postCodeFeedback.innerHTML = "Postcode must contain one or more letters, one or more digits and a space."

        }

        const cardHolderNameRegex = /^[a-zA-Z\s]+$/;
        const bankNameRegex = /^[a-zA-Z\s]+$/;
        const cardNumberRegex = /^\d{16}$/;
        const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        const cvvRegex = /^\d{3}$/;

        const hasCardHolderName = cardHolderNameRegex.test(cardHolderName.value)
        const hasBankName = bankNameRegex.test(bankName.value)
        const hasCardNumber = cardNumberRegex.test(cardNumber.value)
        const hasExpiryDate = expiryDateRegex.test(expiryDate.value)
        const hasCVV = cvvRegex.test(cvv.value)

        if (!hasCardHolderName) {
            cardHolderName.className = "form-control is-invalid"
            cardHolderNameFeedback.innerHTML = "Card holder's name must contain only letters and spaces."
        } else if (hasCardHolderName) {
            cardHolderName.className = "form-control"
            cardHolderNameFeedback.innerHTML = ""
        }
        if (!hasBankName) {
            bankName.className = "form-control is-invalid"
            bankNameFeedback.innerHTML = "Bank name must contain only letters and spaces."
        } else if (hasBankName) {
            bankName.className = "form-control"
            bankNameFeedback.innerHTML = ""
        }
        if (!hasCardNumber) {
            cardNumber.className = "form-control is-invalid"
            cardNumberFeedback.innerHTML = "Card number must contain only numbers and be 16 digits long."
        } else if (hasCardNumber) {
            cardNumber.className = "form-control"
            cardNumberFeedback.innerHTML = ""
        }
        if (!hasExpiryDate) {
            expiryDate.className = "form-control is-invalid"
            expiryDateFeedback.innerHTML = "Expirey date must be in MM/YY format, Months (MM) must be a number between the range 1-12 and be two digit long. Year (YY) must be a number of with a length of two digits"
        } else if (hasExpiryDate) {
            expiryDate.className = "form-control"
            expiryDateFeedback.innerHTML = ""
        }
        if (!hasCVV) {
            cvv.className = "form-control is-invalid"
            cvvFeedback.innerHTML = "CVV must be a number with a length of 3 digits."
        } else if (hasCVV) {
            cvv.className = "form-control"
            cvvFeedback.innerHTML = ""
        }

        if (!roleInternal.checked && !roleExternal.checked) {
            roleFeedback.innerHtml = "Your role must be either internal or external."

        } else if (roleInternal.checked && roleExternal.checked) {
            roleFeedback.innerHtml = "Your role must be either internal or external."

        } else if (roleInternal.checked) {
            role = "internal"
            roleFeedback.innerHtml = ""
        } else if (roleExternal.checked) {
            role = "external"
            roleFeedback.innerHtml = ""
        }
        
        const ukPhoneNumberRegex = /^(?:0|\+44)[1-9]\d{8,9}$/;
        const hasUkPhoneNumber = ukPhoneNumberRegex.test(telephone.value)
        if (hasUkPhoneNumber) {
            telephone.className = "form-control"
            telephoneFeedback.innerHTML = ""
        } else if (!hasUkPhoneNumber) {
            telephone.className = "form-control is-invalid"
            telephoneFeedback.innerHTML = "Telephone number must start with an area code of 0 or +44 and 8 or 9 have additional subscriber digits after the area code"
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const hasEmail = emailRegex.test(email.value)

        if (hasEmail) {
            email.className = "form-control"
            emailFeedback.innerHTML = ""

        } else if (!hasEmail) {
            email.className = "form-control is-invalid"
            emailFeedback.innerHTML = "Email address must consist of one or more characters before and after the '@' symbol, separated by a '.'"
        }
        const nameRegex = /^[A-Za-z\s\-']+$/;
        const hasFirstName = nameRegex.test(firstName.value);
        const hasSecondName = nameRegex.test(secondName.value);

        if (hasFirstName) {
            firstName.className = "form-control"
            firstNameFeedback.innerHTML = ""
        } else if (!hasFirstName) {
            firstName.className = "form-control is-invalid"
            firstNameFeedback.innerHTML = "First name must contain letters, can contain '-' or ''' and must not contain numbers"
        }
        if (hasSecondName) {
            secondName.className = "form-control"
            secondNameFeedback.innerHTML = ""
        } else if (!hasSecondName) {
            secondName.className = "form-control is-invalid"
            secondNameFeedback.innerHTML = "Second name must contain letters, can contain '-' or ''' and must not contain numbers"
        }

        function isValidDateOfBirth(dateString) {
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
        
            const currentDate = new Date();
            if (dateObject.getTime() > currentDate.getTime()) {
                return false;
            }
        
            return true;
        }
        const hasDOB = isValidDateOfBirth(DOB.value)
        if (hasDOB) {
            DOB.className = "form-control"
            DOBFeedback.innerHTML = ""

        } else if (!hasDOB) {
            DOB.className = "form-control is-invalid"
            DOBFeedback.innerHTML = "Date of birth must by in YYYY-MM-DD format, be a valid date and not be in the future"
        }
        const lengthRegex = /.{8,}/;  // At least 8 characters
        const upperCaseRegex = /[A-Z]/;  // At least one uppercase letter
        const lowerCaseRegex = /[a-z]/;  // At least one lowercase letter
        const numberRegex = /[0-9]/;  // At least one number
        const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;  // At least one special character
    
        // Check if all requirements are met
        const isLengthValid = lengthRegex.test(password.value);
        const hasUpperCase = upperCaseRegex.test(password.value);
        const hasLowerCase = lowerCaseRegex.test(password.value);
        const hasNumber = numberRegex.test(password.value);
        const hasSpecialChar = specialCharRegex.test(password.value);

        if (password.value !== passwordConfirmation.value) {
            password.className = "form-control is-invalid"
            passwordConfirmation.className = "form-control is-invalid"
            passwordFeedback.innerHTML = "Passwords must match"
            passwordConfirmationFeedback.innerHTML = "Passwords must match"
        } else if (password.value === passwordConfirmation.value) {
            password.className = "form-control"
            passwordConfirmation.className = "form-control"
            passwordFeedback.innerHTML = ""
            passwordConfirmationFeedback.innerHTML = ""

            if (!isLengthValid || !hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
                password.className = "form-control is-invalid"
                passwordConfirmation.className = "form-control is-invalid"
                passwordFeedback.innerHTML = "Passwords must container eight characters, a lowercase letter, a upper case number, a number and one special character"
                passwordConfirmationFeedback.innerHTML = "Passwords must container eight characters, a lowercase letter, a upper case number, a number and one special character"
            } else {
                password.className = "form-control"
                passwordConfirmation.className = "form-control"
                passwordFeedback.innerHTML = ""
                passwordConfirmationFeedback.innerHTML = ""

            }
            if (hasUkPhoneNumber && hasEmail && hasFirstName && hasSecondName && hasDOB && isLengthValid && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && password.value === passwordConfirmation.value && hasCardHolderName && hasBankName && hasCardNumber && hasExpiryDate && hasCVV && hasHouseNumber && hasStreet && hasCity && hasCountry && hasCounty && hasPostCode) {
                const loadProfileSignUp = document.querySelector('#loading-profile-sign-up')
                loadProfileSignUp.style.display = "block"
                loadProfileSignUp.innerHTML = "Loading profile sign in..."
                createProfile ()
                function createProfile () {
                    const createProfileBE = {
                        profilePassword: password.value,
                        profileTelephone: telephone.value,
                        profileEmail: email.value,
                        profileFirstName: firstName.value,
                        profileSecondName: secondName.value,
                        profileDOB: DOB.value,
                        profileRole: role,
                        profileCardHolderName: cardHolderName.value,
                        profileBankName: bankName.value,
                        profileCardNumber: cardNumber.value,
                        profileExpireyDate: expiryDate.value,
                        profileCVV: cvv.value,
                        profilePostCode: postCode.value,
                        profileHouseNumber: houseNumber.value,
                        profileStreet: street.value,
                        profileCity: city.value,
                        profileCounty: county.value, 
                        profileSignedIn: false,
    
                    }
                    // update URL below.

                    fetch('http://nc-events-platform-be-v2-production.up.railway.app/platform/profile/post', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json", // or any other appropriate content type
                          },
                        body: JSON.stringify(createProfileBE),
                        })
                        .then(response => {
                        return response.json();
                        })
                        .then(data => {
                            loadProfileSignUp.style.display = "none"
                            loadProfileSignUp.innerHTML = ""
                        console.log('Success:', data);
                        })
                        .catch(error => {
                        console.error('Error:', error);
                        });
                }
                signedUpFeedback.style.display = "block"
                signedUpFeedback.innerHTML = "You have successfilly signed up. Return to login page to sign in."
                // add back end here.
            } else {
                signedUpFeedback.style.display = "none"
                signedUpFeedback.innerHTML = ""
            }
        };
    })   
}

module.exports = {signUpForm}
