class BreweriesAdapter {
    constructor() {
        this.baseURL = "http://localhost:3000/breweries"
    }

    getBreweries() {
        return fetch(this.baseURL).then(response => response.json()).then(json => json.data)
        console.log("This is the data" + JSON.stringify(data))
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
        console.log("Hello")
        const breweryId = brewery.attributes.id
        console.log("Hello fucker")
        fetch (`${this.baseURL}/${breweryId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        Brewery.removeBreweryCard()
        console.log("Hello Fucker you made it" + breweryId);
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