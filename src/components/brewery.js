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
        name.innerHTML = this.name
        cardInfo.appendChild(name)
        const cityState = document.createElement('p')
        cityState.innerHTML = this.city + ', ' + this.state
        cardInfo.appendChild(cityState)
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
        const deleteBtn = document.createElement('button')
        deleteBtn.className = 'remove-brewery'
        deleteBtn.innerHTML = 'Remove Brewery'
        // const editBtn = document.createElement('button')
        // editBtn.className = 'edit-brewery'
        // editBtn.innerHTML = 'Edit Brewery'
        footer.appendChild(deleteBtn)
        // footer.appendChild(editBtn)
        card.appendChild(cardInfo)
        card.appendChild(footer)
        document.getElementById('brewery-card-container').appendChild(card)
    }
}