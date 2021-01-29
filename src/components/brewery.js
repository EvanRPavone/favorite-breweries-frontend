class Brewery {
    constructor(id, name, city, state, favorites) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.state = state;
        this.favorites = favorites;
        this.adapter = new BreweriesAdapter();
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
        deleteBtn.id = 'remove-brewery'
        deleteBtn.innerHTML = 'Remove Brewery'
        console.log(this.adapter)
        // deleteBtn.addEventListener("click", function() {
        //     this.adapter.getBreweries();
        //     this.adapter.removeBrewery();
        //     console.log("Hello")
        // })
        const editBtn = document.createElement('button')
        editBtn.id = 'edit-brewery'
        editBtn.innerHTML = 'Edit Brewery'
        footer.appendChild(deleteBtn)
        footer.appendChild(editBtn)
        card.appendChild(cardInfo)
        card.appendChild(footer)
        document.getElementById('brewery-card-container').appendChild(card)
    }

    removeBreweryCard(){
        const card= document.getElementsByClassName("card")
        card.remove()
    }


}