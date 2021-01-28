class Brewery {
    constructor(name, city, state, favorites) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.favorites = favorites;
    }

    createBreweryCard() {
        const card = document.createElement('div')
        card.className = "card"
        const cardInfo = document.createElement('div')
        cardInfo.className = "card-info"
        const name = document.createElement('h1')
        name.innerHTML = this.title
        cardInfo.appendChild(name)
        const favHeader = document.createElement('h3')
        favHeader.innerHTML = "Favorite Beers:"
        cardInfo.appendChild(favHeader)
        const ul = document.createElement('ul')
        for (let favorite of this.favorites) {
            let li = document.createElement('li')
            li.innerHTML = favorite
            ul.appendChild(li)
        }
        cardInfo.appendChild(ul)
        const footer = document.createElement('div')
        footer.className = 'card-footer'
        const city = document.createElement("p")
        city.innerHTML = this.city
        footer.appendChild(city)
        const state = document.createElement("p")
        state.innerHTML = this.state
        footer.appendChild(state)
        card.appendChild(cardInfo)
        card.appendChild(footer)
        document.getElementById('brewery-card-container').appendChild(card)
    }
}