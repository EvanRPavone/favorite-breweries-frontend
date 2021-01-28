class FavoritesAdapter {
    constructor() {
        this.baseURL = "http://localhost:3000/favorites"
    }

    getFavorites(){
        return fetch(this.baseURL).then(response => response.json()).then(json => (json.data))
    }
}