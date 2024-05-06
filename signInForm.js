document.addEventListener('DOMContentLoaded', function() {
    signInForm()
})


let profileIDSignedIn = "662b78f7227520c132110598";
let profileSignedIn = {
  _id: "662b78f7227520c132110592",
  profilePassword: "Asdf5678%",
  profileTelephone: 447012345678,
  profileEmail: "adam.apple@outlook.com",
  profileFirstName: "Adam",
  profileSecondName: "Apple",
  profileDOB: "493257600000",
  profileRole: "internal",
  profileCardHolderName: "Mr Addam Apple",
  profileBankName: "HSBC",
  profileCardNumber: "369258014736920",
  profileExpireyDate: "01/29",
  profileCVV: 456,
  profilePostCode: "WD259JH",
  profileHouseNumber: "2",
  profileStreet: "Amber Avenue",
  profileCity: "Leeds",
  profileCounty: "West Yorkshire",
  profileCountry: "England",
  profileSignedIn: false,
};

function signInForm() {


    profileSignIn ()
    function profileSignIn () {
        
        document.querySelector('.btn-sign-in').addEventListener('click', function(event) {
            event.preventDefault()
            const emailSignIn = document.querySelector('#email-sign-in')
            const emailSignInFeedback = document.querySelector('.sign-in-email-feedback')
            const passwordSignIn = document.querySelector('#password-sign-in')
            const passwordSignInFeedback = document.querySelector('.sign-in-password-feedback')
            const loadingProfileSignIn = document.querySelector('#loading-profile-sign-in')
            loadingProfileSignIn.style.display = "block"
            loadingProfileSignIn.innerHTML = "Loading profile sign in..."            

        fetch(`https://nc-events-platform-be-v2-production.up.railway.app/platform/profile/get/${emailSignIn.value}/${passwordSignIn.value}/signin`, {
            method: 'GET',
            
        })
        .then(function(response) {

            console.log("json", response)
            return response.text();
        })
        .then(function(response) {
          loadingProfileSignIn.style.display = "none"
          loadingProfileSignIn.innerHTML = "" 
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
                    //profileSignedIn = error[0];
                }

        })

        
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

        }
    })
    }

}
