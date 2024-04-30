document.addEventListener('DOMContentLoaded', function() {
    signInForm()
})


export let profileIDSignedIn = "";
export let profileSignedIn = {};

function signInForm() {


    profileSignIn ()
    function profileSignIn () {
        document.querySelector('.btn-sign-in').addEventListener('click', function(event) {
            event.preventDefault()
            const emailSignIn = document.querySelector('#email-sign-in').value
            const emailSignInFeedback = document.querySelector('.sign-in-email-feedback')
            const passwordSignIn = document.querySelector('#password-sign-in').value
            const passwordSignInFeedback = document.querySelector('.sign-in-password-feedback')


        fetch(`https://nc-events-platform-be-v2-production.up.railway.app/platform/profile/get/${emailSignIn}/${passwordSignIn}/signin`, {
            method: 'GET',
        })
        .then(function(response) {
            console.log("json", response)
            return response.text();
        })
        .then(function(response) {
            console.log("after json", response)

            
                if (response === "Email does not match password or email is incorrect or password is incorrect.") {
                    emailSignIn.className = "form-control is-invalid"
                    passwordSignIn.className = "form-control is-invalid"
                    emailSignInFeedback.innerHTML = "Email does not match password or email is incorrect or password is incorrect."
                    passwordSignInFeedback.innerHTML = "Email does not match password or email is incorrect or password is incorrect."
                } else {
                    emailSignIn.className = "form-control"
                    passwordSignIn.className = "form-control"
                    emailSignInFeedback.innerHTML = ""
                    passwordSignInFeedback.innerHTML = ""
                    profileIDSignedIn = response
                    profileSignedIn = error[0];
                }

        })
        .catch(function(err) {
            console.log("Error: ", err)
        })
        /*
        if (profileIDSignedIn !== "") {
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
                profileSignedIn: true,
                _id: `${profileIDSignedIn}`,
            };

            fetch(`https://nc-events-platform-be-v2-production.up.railway.app/platform/profile/put/${profileIDSignedIn}/signin`, {
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
*/
    })
    }

}
