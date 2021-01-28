class Favorites {
    constructor() {
        this.adapter = new FavoritesAdapter();
        this.favoriteDropDown = document.getElementById("filter-dropdown");
        this.fetchAndPopulateDropDown();
    }

    fetchAndPopulateDropDown() {
        this.adapter.getFavorites().then(json => this.populateFavoriteDropDown(json))
    }

    populateFavoriteDropDown(data) {
        data.sort((a, b) => (a.attributes.name > b.attributes.name) ? 1 : -1)
        for (let favorite of data) {
            let option = document.createElement("option")
            option.value = favorite.attributes.name
            option.innerHTML = favorite.attributes.name
            this.favoriteDropDown.appendChild(option)
        }
    }
}