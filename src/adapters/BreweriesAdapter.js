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

    removeBrewery() {
        const breweryId = data.attributes.id
        fetch (`${this.baseURL}/${breweryId}`, {
            method: "DELETE"
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            deleteBreweryFromApi(configurationObject).then(function(json) {
                Brewery.removeBreweryCard();
            })
        })
    }

    deleteBreweryFromApi(configurationObject) {
        return fetch(this.baseURL, configurationObject)
        .then(resp => resp.json())
        .catch(error => console.log("Error: " + error))
    }
}

// //   method: "DELETE",
// //   headers: {
// //     "Content-Type": "application/json",
// //     "Accept": "application/json"
// this.adapter.removeBreweryFromApi(configurationObject).then(function(json) {
//     brewery.removeBreweryCard();
//   }.bind(this))