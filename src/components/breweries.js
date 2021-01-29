class Breweries {
    constructor() {
      this.breweries = [];
      this.adapter = new BreweriesAdapter();
      this.formSubmit = document.getElementById("form-submit");
      this.formButtons = document.getElementById("form-show-buttons");
      this.addBreweryButton = document.getElementById("add-brewery");
      this.cardContainer = document.getElementById('brewery-card-container');
      this.bindEventListeners();
      this.fetchAndLoadBreweries();
    }
  
    fetchAndLoadBreweries() {
      this.adapter.getBreweries().then(breweries => this.createBreweries(breweries)).then(() => this.addBreweriesToDom())
    }
  
    bindEventListeners() {
      this.formSubmit.addEventListener("click", function() {
        event.preventDefault();
        this.addBrewery();
      }.bind(this))
      this.addBreweryButton.addEventListener("click", function() {
        this.toggleForm();
        this.toggleButtons();
      }.bind(this))
    }
  
    createArrayOfBreweryFavorites(favorites) {
      let favoriteArray = [];
      for (let favorite of favorites) {
        favoriteArray.push(favorite.name);
      }
      return favoriteArray
    }
  
    createBreweries(breweries) {
      for (let brewery of breweries) {
        let favorites = this.createArrayOfBreweryFavorites(brewery.attributes.favorites)
        this.breweries.push(new Brewery(brewery.attributes.name, brewery.attributes.city, brewery.attributes.state, favorites))
      }
    }
  
    addBreweriesToDom() {
      for (let brewery of this.breweries) {
        brewery.createBreweryCard()
      }
    }
  
    addBrewery() {
      const form = event.target.parentElement
      const favorites = form[3].value.split(', ')
      const brewery = new Brewery(form[0].value, form[1].value, form[2].value, favorites)
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
      this.adapter.postBreweryToApi(configurationObject).then(function(json) {
        brewery.createBreweryCard();
        this.toggleButtons();
        this.toggleForm();
      }.bind(this))
    }
  
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
  
    clearBreweries() {
      this.cardContainer.innerHTML = "";
    }

    deleteBrewery() {
        const breweryDiv = document.getElementsByClassName
        const breweryDivId = this.parentElement.dataset.id

    }
}