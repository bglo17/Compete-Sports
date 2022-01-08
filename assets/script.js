function initMap(){
    // locations
    var LaFitness1 = {lat:33.9998,lng:-84.5836};
    var LaFitness2 = {lat:34.0631,lng:-84.3917};
    var LaFitness3 = {lat:33.7982,lng:-84.3708};
    var LaFitness4 = {lat:33.7244,lng:-84.7321};

    // map options
    var options = {
        zoom:8,
        center: {lat:33.7490,lng:-84.3880},
    }

    // new map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // function that adds locations to the map
    function addMarker(props){
        var marker = new google.maps.Marker({
        position: props.coords,
        map:map,
    });
        // content section is for info window
        if(props.content){
            const infowindow = new google.maps.InfoWindow({
                content:props.content,
            });
                // Listener for CLICK
            marker.addListener("click", function(){
                infowindow.open(map, marker);
            });
        };
    };
    
    // call the function for each location
    addMarker({
        coords:LaFitness1,
        content:'<h2>LA Fitness</h2>' + '<p>1185 Ernest W Barrett Pkwy NW, Kennesaw, GA 30144</p>'
    });
    addMarker({
        coords:LaFitness2,
        content:'<h2>LA Fitness</h2>' + '<p>1045 Woodstock Rd, Roswell, GA 30075</p>'
    });
    addMarker({
        coords:LaFitness3,
        content:'<h2>LA Fitness</h2>' + '<p>1544 Piedmont Ave NE Ste 115, Atlanta, GA 30324</p>'
    });
    addMarker({
        coords:LaFitness4,
        content:'<h2>LA Fitness</h2>' + '<p>3020 Chapel Hill Rd, Douglasville, GA 30135</p>'
    });
}




var CLIENT_ID = '682013659308-2dtq8t2e5q5fdt4qrhgjohhkq3b3hm3j.apps.googleusercontent.com';
var API_KEY = 'AIzaSyCQMx9ScTgY0U55aGDoy1F_elRLgptPIkE';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/calendar";

var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  }, function(error) {
    appendPre(JSON.stringify(error, null, 2));
  });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';
    listUpcomingEvents();
  } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();n
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById('content');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}

/**
 * Print the summary and start datetime/date of the next ten events in
 * the authorized user's calendar. If no events are found an
 * appropriate message is printed.
 */
function listUpcomingEvents() {
  gapi.client.calendar.events.list({
    'calendarId': 'primary',
    'timeMin': (new Date()).toISOString(),
    'showDeleted': false,
    'singleEvents': true,
    'maxResults': 10,
    'orderBy': 'startTime'
  }).then(function(response) {
    var events = response.result.items;
    appendPre('Upcoming events:');

    if (events.length > 0) {
      for (i = 0; i < events.length; i++) {
        var event = events[i];
        var when = event.start.dateTime;
        if (!when) {
          when = event.start.date;
        }
        appendPre(event.summary + ' (' + when + ')')
      }
    } else {
      appendPre('No upcoming events found.');
    }
  });
}
// Make an API call to create an event.  Give feedback to user.
function createEvent(eventData) {
  // First create resource that will be send to server.
    var resource = {
        "summary": eventData.eventTitle,
        "start": {
          "dateTime": new Date(eventData.date + " " + eventData.startTime).toISOString()
        },
        "end": {
          "dateTime": new Date(eventData.date + " " + eventData.endTime).toISOString()
          }
        };
    // create the request
    var request = gapi.client.calendar.events.insert({
      'calendarId': 'primary',
      'resource': resource
    });
  
    // execute the request and do something with response
    request.execute(function(resp) {
      console.log(resp);
      alert("Your event was added to the calendar.");
    });
  }

// //   Biometric form
const form = document.getElementById('form');
const Username = document.getElementById('Username');
const Height = document.getElementById('Height');
const Weight = document.getElementById('Weight');
const BballExperience = document.getElementById('Bball Experience');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs ();
});

function checkInputs() {
  // get values from the inputs
  const usernameValue = Username.value.trim();
  const heightValue = Height.value.trim();
  const weightValue = Weight.value.trim();
  const bballExperienceValue = BballExperience.value.trim(); 
}