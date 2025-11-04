import { LightningElement } from "lwc";

export default class Weather extends LightningElement {
    city = '';
    temperature = '';
    humidity = '';
    description = '';

    handleCityChange(event) {
        this.city = event.target.value;
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('form submitted');
        this.getWeather();
    }

    async getWeather() {
        const apiKey = 'your-api-key';  // NOTE: This is an insecure pattern that publicly exposes your API Key
                                        // A safer pattern is to call a backend service that can call the API using the private credentials
                                        // The backend service should employ CORS to restrict access to approved consumers
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        this.temperature = data.main.temp;
        this.humidity = data.main.humidity;
        this.description = data.weather[0].description;
    }
}