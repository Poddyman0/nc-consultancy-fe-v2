
document.addEventListener('DOMContentLoaded', function() {

    eventsInsert()
})

function eventsInsert() {
    const loadingHomepage = document.querySelector('#homepage-loading')
    loadingHomepage.style.display = "block"
    loadingHomepage.innerHTML = "Loading event pictures..."
    const homeEventsContainer = document.querySelector('.container-two')
    fetch(`https://nc-events-platform-be-v2-production.up.railway.app/platform/events/get`, {
        method: 'GET',
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        loadingHomepage.style.display = "none"
        loadingHomepage.innerHTML = ""
        response.forEach(aEvent => {
            console.log(aEvent)
            let aEventToDisplay = document.createElement('div')
            aEventToDisplay.className = 'homepage-events-card'
            aEventToDisplay.innerHTML = `
                <img src="${aEvent.eventPicture}" alt="event immage" class="home-page-events-img">
                <figcaption class="home-page-events-figcaption">${aEvent.eventName}</figcaption>
            `
            console.log(aEventToDisplay)
            homeEventsContainer.appendChild(aEventToDisplay) 
        })
    })
}

/*

in html
                <div class="carousel-caption d-none d-md-block">
                    <h5>${aEvent.eventName}</h5>
                    <p></p>
                </div>

in js:

*/


module.exports = {eventsInsert}





