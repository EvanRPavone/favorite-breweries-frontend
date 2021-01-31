class Brewery {
    constructor(name, city, state, beers) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.favorites = beers;
    }

    createBreweryCard() {
        if (this.favorites) {
            const card = document.createElement('div');
            card.className = "card";
            
            const cardInfo = document.createElement('div');
            cardInfo.className = "card-info";

            const name = document.createElement('h1');
            name.innerHTML = this.name;
            cardInfo.appendChild(name);

            const cityState = document.createElement('p');
            cityState.innerHTML = this.city + ', ' + this.state;
            cardInfo.appendChild(cityState);

            const favHeader = document.createElement('h3');
            favHeader.innerHTML = "Favorite Beers";
            cardInfo.appendChild(favHeader);

            const ul = document.createElement('ul');
            for (let favorite of this.favorites) {
                let li = document.createElement('li');
                li.innerHTML = favorite;
                ul.appendChild(li);
            }
            cardInfo.appendChild(ul);

            card.appendChild(cardInfo);
            document.querySelector("#brewery-card-container").appendChild(card);
        }
    }
}