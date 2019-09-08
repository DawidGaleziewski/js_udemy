//let apiUrl = 'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e7336c281c3b4f9e7da03a467444db14';


//Init storage class
const storage = new Storage();

//Get stored location data
const weatherLocation = storage.getLocationData();

//Init weather object
const weather = new Weather(weatherLocation.country, weatherLocation.city);

//Init ui object
const ui = new UI();





//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
    weather.getWeather()
    .then(results => {
        console.log(results);
        ui.paint(results);
    })
    .catch(err => console.log(err))
}


//Change location
//We need jquery to close modal
document.getElementById('w-change-btn').addEventListener('click', (event)=>{
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    //Set new location
    weather.changeLocation(country, city);

    //Set location in ls
    storage.setLocationData(country, city )

    //Update the ui
    getWeather();

    $('#locModal').modal('hide')
})