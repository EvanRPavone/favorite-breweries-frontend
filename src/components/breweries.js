class Breweries {
    constructor() {
        this.breweries = [];
        this.baseURL = "http://localhost:3000/breweries";
        this.favoritesURL = "http://localhost:3000/favorites"
        this.formSubmit = document.querySelector("#form-submit");
        this.formButtons = document.querySelector("#form-show-buttons");
        this.addBreweryButton = document.querySelector("#add-brewery");
        this.removeBreweryButton = document.querySelector("#remove-breweries");
        this.cardContainer = document.querySelector("#brewery-card-container");
        this.fetchAndLoadBreweries();
        this.bindEventListeners();
    }

    fetchAndLoadBreweries(){
        return fetch(this.baseURL)
        .then(response => response.json())
        .then(json => json.data)
        .then(breweries => this.createBreweries(breweries))
        .then(() => this.addBreweriesToDom());
    }

    bindEventListeners() {
        this.formSubmit.addEventListener("click", function() {
            event.preventDefault();
            this.addBrewery();
            this.createBreweries(this.breweries);
        }.bind(this));
        this.addBreweryButton.addEventListener("click", function() {
            this.toggleForm();
            this.toggleButtons();
        }.bind(this));
        this.removeBreweryButton.addEventListener("click", function() {
            alert("This will Delete all Breweries");
            this.removeBreweries();
        }.bind(this));
    }

    // CREATING BREWERIES - POST

    createArrayOfBreweryFavorites(favorites) {
        let favoriteArray = [];
        for (let favorite of favorites) {
          favoriteArray.push(favorite.beer);
        }
        return favoriteArray;
    }

    createBreweries(breweries) {
    
        for (let brewery of breweries) {
            let beers = this.createArrayOfBreweryFavorites(brewery.attributes.favorites);
            this.breweries.push(new Brewery(brewery.attributes.name, brewery.attributes.city, brewery.attributes.state, beers));
        }
    }

    addBrewery() {
        const form = event.target.parentElement;
        const favorites = form[3].value.split(', ');
        const brewery = new Brewery(form[0].value, form[1].value, form[2].value, favorites);
        const configurationObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "name": form[0].value,
                "city": form[1].value,
                "state": form[2].value,
                "favorites": favorites
            })
        };
        fetch(this.baseURL, configurationObject)
        .then(resp => resp.json())
        .catch(error => console.log("Error: " + error))
        .then(function(json) {
            brewery.createBreweryCard();
            this.toggleButtons();
            this.toggleForm();
        }.bind(this));
    }

    addBreweriesToDom() {
        for (let brewery of this.breweries) {
            brewery.createBreweryCard();
        };
    }

    // DELETE BREWERIES

    removeBreweries() {
        fetch(this.baseURL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        this.removeBreweryCards();
        this.deleteBreweryFromApi();
        this.removeFavorites();
    }

    removeBreweryCards() {
        const allCards = document.querySelector("#brewery-card-container");
        allCards.innerHTML = "";
    }

    deleteBreweryFromApi() {
        return fetch(this.baseURL)
        .then(resp => resp.json())
        .catch(error => console.log("Error: " + error));
    }

    // FAVORITES

    getFavorites(){
        return fetch(this.favoritesURL)
        .then(resp => resp.json())
        .then(json => (json.data));
    }

    removeFavorites() {
        console.log("Hello")
        fetch(this.favoritesURL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        console.log("removing favorites");
        this.removeFavoritesFromApi();
        console.log("Removing All Favorites Now");
    }

    removeFavoritesFromApi() {
        console.log("Trying To remove Favorites from API");
        return fetch(this.favoritesURL)
        .then(resp => resp.json())
        .catch(error => console.log("Error: " + error));
        console.log("Successfully Removed from API")
    }

    // Form Control

    hideOrShowElement(element) {
        if (element.classList.contains("hidden")) {
            element.classList.remove("hidden");
        } else {
            element.className += " hidden";
        }
    }

    toggleForm() {
        const form = this.formSubmit.parentElement;
        this.hideOrShowElement(form);
    }

    toggleButtons() {
        this.hideOrShowElement(this.formButtons);
    }
}