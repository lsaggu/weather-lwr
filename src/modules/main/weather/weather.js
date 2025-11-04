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
        const apiKey = 'my-api-key'; // Need to get API key // Need to determine if there is a secure way to store key in project directory
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        this.temperature = data.main.temp;
        this.humidity = data.main.humidity;
        this.description = data.weather[0].description;
    }
}