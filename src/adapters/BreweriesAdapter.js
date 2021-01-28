class BreweriesAdapter {
    constructor() {
        this.baseURL = "http://localhost:3000/breweries"
    }

    getBreweries() {
        return fetch(this.baseURL).then(response => response.json()).then(json => json.data)
    }

    postBreweryToApi(configurationObject) {
        return fetch(this.baseURL, configurationObject)
        .then(response => response.json())
        .catch(error => console.log("Error: " + error))
    }

    getBreweryByFavorite(favorite) {
        return fetch(this.baseURL + `/${favorite}`).then(response => response.json())
    }
}