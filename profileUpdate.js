import {profileIDSignedIn } from 'signInForm.js'

document.addEventListener('DOMContentLoaded', function() {
    updateProfile(profileIDSignedIn, profileEmailSignedIn)
})



function updateProfile(profileIDSignedIn, profileEmailSignedIn) {
    const password = document.querySelector('#password-update-profile')
        const passwordConfirmation = document.querySelector('#password-confirm-update-profile')
        const passwordFeedback = document.querySelector('.update-profile-form-password-feedback')
        const passwordConfirmationFeedback = document.querySelector('.update-profile-form-password-confirm-feedback')
        const telephone = document.querySelector('#telephone-update-profile')
        const telephoneFeedback = document.querySelector('.update-profile-form-telephone-feedback')
        const email = document.querySelector('#email-update-profile')
        const emailFeedback = document.querySelector('.update-profile-form-email-feedback')
        const firstName = document.querySelector('#first-name-update-profile')
        const firstNameFeedback = document.querySelector('.update-profile-form-fist-name-feedback')
        const secondName = document.querySelector('#second-name-update-profile')
        const secondNameFeedback = document.querySelector('.update-profile-form-second-name-feedback')
        const DOB = document.querySelector('#dob-update-profile')
        const DOBFeedback = document.querySelector('.update-profile-form-DOB-feedback')
        const roleInternal = document.querySelector('#internal-update-profile')
        const roleExternal = document.querySelector('#external-update-profile')
        const roleFeedback = document.querySelector('.update-profile-form-role-feedback')
        const signedUpFeedback = document.querySelector('#update-profile-success')

        const cardHolderName = document.querySelector('#payment-name-update-profile');
        const cardHolderNameFeedback = document.querySelector('.payment-name-update-profile-feedback');
        const bankName = document.querySelector('#payment-bank-name-update-profile');
        const bankNameFeedback = document.querySelector('.payment-bank-name-update-profile-feedback');
        const cardNumber = document.querySelector('#payment-card-number-update-profile');
        const cardNumberFeedback = document.querySelector('.payment-card-number-update-profile-feedback');
        const expiryDate = document.querySelector('#payment-expire-update-profile');
        const expiryDateFeedback = document.querySelector('.payment-expire-update-profile-feedback');
        const cvv = document.querySelector('#payment-CVV-update-profile');
        const cvvFeedback = document.querySelector('.payment-CVV-update-profile-feedback');
        const postCode = document.querySelector('#address-post-code-update-profile')
        const postCodeFeedback = document.querySelector('.address-post-code-update-profile-feedback')
        const houseNumber = document.querySelector('#address-number-update-profile')
        const houseNumberFeedback = document.querySelector('.update-profile-address-number-feedback')
        const street = document.querySelector('#address-street-update-profile')
        const streetFeedback = document.querySelector('.update-profile-street-feedback')
        const city = document.querySelector('#address-city-update-profile')
        const cityFeedback = document.querySelector('.update-profile-city-feedback')
        const county = document.querySelector('#address-county-update-profile')
        const countyFeedback = document.querySelector('.update-profile-county-feedback')
        const country = document.querySelector('#address-country-update-profile')
        const countryFeedback = document.querySelector('.update-profile-country-feedback')
        let role;

    autoFillProfileForm ()
    function autoFillProfileForm () {
        
        const getProfileBE = {
            profileEmailSignedIn: profileEmailSignedIn,
            profileID: profileIDSignedIn,            
        }

        fetch(`https://nc-events-platform-be-v2-production.up.railway.app/platform/profile/get/${profileIDSignedIn}/profileupdate`, {
            method: 'GET',
            body: JSON.stringify(getProfileBE)
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            password.value = response.profilePassword,
            telephone.value = response.profileTelephone,
            email.value = response.profileEmail,
            firstName.value = response.profileFirstName,
            secondName.value = response.profileSecondName,
            DOB.value = response.profileDOB,
            cardHolderName.value = response.profileCardHolderName,
            bankName.value = response.profileBankName,
            cardNumber.value = response.profileCardNumber,
            expiryDate.value = response.profileExpireyDate,
            cvv.value = response.profileCVV,
            postCode.value = response.profilePostCode,
            houseNumber.value = response.profileHouseNumber,
            street.value = response.profileStreet,
            city.value = response.profileCity,
            county.value = response.profilecounty,
            country.value = response.profileCountry,
            isInerternalOrExternal ()
            function isInerternalOrExternal () {
                if (response.profileRole === "internal") {
                    roleInternal.checked = true
                    roleExternal.checked = false
    
                } else if (response.profileRole === "external") {
                    roleInternal.checked = false
                    roleExternal.checked = true
                }
            }
        })
        .catch(function(err) {
            console.log("Error: ", err)
        })
    }
    document.querySelector('#btn-update-profile').addEventListener('click', function(event) {
        event.preventDefault()
        const password = document.querySelector('#password-update-profile')
        const passwordConfirmation = document.querySelector('#password-confirm-update-profile')
        const passwordFeedback = document.querySelector('.update-profile-form-password-feedback')
        const passwordConfirmationFeedback = document.querySelector('.update-profile-form-password-confirm-feedback')
        const telephone = document.querySelector('#telephone-update-profile')
        const telephoneFeedback = document.querySelector('.update-profile-form-telephone-feedback')
        const email = document.querySelector('#email-update-profile')
        const emailFeedback = document.querySelector('.update-profile-form-email-feedback')
        const firstName = document.querySelector('#first-name-update-profile')
        const firstNameFeedback = document.querySelector('.update-profile-form-fist-name-feedback')
        const secondName = document.querySelector('#second-name-update-profile')
        const secondNameFeedback = document.querySelector('.update-profile-form-second-name-feedback')
        const DOB = document.querySelector('#dob-update-profile')
        const DOBFeedback = document.querySelector('.update-profile-form-DOB-feedback')
        const roleInternal = document.querySelector('#internal-update-profile')
        const roleExternal = document.querySelector('#external-update-profile')
        const roleFeedback = document.querySelector('.update-profile-form-role-feedback')
        const signedUpFeedback = document.querySelector('#update-profile-success')

        const cardHolderName = document.querySelector('#payment-name-update-profile');
        const cardHolderNameFeedback = document.querySelector('.payment-name-update-profile-feedback');
        const bankName = document.querySelector('#payment-bank-name-update-profile');
        const bankNameFeedback = document.querySelector('.payment-bank-name-update-profile-feedback');
        const cardNumber = document.querySelector('#payment-card-number-update-profile');
        const cardNumberFeedback = document.querySelector('.payment-card-number-update-profile-feedback');
        const expiryDate = document.querySelector('#payment-expire-update-profile');
        const expiryDateFeedback = document.querySelector('.payment-expire-update-profile-feedback');
        const cvv = document.querySelector('#payment-CVV-update-profile');
        const cvvFeedback = document.querySelector('.payment-CVV-update-profile-feedback');
        const postCode = document.querySelector('#address-post-code-update-profile')
        const postCodeFeedback = document.querySelector('.address-post-code-update-profile-feedback')
        const houseNumber = document.querySelector('#address-number-update-profile')
        const houseNumberFeedback = document.querySelector('.update-profile-address-number-feedback')
        const street = document.querySelector('#address-street-update-profile')
        const streetFeedback = document.querySelector('.update-profile-street-feedback')
        const city = document.querySelector('#address-city-update-profile')
        const cityFeedback = document.querySelector('.update-profile-city-feedback')
        const county = document.querySelector('#address-county-update-profile')
        const countyFeedback = document.querySelector('.update-profile-county-feedback')
        const country = document.querySelector('#address-country-update-profile')
        const countryFeedback = document.querySelector('.update-profile-country-feedback')

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

        } else if (roleInternal.checked || roleExternal.checked) {
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
            DOBFeedback.innerHTML = "Date of birth must by in YYY-MM-DD format, be a valid date and not be in the future"
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
                updateProfile ()
                function updateProfile () {
                    const createProfileBE = {
                        profileID: profileIDSignedIn,
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
                        profileSignedIn: true,
                        _id: `${profileIDSignedIn}`,
    
                    }
                    // update URL below

                    fetch(`https://nc-events-platform-be-v2-production.up.railway.app/platform/profile/put/${profileIDSignedIn}/profileupdate`, {
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
                        return response.text();
                        })
                        .then(data => {
                        console.log('Success:', data);
                        })
                        .catch(error => {
                        console.error('Error:', error);
                        });
                }
                
                signedUpFeedback.style.display = "block"
                signedUpFeedback.innerHTML = "You have successfilly signed up. Return to login page to sign in."
                
            } else {
                signedUpFeedback.style.display = "none"
                signedUpFeedback.innerHTML = ""
            }
        };
    })   
}
