class Weather {
    constructor(country, city){
        this.apiKey = 'e7336c281c3b4f9e7da03a467444db14';
        this.city = city;
        this.country = country;
    }

    //Fetch weather from API
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}`);
        
        const responseData = await response.json();
        return responseData
    }

    //Change weather location
    changeLocation(country, city){
        this.country = country;
        this.city = city; 
    }
}