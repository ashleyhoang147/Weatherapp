
function init(event){
  event.preventDefault()
  var cityNameEl = document.getElementById("city-name");
  var cityValue = $('#city-name').val();
  //on click
  console.log('cityNameEl--->',cityNameEl)
  console.log('cityValue-->', cityValue)
  // This is our API key
  var APIKey = "166a433c57516f51dfab1f7edaed8413";
  
  // Here we are building the URL we need to query the database
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" +
   cityValue +"&cnt=5&appid=" + APIKey;
  // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
          // Log the queryURL
          console.log(queryURL);

          // Log the resulting object
          console.log(response);
          // Transfer content to HTML
          var celcius = Math.round(parseFloat(response.list.temp)-273.15);
          var fahrenheit = Math.round(((parseFloat(response.list.temp)-273.15)*1.8)+32); 
          
          document.getElementById('description').innerHTML = response.weather.description;
          document.getElementById('temp').innerHTML = celcius + '&deg;';
          document.getElementById('location').innerHTML = response.city.name;
  });  
}