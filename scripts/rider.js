var from;
var to;

$(function () {
  $("#map2").locationpicker({
    location: { latitude: 43.852886439552385, longitude: 18.391091942787163 },
    radius: 0,
    inputBinding: {
      locationNameInput: $("#location2"),
    },
    enableAutocomplete: true,
    onchanged: function (currentLocation, radius, isMarkerDropped) {
      to = currentLocation;
    },
  });
});

var result;

function showPosition() {
  // Store the element where the page displays the result
  result = document.getElementById("result");

  // If geolocation is available, try to get the visitor's position
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    result.innerHTML = "Getting the position information...";
  } else {
    alert("Sorry, your browser does not support HTML5 geolocation.");
  }
}

// Define callback function for successful attempt
function successCallback(position) {
  result.remove();
  $(function () {
    $("#map1").locationpicker({
      location: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
      radius: 0,
      inputBinding: {
        locationNameInput: $("#location1"),
      },
      enableAutocomplete: true,
      onchanged: function (currentLocation, radius, isMarkerDropped) {
        from = currentLocation;
      },
    });
  });
}

// Define callback function for failed attempt
function errorCallback(error) {
  if (error.code == 1) {
    result.innerHTML =
      "You've decided not to share your position, but it's OK. We won't ask you again.";
  } else if (error.code == 2) {
    result.innerHTML =
      "The network is down or the positioning service can't be reached.";
  } else if (error.code == 3) {
    result.innerHTML =
      "The attempt timed out before it could get the location data.";
  } else {
    result.innerHTML = "Geolocation failed due to unknown error.";
  }
}
showPosition();

document.getElementById("confirm").addEventListener("click", () => {
  if (from && to) {
    console.log("From: " + from.latitude + "\nTo: " + to);
  }
});
